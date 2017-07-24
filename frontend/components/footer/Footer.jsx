import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { isActive: '' };
  // }

  render() {
    return (
      <div className="footer">
        <div className="container">
          <ul>
            <li><NavLink exact to='#'>About</NavLink></li>
            <li><NavLink to='#'>Terms</NavLink></li>
          </ul>
          <ul>
            <li><a href="mailto:soyehuza@gmail.com"><img src="https://res.cloudinary.com/swy/image/upload/v1500279538/images/mail.svg" /></a></li>
            <li><a href="https://www.facebook.com/suhaiy"><img src="https://res.cloudinary.com/swy/image/upload/v1500279538/images/facebook.svg" /></a></li>
            <li><a href="https://www.facebook.com/suhaiy"><img src="https://res.cloudinary.com/swy/image/upload/v1500279538/images/twitter.svg" /></a></li>
            <li className="resume"><a href='https://drive.google.com/open?id=0B3YmJk3--C3rLUpZQVh5MDVBb2s'>Resume</a></li>
          </ul>
          <ul>
            <p className='logo-name'>The tikLdMonkey ©</p>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
