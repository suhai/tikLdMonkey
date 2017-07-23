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
        <video id="background-video" loop autoPlay>
            <source src={this.state.videoURL} type="video/mp4" />
            <source src={this.state.videoURL} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
      </div>
    )  
  }
}

export default Monkeys;