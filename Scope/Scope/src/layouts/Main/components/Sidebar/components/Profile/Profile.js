import React, { useState, useEffect, useLayoutEffect, Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [userState, setUserState] = useState(
    {
      name: 'Log In',
      bio: '',
      avatar: '/images/avatars/avatar_11.png',
    }
  )

  const fetchUserInfo = (auth_token) => {
    fetch('http://localhost:8001/user/user_info',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          auth_token: auth_token,
        },

      }).then((response) => {
        response.json()
          .then((responseJson) => {
            console.log(responseJson)
            setUserState(userState => ({
              ...userState,
              name: responseJson[0].student_firstname+ " " +responseJson[0].student_lastname
              
            }));

          })
      })
      .catch((error) => {
        throw error
      });
  };
  useEffect(() => {
    // let unmounted = false
    var auth_token = sessionStorage.getItem('auth_token')
    fetchUserInfo(auth_token)
  }, [])

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={userState.avatar}
        to="/settings"
      />
      <Typography
        className={classes.name}
        variant="h4"
      >
        {userState.name}
      </Typography>
      <Typography variant="body2">{userState.bio}</Typography>
    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
