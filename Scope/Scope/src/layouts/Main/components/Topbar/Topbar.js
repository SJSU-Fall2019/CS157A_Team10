import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography  from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    backgroundColor: '#0055A2'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();
  const [notifications] = useState([]);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const SignOut = () =>{
    window.sessionStorage.removeItem("auth_token");
  }

  return (
    
    <AppBar 
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="Logo"
            src="/images/logos/scope_logo_V4.jpg"
          />

          <Typography variant="h3" color="inherit">
            {/* Scope */}
          </Typography> 
          
        </RouterLink>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          centered
          id = "isClicked"
        >
          <Tab label="Home" />
          <Tab label="About" href= "/about"/>
          {/* <Tab label="Team" /> */}
        </Tabs>

        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
            <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton href= "/sign-in"
            className={classes.signOutButton}
            color="inherit"
            onClick={SignOut}
          >
          <InputIcon />
          </IconButton>
          {/* </Link> */}
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
