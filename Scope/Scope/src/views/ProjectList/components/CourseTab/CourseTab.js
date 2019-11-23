import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar} from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


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
  
  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
        <Toolbar>
        <Tabs>
          {props.course_list.slice(0,4).map((course)=>
            {
                return <Tab label ={course.course_name} value ={course.course_name}
                      onClick={(value)=>
                      { //Implement action listener in the project list
                        console.log(value)
                      }}/>
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
