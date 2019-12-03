// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/styles';



// const styles = {

// }

// class ProjectCreation extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//         }

//     }
//     render() {
//         return (
//             <div>
//                 <label>Hello World</label>
//             </div>
//         );
//     }
    
// }

// export default ProjectCreation;
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import NewProject from './components/NewProject';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const ProjectCreation = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
          <NewProject history={props.history} course_id ={props.location.state.course_id}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectCreation;
