import React from 'react';
import ReactDOM from 'react-dom';
import Navigationa from '../navigationa';

class Monkeys extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videos: [
          "https://player.vimeo.com/video/226678225",
          "https://player.vimeo.com/video/226678747",
          "https://player.vimeo.com/video/226679054",
          "https://player.vimeo.com/video/226679359",
          "https://player.vimeo.com/video/226679697",
          "https://player.vimeo.com/video/226679970",
          "https://player.vimeo.com/video/226680279",
          "https://player.vimeo.com/video/226680632",
          "https://player.vimeo.com/video/226680897"
        ]
    }
  }

  render () {
    let videos = this.state.videos.map( (url, idx) => (
      <div className='iframe2' key={idx}>
        <iframe src={url} width="640" height="360" frameBorder="0" allowFullScreen>
        </iframe>
        <p className='caption'>Credit: Ice and Sky Educational Videos</p>
      </div>
    ));

    return (
      <div className="app">
        <header className='loggedhome-header'>
          <Navigationa />
        </header>
        <div className='main-monkey'>
          <h2 className='tempora'>This is the Monkeys Component</h2>
          <h1 className='tempora'>Content Coming Soon</h1> 
          <p className='pre-video'>Below are some videos serving as placeholders until the content opf this page is available.</p> 
          <hr width="70%"/>
        </div>

          {videos}

      </div>
    )  
  }
}

export default Monkeys;