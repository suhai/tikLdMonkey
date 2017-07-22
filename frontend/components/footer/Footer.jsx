import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { isActive: '' };
  // }

  render() {
    return (
      <nav className='navigation'>
        <ul>
          <li><NavLink exact to='#'>About</NavLink></li>
          <li><NavLink to='#'>Terms</NavLink></li>
          <li><NavLink to='#'>Email</NavLink></li>
          <li><NavLink to='#'>Facebook</NavLink></li>
          <li><NavLink to='#'>Twitter</NavLink></li>
          <li><NavLink to='#'>Resume</NavLink></li>
          <li><NavLink to='#'>Logo</NavLink></li>
          <p className='logo-name'>The tikLdMonkey ©</p>
        </ul>
      </nav>
    );
  }
}

export default Footer;
