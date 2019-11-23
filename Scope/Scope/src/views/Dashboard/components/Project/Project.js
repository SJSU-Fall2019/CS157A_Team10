import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';



const styles = {
  root: {
    height: '100%',
    width: 250, height: 200, margin: 15,
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: 5,
    display: 'flex',
    alignItems: 'center',
  },
  differenceIcon: {
    // color: theme.palette.error.dark
    color: 'red',
  },
  differenceValue: {
    // color: theme.palette.error.dark,
    marginRight: 1,
    color: 'red',
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount()
  {
     console.log(this.props)
  }
  render() {
    return (
      <Card
        style={styles.root}
        onClick = {()=>
        {
           alert("Display team or project information")
        }}
      >
        <CardContent>
          <Grid
            container
            justify="space-between"
          >
            <Grid item>
              <Typography
                style={styles.title}
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                <label>{this.props.project_institution}</label>
              </Typography>
              <Typography variant="h2">
                <label>{this.props.project_title}</label>
              </Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
          {/* <div className={"DateSection"} style={{marginTop: 60}}>
            <div style={styles.difference}>
              <EventAvailableIcon style={styles.differenceIcon} />
              <Typography
                style={styles.caption}
                variant="caption"
              >
                <label>Start Date: {this.props.project_startDate}</label>
              </Typography>
            </div>
            <div style={styles.difference}>
              <EventAvailableIcon style={styles.differenceIcon} />
              <Typography
                style={styles.caption}
                variant="caption"
              >
                <label>End Date: {this.props.project_endDate}</label>
              </Typography>
            </div>
          </div> */}
        </CardContent>
      </Card>
    );
  }
}

export default Project;