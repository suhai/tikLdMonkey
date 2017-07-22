import React from 'react';
import { values, merge } from 'lodash';
import SideBarContainer from '../sidebar/sidebar_container';

class UserHome extends React.Component {

  render() {
    return (
      <main className='loggedhome-body'>
        <div className='main-index'>
          <nav className='content-nav'>
            <ul>
              <div className='upload-buttons'>
                <h2>User Zone <button  className='addnew'>Add User</button></h2>
                
              </div>
            </ul>
          </nav>
          <div className='nav-border' />
          <p>This area is inactive for you.</p>
          <p>You are not authorized to access it's content.</p>
          <p>Please explore other areas of the page.</p>
        </div>
        <SideBarContainer />
      </main>
    );
  }
}

export default UserHome;
