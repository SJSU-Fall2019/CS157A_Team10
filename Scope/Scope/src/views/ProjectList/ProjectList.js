import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { SearchInput } from '../../components';
import CourseRequest from '../../API/Course/index';
import ProjectRequest from '../../API/Project/index';
import TeamRequest from '../../API/Team/index';
import { CourseScrollTab} from './components'

// import { ProductsToolbar, ProductCard } from './components';
import { ProjectToolbar, ProjectCard, CourseTab } from './components';


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
            // Selected_course stores the selected course_id
            selected_course: null,
            project_list: [],
        }
    }

    

    async componentDidMount() {
        let course_result = await CourseRequest.fetchStudentCourseList()
        if (course_result.length != 0) {
            this.setState(
                {
                    course_list: course_result,
                    // Default selected course is the first course in the array
                    selected_course: course_result[0].course_id
                })
        }
        let project_result = await TeamRequest.fetchMyProject(this.state.selected_course)
        console.log(project_result)
        if (project_result.length != 0) {
            this.setState(
                {
                    project_list: project_result,
                    // Default selected project is the first project in the array
                    selected_project: project_result[0].project_id || null
                })
        }
    }

    /** CallBack function pass down to the component CourseScrollTab */
    onChangeSelectedCourse = async (selected_course) => {
        await this.setState(
            {
                selected_course: selected_course
            })
        let project_result = await TeamRequest.fetchMyProject(this.state.selected_course)
        this.setState(
            {
                project_list: project_result,
            })
    }


    render() {
        return (

            <div className="Dashboard">
                <div>  <CourseScrollTab course_list={this.state.course_list}
                    project_list={this.state.project_list}
                    history={this.props.history}
                    onChangeCourse={this.onChangeSelectedCourse}/></div>
            </div>//


        );// end return
    }
}

export default ProjectList;
