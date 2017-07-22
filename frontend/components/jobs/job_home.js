import React from 'react';
import { values, merge } from 'lodash';
import SideBarContainer from '../sidebar/sidebar_container';
import JobForm from './job_add_form';

class JobHome extends React.Component {

  render() {
    return (
      <main className='loggedhome-body'>
        <div className='main-index'>
          <nav className='content-nav'>
            <ul>
              <div className='upload-buttons'>
                <h2>Job Zone <button  className='addnew'>Add Job</button></h2>   
              </div>
            </ul>
          </nav>
          <div className='nav-border' />
          <p>This Component is still Under Construction.</p>
          <p>It will be populated with a list of Job Applications from the database and with CRUD functionality.</p>
          <p>You will also need special privileges to access this page when completed.</p>
        </div>
        <SideBarContainer />
      </main>
    );
  }
}

export default JobHome;
