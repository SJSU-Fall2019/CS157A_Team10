import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Box } from '@material-ui/core';
// Remove react-window, ScrollMenu, HorizontalScroll library later

import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders,
} from './components';
import FlatList from 'flatlist-react';

class Dashboard extends Component {

  constructor(props) {
    super(props)
  }
  state = {
    project: [
    ]
  }

  async fetchProject() {
    await fetch('http://localhost:8001/user/project',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          auth_token: sessionStorage.getItem('auth_token')
        },

      }).then((response) => {
        response.json()
          .then((responseJson) => {
            this.setState(
              {
                project: responseJson
              }
            )
            this.setState(
              {
                project: this.state.project.splice(0,4)
              }
            )
          })
      })
      .catch((error) => {
        throw error
      });
  }

  componentDidMount() {
    this.fetchProject()
  }

  createProject = () => {
    let table = []
    this.state.project.forEach((p) => {
      console.log(this.state.project)
      table.push(<Budget style={{ margin: 15 }} key={p} 
                project_id={p.project_id} 
                project_title={p.project_title} 
                project_institution={p.project_institution}
                project_startDate = {p.project_startDate}
                project_endDate ={p.project_endDate}/>)
    })
    return table
  }

  render() {
    return (
      <div className="Dashboard" >
        <Box className="project_list" flexDirection='row' display='flex'>
          {this.createProject()}
        </Box>
        <div className="display_board"></div>
      </div>
    );
  }
}



export default Dashboard;
