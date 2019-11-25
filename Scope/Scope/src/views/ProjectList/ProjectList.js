import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CourseRequest from '../../API/Course/index';
import ProjectRequest from '../../API/Project/index';
import { SearchInput } from '../../components';

// import { ProductsToolbar, ProductCard } from './components';
import { ProjectToolbar, ProjectCard, CourseTab } from './components';
import mockData from './data';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    },
    pagination: {
        marginTop: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}));

const styles = {
    root: {
        padding: 10,
    },
    content: {
        marginTop: 20,
    },
    pagination: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}

/*
* Represent a Project List component
*/
class ProjectList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            course_list: [],
            // Selected_course stores project_id
            selected_course: null,
            project_list: [],
        }
    }

    async componentDidMount() {
        let course_result = await CourseRequest.fetchStudentCourseList()
        this.setState(
            {
                course_list: course_result,
                // Default selected course is the first course in the array
                selected_course: course_result[0].course_id
            })
        let project_result = await ProjectRequest.fetchCourseProject(this.state.selected_course)
        this.setState(
            {
                project_list: project_result,
            })
    }

    onChangeSelectedCourse = async (selected_course) => {
        await this.setState(
            {
                selected_course: selected_course
            })
        let project_result = await ProjectRequest.fetchCourseProject(this.state.selected_course)
        this.setState(
            {
                project_list: project_result,
            })
    }

    async reFetchProject() {
        let project_result = await ProjectRequest.fetchCourseProject(this.state.selected_course)
        this.setState(
            {
                project_list: project_result,
            })
    }

    /** Search Project */
    onChangeSearch = (event) => {
        const text = event.target.value;
        const filter = this.state.project_list.filter(item =>
            item.project_name.includes(text)
        );
        this.setState({
            project_list: filter,
            search: text
        });
        if (text.length == 0) {
            this.reFetchProject()
        }
    }


    render() {
        return (
            <div style={styles.root}>
                {/**Example Course data div*/}
                {/* <div className="Course_data">
                    <a>Course List Data</a>
                    {this.state.course_list.map((item) =>
                        <li>{item.course_name}</li>
                    )}
                </div> */}
                <CourseTab course_list={this.state.course_list} onChangeCourse={this.onChangeSelectedCourse} />
                <SearchInput
                    placeholder="Search Project"
                    onChange={this.onChangeSearch}
                    value={this.state.search}
                />
                <div style={styles.content}>
                    <Grid
                        container
                        spacing={3}
                    >
                        {this.state.project_list.map(p => (
                            <Grid
                                item
                                key={p.project_id}
                                lg={4}
                                md={6}
                                xs={12}
                            >
                                <ProjectCard project={p} props={this.props} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>

        )
    }
}

export default ProjectList;
