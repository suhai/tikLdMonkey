import React from 'react';
import ReactDOM from 'react-dom';
import Navigationa from '../navigationa';

const TechNews = () => (
  <div className="app">
    <header className='loggedhome-header'>
      <Navigationa />
    </header>
    <h2 className='tempora'>This is the Tech News Component</h2>
    <h3 className='tempora'>Sign Up or LogIn for Exclusive access to Content</h3>
    <h1 className='tempora'>Content Coming Soon</h1>
  </div>
);

export default TechNews;