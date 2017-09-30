import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import PublicNavigation from '../PublicNavigation';
import TriviaContainer from './TriviaContainer';
import { Art, Culture, Geography, History } from '../stat_data/trivia';

const Trivia = ({match}) => (
  <div className="main-content trivia default-margin">
    <header className='home-header'>
      <PublicNavigation />
    </header>
    <div className="group">
      <div className="stuff-out">
        <h2 className="outside-stuff">Trivia</h2> 
      </div>
      <div className='trivia-nav'>
        <ul>
          <li><NavLink to={`${match.url}/history`}>History</NavLink></li>
          <li><NavLink to={`${match.url}/culture`}>Culture</NavLink></li>
          <li><NavLink to={`${match.url}/geography`}>Geography</NavLink></li>
          <li><NavLink to={`${match.url}/art`}>Art</NavLink></li>
        </ul>
      </div>
    </div>
    
    <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/history`} /> } />      
    <Route path={`${match.path}/culture`} render={ () => <TriviaContainer data={Culture} /> } />  
    <Route path={`${match.path}/history`} render={ () => <TriviaContainer data={History } /> } />     
    <Route path={`${match.path}/geography`} render={ () => <TriviaContainer data={Geography} /> } />
    <Route path={`${match.path}/art`}  render={ () => <TriviaContainer data={Art} /> } />
  </div>
);

export default Trivia;