import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomePageContainer from './homepage/homepage_container';
import LoggedHomeContainer from './logged_home/logged_home_container';
import CategoryContainer from './categories/category_container';
import MessageFormContainer from './messages/message_form_container';
import Games from './games/Games';
import Trivia from './trivia/Trivia';
import Projects from './projects/Projects';
import TechNews from './tech_news/TechNews';
import Monkeys from './monkeys/Monkeys';
import SwyInfo from './about/swy_info';
import Footer from './footer/Footer';


const Root = () =>(
  <div>
    <Switch>
      <AuthRoute exact path="/" component={HomePageContainer} />
      <Route path="/swy_info" component={SwyInfo} />
      <Route path="/games" component={Games} />
      <Route path="/trivia" component={Trivia} />
      <Route path="/projects" component={Projects} />
      <Route path="/tech_news" component={TechNews} />
      <Route path="/monkeys" component={Monkeys} />
			<Route path="/enquiries" component={MessageFormContainer} />
      <ProtectedRoute exact path="/categories" component={LoggedHomeContainer} />
      <ProtectedRoute exact path="/gamez" component={LoggedHomeContainer} /> 
      <ProtectedRoute exact path="/categoriez" component={CategoryContainer} /> 
      <ProtectedRoute exact path="/job_apps" component={LoggedHomeContainer} />
      <ProtectedRoute exact path="/projectz" component={LoggedHomeContainer} />
      <ProtectedRoute exact path="/triviaz" component={LoggedHomeContainer} />
      <ProtectedRoute exact path="/users" component={LoggedHomeContainer} />
      <ProtectedRoute path="/:username" component={LoggedHomeContainer} />
    </Switch>
    <Footer />
  </div>
);

export default Root;