import React from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isActive: ''};
    this.logout = this.logout.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
    this.showProfile = this.showProfile.bind(this);
    this.closeSettings = this.closeSettings.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
    window.location.hash = '/';
  }

  showProfile() {
    window.location.hash = `/${this.props.currentUser.username}`;
  }

  toggleSettings() {
    if (this.state.isActive === '') {
      this.setState({ isActive: 'active' });
    } else {
      this.setState({ isActive: '' });
    }
  }

  closeSettings() {
    setTimeout(() => {
      this.setState({ isActive: '' });
    }, 200);
  }


  render() {
    return (
      <nav className='navigation'>
        <ul>
          <li className='logo'><img src='https://res.cloudinary.com/swy/image/upload/v1499673174/images/monkey.svg'/></li>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/categories'>Categories</NavLink></li>
          <li><NavLink to='/jobs'>JobApps</NavLink></li>
					<li><NavLink to='/:username/messages'>Messages</NavLink></li>   
        </ul>
        <ul className='searchbar'>
          <input placeholder='Search for Anything' className='search-input'></input>
        </ul>
        <ul>
          <li className={`nav-user`}>
            <p tabIndex='0' onBlur={this.closeSettings}
              onClick={this.toggleSettings}
              className={`user ${this.state.isActive}`}>{this.props.currentUser.username} ❯</p>
            <ul id='user-settings' className={this.state.isActive}>
              <li>
                <Link to={`/${this.props.currentUser.username}`}>Profile</Link>
              </li>
              <li onClick={this.logout}>Sign out</li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
