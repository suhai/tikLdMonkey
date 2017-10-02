import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePageContainer from './homepage/homepage_container';
import LoggedHomeContainer from './logged_home/logged_home_container';
import CategoryContainer from './categories/category_container';
import MessageFormContainer from './messages/message_form_container';
import Trivia from './trivia/Trivia';
import SwyInfo from './about/swy_info';
import EscapeZ from './about/escapez';
import Footer from './footer/Footer';

const Root = () =>(
  <div>
    <Switch>
      <Route path="/swy_info" component={SwyInfo} />
			<Route path="/escapez" component={EscapeZ} />
      <Route path="/trivia" component={Trivia} />
			<Route path="/enquiries" component={MessageFormContainer} />
      <ProtectedRoute exact path="/categories" component={LoggedHomeContainer} />
      <ProtectedRoute exact path="/job_apps" component={LoggedHomeContainer} />
      <ProtectedRoute path="/:username" component={LoggedHomeContainer} />
			<AuthRoute exact path="/" component={HomePageContainer} />
    </Switch>
    <Footer />
  </div>
);

export default Root;