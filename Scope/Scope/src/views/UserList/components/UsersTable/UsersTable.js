import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    padding: 10
  },
  content: {
    marginTop: 20
  }
}

// Google Material UI Table
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);


const profile_pic = ["/images/avatars/avatar_1.png", "/images/avatars/avatar_2.png", "/images/avatars/avatar_3.png", "/images/avatars/avatar_4.png", "/images/avatars/avatar_5.png",
  "/images/avatars/avatar_6.png", "/images/avatars/avatar_7.png", "/images/avatars/avatar_8.png", "/images/avatars/avatar_9.png"]

class UsersTable extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="user_table" style={styles.content}>
        {/* <UsersTable users={this.props.userList} /> */}
        <Paper>
          <Table aria-label="customized user table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Student</StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.userList.map(user => (
                <StyledTableRow key={user.student_firstname}>
                  <StyledTableCell component="th" scope="row">
                    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                      <Avatar alt="Remy Sharp" src={profile_pic[Math.floor(Math.random() * profile_pic.length)]} />

                      <a1 style={{ marginLeft: 20 }}>{user.student_firstname} {user.student_lastname}</a1>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="left">{user.student_email}</StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                  <StyledTableCell align="left"></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default UsersTable;
