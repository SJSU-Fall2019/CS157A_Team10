import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, colors } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    position: 'relative',
    bottom: '0'
  }
}));


const CourseTab = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  // Initial Value need fix
  const [value, setValue] = React.useState("278917254");
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.onChangeCourse(newValue)
  };

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <Tabs onChange={handleChange} value={value}>
          {props.course_list.slice(0, 4).map((course) => {
            return <Tab label={course.course_name} value={course.course_id}></Tab>
          })}
        </Tabs>
      </Toolbar>
    </AppBar>

  );
};

CourseTab.propTypes = {
  className: PropTypes.string,
};

export default CourseTab;
