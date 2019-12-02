import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import ProjectRequest from '../../../../API/Project/index';
import UserRequest from '../../../../API/User/index';
import CourseRequest from '../../../../API/Course/index';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Button,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const NewProject = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    project_id: '',
    projectName: '',
    projectDescription: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  console.log(props.course_id)
  const createProject = async () => {
    var result = await ProjectRequest.createProject(values.projectName, values.projectDescription)
    const project_id = result.insertId;
    result = await UserRequest.updateStudentHasProjects(project_id);
    result = await CourseRequest.updateCourseHasProjects(props.course_id, project_id)
    props.history.push("/dashboard")
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
          <Grid
            item
            md={6}
            xs={12}
          >
            <TextField
              fullWidth
              label="Project Name"
              margin="dense"
              name="projectName"
              onChange={handleChange}
              required
              value={values.lastName}
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
              <TextField
                fullWidth
                label="Project Description"
                margin="dense"
                name="projectDescription"
                multiline
                rows='4'
                style={{ width: 600 }}
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={createProject}
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
