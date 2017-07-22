import React from 'react';
import ReactDOM from 'react-dom';
import Navigationa from '../navigationa';

const PlaceHolder = () => (
  <div className="app">
    <header className='loggedhome-header'>
      <Navigationa />
    </header>
    <h2 className='tempora'>This is the PlaceHolder Component</h2>
    <h1 className='tempora'>Actual Content Coming Soon</h1>
  </div>
);

export default PlaceHolder;