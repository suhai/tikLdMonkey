import React from 'react';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import Navigation from './navigation';
import UserPageContainer from '../user/user_page_container';
import UserEditFormContainer from '../user/user_edit_form_container';
import SearchContainer from '../search/search_container';
import CategoryContainer from '../categories/category_container';
import GameHome from '../games/game_home';
import JobAppHome from '../jobs/job_app_container';
// import JobAppForm from '../jobs/job_app_form';
// import JobAppEdit from '../jobs/job_app_edit';
import MonkeyHome from '../monkeys/monkey_home';
import ProjectHome from '../projects/project_home';
import TriviumHome from '../trivia/trivium_home';
import UserHome from '../user/user_home';


class LoggedHome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='loggedhome'>
        <header className='loggedhome-header'>
          <Navigation logout={this.props.logout} currentUser={this.props.currentUser}/>
        </header>

        <div className='nav-space' />
        <Switch>
          <Route exact path="/categories" render={(props) => <CategoryContainer {...props} /> } />
          <Route exact path="/admin/games" render={(props) => <GameHome {...props} /> } />
          <Route exact path="/jobs" render={(props) => <JobAppHome {...props} /> } />
          {/* <Route exact path="/jobs/add_new" render={(props) => <JobAppForm {...props} /> } />
          <Route exact path="/jobs/edit" render={(props) => <JobAppEdit {...props} /> } /> */}
          <Route exact path="/monkeys" render={(props) => <MonkeyHome {...props} /> } />
          <Route exact path="/admin/projects" render={(props) => <ProjectHome {...props} /> } />
          <Route exact path="/admin/trivia" render={(props) => <TriviumHome {...props} /> } />
          <Route exact path="/users" render={(props) => <UserHome {...props} /> } />
          <Route path="/search" render={(props) => <SearchContainer {...props} /> } />
          <Route path="/:username/edit" render={(props) => <UserEditFormContainer {...props} /> } />
          <Route path="/:username" render={(props) => <UserPageContainer {...props} /> } />
        </Switch>
      </div>
    );
  }
}

export default LoggedHome;
