import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';

const styles = {
  root: {
    padding: 10
  },
  content: {
    marginTop: 20
  }
}


class UserList extends React.Component {
  state = {
    userList: mockData
  }

  fetchUserInfo() {
    fetch('http://localhost:8001/user/all',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          auth_token: sessionStorage.getItem('auth_token')
        },

      }).then((response) => {
        response.json()
          .then((responseJson) => {
            this.setState(
              {
                userList: responseJson
              }
            )
          })
      })
      .catch((error) => {
        throw error
      });
  }

  componentDidMount()
  {
    this.fetchUserInfo()
  }

  render() {
    return (
      <div style={styles.root}>
        <UsersToolbar />
        <div style={styles.content}>
          <UsersTable users={this.state.userList} />
        </div>
      </div>
    );
  }
}

export default UserList;
