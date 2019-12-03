import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ProjectRequest from '../../../../API/Project/index';
import UserRequest from '../../../../API/User/index';
import CourseRequest from '../../../../API/Course/index';
import TeamRequest from '../../../../API/Team/index';
import { ExpansionPanel } from './components/index';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Button,
  TextField,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const NewProject = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    project_id: '',
    projectName: window.sessionStorage.getItem('projectName') != null ? window.sessionStorage.getItem('projectName') : null,
    projectDescription: window.sessionStorage.getItem('projectDescription') != null ? window.sessionStorage.getItem('projectDescription') : null,
    event: '',
    numberOfTeam: 0,
  });

  const [milestones, setMilstones] = useState([])
  const [milestone_id, setMilestone_id] = useState([])
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    window.sessionStorage.setItem(event.target.name, event.target.value)

  };
  const createProject = async () => {
    var result = await ProjectRequest.createProject(window.sessionStorage.getItem('projectName'), window.sessionStorage.getItem('projectDescription'))
    const project_id = result.insertId;
    result = await UserRequest.updateStudentHasProjects(project_id);
    result = await CourseRequest.updateCourseHasProjects(props.course_id, project_id)
    if (milestone_id.length != 0) {
      milestone_id.map(async (i) => {
        await ProjectRequest.updateProjectHasMilestones(project_id, i)
      })
    }
    console.log(values.numberOfTeam)
    if(values.numberOfTeam !=0)
    { 
       for(var i=1; i<=values.numberOfTeam; i++)
       {
         var teamName = "Team # " + i 
        await TeamRequest.addTeam(project_id, i, teamName, window.sessionStorage.getItem('projectName'), window.sessionStorage.getItem('projectDescription'))
       }
    }
    // Add Team
    props.history.push("/dashboard")
  }

  const addMilestone = async () => {
    var copy = milestones
    const milestone = { milestone_title: '', milestone_description: '' };
    copy.push(milestone)
    setMilstones(copy)
    setValues(
      {
        event: null,
      }
    )
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          // subheader="The information can be edited"
          title="Project"
        />
        <CardContent>
          <Typography>Project Name</Typography>
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              // label="Project Name"
              margin="dense"
              name="projectName"
              onChange={handleChange}
              required
              value={values.projectName}
              variant="outlined"
            />
          </Grid>
          <Grid
            container
            spacing={3}
          >
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Project ID"
                margin="dense"
                name="project_id"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid> */}

            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography>Project Description</Typography>
              <TextField
                fullWidth
                // label="Project Description"
                margin="dense"
                name="projectDescription"
                multiline
                rows='4'
                style={{ width: 600 }}
                onChange={handleChange}
                required
                value={values.projectDescription}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            color="primary"
            variant="contained"
            onClick={addMilestone}
            style={{ marginBottom: 10, marginLeft: 570 }}
          >
            Add Milestone
          </Button>
          <Grid
            item
            md={6}
            xs={12}
          >
            <ExpansionPanel setMilestone_id={setMilestone_id} milestones={milestones} />
          </Grid>
          <TextField
            id="standard-number"
            label="Number of Team"
            type="number"
            name="numberOfTeam"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            onChange={handleChange}
          />
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={createProject}
            style={{ marginLeft: 600 }}
          >
            Save details
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

NewProject.propTypes = {
  className: PropTypes.string
};

export default NewProject;
