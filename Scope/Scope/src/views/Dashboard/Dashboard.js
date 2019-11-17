import React, { useState, Component, } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Box } from '@material-ui/core';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import CourseRequest from '../../API/Course/index';
// Remove react-window, ScrollMenu, HorizontalScroll library later

import {
  Project,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders,
  TeamList,

} from './components';

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
      selected_course: null,
      project_list: [],
      selected_project: null,
      team_list: [],
    }
  }

  async componentDidMount() {
    let result = await CourseRequest.fetchStudentCourseList()
    this.setState(
      {
        course_list: result
      })
  }


  render() {
    return (
      <div className="Dashboard">
        {this.state.course_list.map((item) =>
          <li>{item.course_name}</li>
        )}
      </div>
    )
  }
}



export default Dashboard;
