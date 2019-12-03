import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Grid,
  Divider,
  FormControlLabel,
  Checkbox,
  Typography,
  Button
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  item: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const AboutScope = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form>
        <CardHeader
          title="About Scope"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              className={classes.item}
              item
              md={12}
              sm={6}
              xs={12}
            >
              <Typography
                gutterBottom
                variant="h5"
              >
                What is Scope?
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
              >
                Scope is a web application platform 
                that can be used by schools to provide student’s performance review based 
                on sets of project requirements. Scope will ashier a new opportunity for 
                transparency, improvement, and growth among students and instructors. 
              </Typography>
            <br></br>
            <Divider />  
            <br></br>
             <Typography
                gutterBottom
                variant="h5"
             >
                Why Scope?
             </Typography>
             <Typography
                gutterBottom
                variant="h6"
              >
               Scope will usher a newer, easier, faster and dynamic way to deliver 
             students and instructors performance review based on different sets 
             of criteria and milestones that the instructors and the students set. 
             Students will have an opportunity to peer review their team, instructor’s 
             and reflect on their project performance for better growth and  improvement. 
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
      </form>
    </Card>
  );
};

AboutScope.propTypes = {
  className: PropTypes.string
};

export default AboutScope;
