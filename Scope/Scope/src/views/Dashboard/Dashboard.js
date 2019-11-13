import React, { useState, Component, } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Box } from '@material-ui/core';
import ScrollMenu from 'react-horizontal-scrolling-menu';
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

  }

  state = {
    project: [],
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
      table.push(<Project style={styles.projectStyle} key={p}
        project_id={p.project_id}
        project_title={p.project_title}
        project_institution={p.project_institution}
        project_startDate={p.project_startDate}
        project_endDate={p.project_endDate} />)
    })
    return table
  }

  TeamList() {

  }

  render() {
    return (
      <div className="Dashboard">
        <div className="project_list" style={styles.projectListStyle}>
          {
            this.state.project.map((p) => {
              return <Project style={{ margin: 15, minWidth:400 }} key={p}
                project_id={p.project_id}
                project_title={p.project_title}
                project_institution={p.project_institution}
                project_startDate={p.project_startDate}
                project_endDate={p.project_endDate} />
            })
          }
        </div>
        <div className="display_board"></div>
        {/* <div className="team_list">
          {
            sessionStorage.getItem('auth_token') ? (
              <TeamList />
            ) : (
                <div></div>
              )
          }
        </div> */}
      </div>
    )
  }
}



export default Dashboard;
