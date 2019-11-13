import React , {Component} from 'react';
import { Link } from 'react-router-dom'

/**
  * @desc Functional function header
  * @desc Functional function header
  * @desc Functional function header
*/
export class Header extends Component
{
  render()
  {
    return (
      <div>
        <header style = {headerStyle}>
          <h1> Home Page </h1>
          <Link style = {linkStyle} to = "/">Home</Link> | <Link style = {linkStyle} to="/about">About</Link>
        </header>
      </div>
    )
  }
}

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
}

const linkStyle = {
  color:'#fff',
  textDecoration:'none'
}


export default Header;
