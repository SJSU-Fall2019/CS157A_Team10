import React, { useState, Component, } from 'react';
import CourseRequest from '../../API/Course/index';
import ProjectRequest from '../../API/Project/index';
import TeamRequest from '../../API/Team/index';
import { CourseScrollTab, TeamScrollTab } from './components';
// Remove react-window, ScrollMenu, HorizontalScroll library later

// Core Matrial UI
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
    if (course_result.length != 0) {
      this.setState(
        {
          course_list: course_result,
          // Default selected course is the first course in the array
          selected_course: course_result[0].course_id
        })
    }
    let project_result = await ProjectRequest.fetchCourseProject(this.state.selected_course)
    if (project_result.length != 0) {
      this.setState(
        {
          project_list: project_result,
          // Default selected project is the first project in the array
          selected_project: project_result[0].project_id || null
        })
    }
    let team_result = await TeamRequest.fetchTeam(this.state.selected_project)
    if (team_result.length != 0) {
      this.setState(
        {
          team_list: team_result || null
        })
    }
  }
  onDeleteProject = async () => {
    let project_result = await ProjectRequest.fetchCourseProject(this.state.selected_course)
    if (project_result.length != 0) {
      this.setState(
        {
          project_list: project_result,
        })
    }
  }
  /** CallBack function pass down to the component CourseScrollTab */
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

  /** CallBack function pass down to the component ProjectCard inside CourseScrollTab */
  onChangeSelectedProject = async (selected_project) => {
    await this.setState(
      {
        selected_project: selected_project
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
        <div>  <CourseScrollTab course_list={this.state.course_list}
          project_list={this.state.project_list}
          history={this.props.history}
          onDeleteProject = {this.onDeleteProject}
          onChangeCourse={this.onChangeSelectedCourse} onChangeProject={this.onChangeSelectedProject} />
          </div>
        <div>  <TeamScrollTab team_list={this.state.team_list} history={this.props.history} project_id={this.state.selected_project} /></div>
      </div>//


    );// end return
  }
}



export default Dashboard;
