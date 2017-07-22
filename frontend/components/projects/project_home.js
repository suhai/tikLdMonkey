import React from 'react';
import { values, merge } from 'lodash';
import SideBarContainer from '../sidebar/sidebar_container';
import ProjectForm from './project_add_form';

class ProjectHome extends React.Component {

  render() {
    return (
      <main className='loggedhome-body'>
        <div className='main-index'>
          <nav className='content-nav'>
            <ul>
              <div className='upload-buttons'>
                <h2>Project Zone <button  className='addnew'>Add Project</button></h2>
              </div>
            </ul>
          </nav>
          <div className='nav-border' />
          <p>This Component is still Under Construction.</p>
          <p>It will be populated with a list of my Projects from the database and with CRUD functionality.</p>
        </div>
        <SideBarContainer />
      </main>
    );
  }
}

export default ProjectHome;
