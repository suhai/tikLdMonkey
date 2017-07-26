import React from 'react';
import { values, merge } from 'lodash';
import SideBarContainer from '../sidebar/sidebar_container';
import { fetchGame, fetchGames } from "../../actions/game_actions";

class GameHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }

  render() {

    return (
      <main className='loggedhome-body'>
        <div className='main-index'>
          <nav className='content-nav'>
            <ul>
              <div className='upload-buttons'>
                <h2>Game Zone <button  className='addnew'>Add Game</button></h2>
              </div>
            </ul>
          </nav>
          <div className='nav-border' />
          <p>This Component is still Under Construction.</p>
          <p>It will be populated with a list of Games from the database and with CRUD functionality.</p>
          <p>Take a look at the sample Games on the Games section of the Home page</p>
        </div>
          {/* <div>
            <h1>GAMES</h1>
            <ul>{mappedGames}</ul>
          </div>   */}
        <SideBarContainer />
      </main>
    );
  }
}

export default GameHome;

