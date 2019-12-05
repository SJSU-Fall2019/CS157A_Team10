import React, { Component, } from 'react';
import CourseRequest from '../../API/Course/index';
import TeamRequest from '../../API/Team/index';
import ProjectRequest from '../../API/Project/index';
import { CourseScrollTab} from './components';


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
class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            course_list: [],
            // Selected_course stores the selected course_id
            selected_course: null,
            project_list: [],
            selected_project: null
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
                    onDeleteProject = {this.onDeleteProject}
                    //onChangeCourse={this.onChangeSelectedCourse}/></div>
                    onChangeCourse={this.onChangeSelectedCourse} onChangeProject={this.onChangeSelectedProject} />
                </div>
            </div>


        );// end return
    }
}

export default ProjectList;
