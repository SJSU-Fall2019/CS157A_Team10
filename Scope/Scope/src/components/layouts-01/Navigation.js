import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/fontawesome-free-solid'
import {faUsers} from '@fortawesome/fontawesome-free-solid'
import {faArchive} from '@fortawesome/fontawesome-free-solid'
import {faQuestion} from '@fortawesome/fontawesome-free-solid'
import './Navigation.css'
import SJSULOGO from './logos/SJSU.gif'
/**
  * @desc Functional Side Navigation

*/
export class Navigation extends Component {
  render() {
    return (<div className="wrapper">
      <div className="side_navigation">
        <div style = {logoStyle}></div>
        <ul>
          <li>
            <a href="/"><FontAwesomeIcon className="fas" icon={faHome}/>
              <h3>Home</h3>
            </a>
          </li>
          <li>
            <a href="/"><FontAwesomeIcon className="fas" icon={faUsers}/>
              <h3>Profile</h3>
            </a>
          </li>
          <li>
            <a href="/"><FontAwesomeIcon className="fas" icon={faArchive}/>
              <h3>Dashboard</h3>
            </a>
          </li>
          <li>
            <a href="/"><FontAwesomeIcon className="fas" icon={faQuestion}/>
              <h3>About</h3>
            </a>
          </li>
        </ul>
      </div>

    </div>)
  }
}

const logoStyle = {
  height: '100px',
  width: '100%',
  backgroundImage: `url(${SJSULOGO})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

export default Navigation
