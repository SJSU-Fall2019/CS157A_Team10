import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import { UsersToolbar, UsersTable } from './components';
import { SearchInput } from '../../components';;

const styles = {
  root: {
    padding: 10
  },
  content: {
    marginTop: 20
  }}



/** A User Table contains list of user and their information */
class UserList extends React.Component {
  state = {
    userList: [],
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
      <div className="container" style={styles.root}>
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
        <div className="user_table" style={styles.content}>
          <UsersTable userList={this.state.userList} />
        </div>
      </div>
    );
  }
}
export default UserList;
