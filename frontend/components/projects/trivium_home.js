import React from 'react';
import { values, merge } from 'lodash';
import SideBarContainer from '../sidebar/sidebar_container';
import TriviaForm from './trivium_add_form';

class TriviaHome extends React.Component {

  render() {
    return (
      <main className='loggedhome-body'>
        <div className='main-index'>
          <nav className='content-nav'>
            <ul>
              <div className='upload-buttons'>
                <h2>Trivia Zone <button  className='addnew'>Add Trivia</button></h2>
                
              </div>
            </ul>
          </nav>
          <div className='nav-border' />
          <p>This Component is still Under Construction.</p>
          <p>It will be populated with a list of Trivia from the database and with CRUD functionality.</p>
          <p>Take a look at the sample Trivia on the Trivia section of the Home page</p>
        </div>
        <SideBarContainer />
      </main>
    );
  }
}

export default TriviaHome;
