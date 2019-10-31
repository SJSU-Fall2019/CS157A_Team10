import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  difference: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center'
  },
  differenceIcon: {
    color: theme.palette.error.dark
  },
  differenceValue: {
    color: theme.palette.error.dark,
    marginRight: theme.spacing(1)
  }
}));

const Project = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      style={{ width: 250, height: 200, margin: 15 }}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              <label>{props.project_institution}</label>
            </Typography>
            <Typography variant="h2">
              <label>{props.project_title}</label>
            </Typography>
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
        <div className={classes.difference} style={{ marginTop: 40 }}>
          <EventAvailableIcon className={classes.differenceIcon} />
          <Typography
            className={classes.caption}
            variant="caption"
          >
            <label>Start Date: {props.project_startDate}</label>
          </Typography>
        </div>
        <div className={classes.difference}>
          <EventAvailableIcon className={classes.differenceIcon} />
          <Typography
            className={classes.caption}
            variant="caption"
          >
            <label>End Date: {props.project_endDate}</label>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

Project.propTypes = {
  className: PropTypes.string
};

export default Project;