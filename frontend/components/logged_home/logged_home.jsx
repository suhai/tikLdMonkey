import React from 'react';
import { values } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import Navigation from './navigation';
import UserPageContainer from '../user/user_page_container';
import CategoryContainer from '../categories/category_container';
import MessageShowContainer from '../messages/message_show_container';
import MessagePageContainer from '../messages/message_page_container';
import JobAppHome from '../jobs/job_app_container';

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
					<Route path="/:username/messages/:id" render={(props) => <MessageShowContainer {...props} /> } />
					<Route path="/:username/messages" render={(props) => <MessagePageContainer {...props} /> } />
          <Route exact path="/categories" render={(props) => <CategoryContainer {...props} /> } />
          <Route exact path="/jobs" render={(props) => <JobAppHome {...props} /> } />
          <Route path="/:username" render={(props) => <UserPageContainer {...props} /> } />
        </Switch>
      </div>
    );
  }
}

export default LoggedHome;
