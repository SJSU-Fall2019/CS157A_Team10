import React, { useState, Component, } from 'react';
import CourseRequest from '../../API/Course/index';
import ProjectRequest from '../../API/Project/index';
import TeamRequest from '../../API/Team/index';
// Remove react-window, ScrollMenu, HorizontalScroll library later


const styles = {
  projectListStyle:
  {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto',
  },
  projectStyle:
  {
    minWidth: 600,
  },
}

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      course_list: [],
      // Selected_course stores the selected course_id
      selected_course: null,
      project_list: [],
      // Selected_project stores the selected project_id
      selected_project: null,
      team_list: [],
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
        // Default selected project is the first project in the array
        selected_project: project_result[0].project_id
      })
    let team_result = await TeamRequest.fetchTeam(this.state.selected_project)
    this.setState(
      {
        team_list: team_result
      })
  }

  render() {
    return (
      <div className="Dashboard">
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <div className="Course_data">
            <a>Course List Data</a>
            {this.state.course_list.map((item) =>
              <li>{item.course_name}</li>
            )}
          </div>
          <div className='Project_data'>
            <a>Project List data</a>
            {this.state.project_list.map((item) =>
              <li>{item.project_name}</li>
            )}
          </div>
          <div className='Team_data'>
            <a>Team List data</a>
            {this.state.team_list.map((item) =>
              <li>{item.team_name} Number of Members: {item.Team_Member}</li>
            )}
          </div>
        </div>
      </div>
    )
  }
}



export default Dashboard;
