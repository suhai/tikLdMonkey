import React from 'react';
import { values, merge } from 'lodash';
import { NavLink, Route, Switch } from 'react-router-dom';

class UserPageBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let username = this.props.match.params.username;
    this.props.fetchUser(username);
  }

  componentWillReceiveProps(nextProps) {
    let l = nextProps.location.pathname.length;
    if (nextProps.location.pathname !== this.props.location.pathname) {
      let username = nextProps.match.params.username;
      this.props.fetchUser(username);
    }
  }

  render() {
    let user = this.props.user;
        
    return (
      <section className='user-page-bottom'>
        <ul className='user-page-nav'>
          <li className='user-page-options'>
          <button onClick={this.editUser} className='user-page-edit'>Edit</button>
          <button className='user-page-delete'>Delete</button>
          </li>
        </ul>
      </section>
    );
  }
}

export default UserPageBottom;
