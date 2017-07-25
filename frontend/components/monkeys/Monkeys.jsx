import React from 'react';
import ReactDOM from 'react-dom';
import Navigationa from '../navigationa';

class Monkeys extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
    }
  }

  render () {
    return (
      <div className="app">
        <header className='loggedhome-header'>
          <Navigationa />
        </header>
        <h2 className='tempora'>This is the Monkeys Component</h2>
        <h3 className='tempora'>Sign Up or LogIn for Exclusive access to Content</h3>
        <h1 className='tempora'>Content Coming Soon</h1> 
        <iframe className='iframe' src="https://player.vimeo.com/video/226678747" width="640" height="360" frameBorder="0" webkitallowFullScreen mozallowFullScreen allowFullScreen>
        </iframe>
      </div>
    )  
  }
}

export default Monkeys;