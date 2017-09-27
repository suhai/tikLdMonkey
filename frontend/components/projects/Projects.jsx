import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import Navigationa from '../navigationa';
import ProjectsContainer from './ProjectsContainer';
import { CheekChubby, MurmurAlley, TikldMonkey } from '../stat_data/projects';

const Projects = ({match}) => (
  <div className="main-content trivia default-margin">
    <header className='loggedhome-header'>
      <Navigationa />
    </header>
    <div className="trivium-header group">
      <div className="stuff-out">
        <h2 className="outside-stuff">Projects</h2> 
      </div>
      <div className='project'>
        <ul>
          <li><NavLink to={`${match.url}/cheekchubby`}>cheekChubby</NavLink></li>
          <li><NavLink to={`${match.url}/murmuralley`}>MurmurAlley</NavLink></li>
          <li><NavLink to={`${match.url}/tikldmonkey`}>tikLdMonkey</NavLink></li>   
        </ul>
      </div>
    </div>
    
  
    <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/cheekchubby`} /> } />      
    <Route path={`${match.path}/cheekchubby`} render={ () => <ProjectsContainer data={CheekChubby} /> } />  
    <Route path={`${match.path}/murmuralley`} render={ () => <ProjectsContainer data={MurmurAlley } /> } />     
    <Route path={`${match.path}/tikldmonkey`}  render={ () => <ProjectsContainer data={TikldMonkey} /> } />
  </div>
);

export default Projects;