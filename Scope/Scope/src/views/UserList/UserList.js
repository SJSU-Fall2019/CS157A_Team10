import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import mockData from './data';
import { SearchInput } from '../../components';;

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
    userList: mockData,
    search: '',
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

  componentDidMount() {
    this.fetchUserInfo()
  }

  render() {
    return (
      <div style={styles.root}>
        {/* <UsersToolbar /> */}
        <SearchInput
          placeholder="Search user"
          onChange={(event) => {
            const text = event.target.value;
            const filter = this.state.userList.filter(item =>
              item.student_firstname.includes(text)
            );
            this.setState({
              userList: filter,
              search: text
            });
            if (text.length == 0) {
              this.fetchUserInfo()
            }
          }}
          value={this.state.search}
        />
        <div style={styles.content}>
          <UsersTable users={this.state.userList} />
        </div>
      </div>
    );
  }
}

export default UserList;
