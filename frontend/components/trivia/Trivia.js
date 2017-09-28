import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import Navigationa from '../navigationa';
import TriviaContainer from './TriviaContainer';
import { Art, Culture, Geography, History } from '../stat_data/trivia';
// import PlaceHolder from '../placeholder/place_holder';

const Trivia = ({match}) => (
  <div className="main-content trivia default-margin">
    <header className='loggedhome-header'>
      <Navigationa />
    </header>
    <div className="trivium-header group">
      <div className="stuff-out">
        <h2 className="outside-stuff">Trivia</h2> 
      </div>
      <div className='project'>
        <ul>
          <li><NavLink to={`${match.url}/history`}>History</NavLink></li>
          <li><NavLink to={`${match.url}/culture`}>Culture</NavLink></li>
          <li><NavLink to={`${match.url}/geography`}>Geography</NavLink></li>
          <li><NavLink to={`${match.url}/art`}>Art</NavLink></li>
          {/* <li><NavLink to={`${match.url}/biology`}>Sports</NavLink></li>
          <li><NavLink to={`${match.url}/physics`}>Physics</NavLink></li>
          <li><NavLink to={`${match.url}/travel`}>Travel</NavLink></li>
          <li><NavLink to={`${match.url}/politics`}>Politics</NavLink></li> */}
        </ul>
      </div>
    </div>
    
  
    <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/history`} /> } />      
    <Route path={`${match.path}/culture`} render={ () => <TriviaContainer data={Culture} /> } />  
    <Route path={`${match.path}/history`} render={ () => <TriviaContainer data={History } /> } />     
    <Route path={`${match.path}/geography`} render={ () => <TriviaContainer data={Geography} /> } />
    <Route path={`${match.path}/art`}  render={ () => <TriviaContainer data={Art} /> } />
    {/* <Route path={`${match.path}/biology`}  render={ () => <PlaceHolder /> } />
    <Route path={`${match.path}/chemistry`}  render={ () => <PlaceHolder /> } />
    <Route path={`${match.path}/physics`}  render={ () => <PlaceHolder /> } />
    <Route path={`${match.path}/space`}  render={ () => <PlaceHolder /> } />
    <Route path={`${match.path}/oceans`}  render={ () => <PlaceHolder /> } />
    <Route path={`${match.path}/medicine`}  render={ () => <PlaceHolder /> } />
    <Route path={`${match.path}/travel`}  render={ () => <PlaceHolder /> } />
    <Route path={`${match.path}/politics`}  render={ () => <PlaceHolder /> } />  */}
  </div>
);

export default Trivia;