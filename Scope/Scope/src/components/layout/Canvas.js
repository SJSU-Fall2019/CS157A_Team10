import React , {Component} from 'react';
/**
  * @desc Functional Side Navigation

*/
export class Canvas extends Component
{
  state = {
      users: []
  }

  componentDidMount() {
    fetch('/mysql')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  render()
  {
    console.log(this.state)

    const canvasStyle =
    {
      borderStyle : 'ridge',
      borderRadius: '7px',
      borderColor: '#e6e6ff',
      height:'100vh',
    }

    return(
      <div className ='canvas'style ={canvasStyle}>
        <h1>Users</h1>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}> {user.id}</li>
          )}
        </ul>
      </div>
    )
  }

}


export default Canvas
