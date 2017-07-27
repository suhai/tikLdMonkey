import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from 'react-modal';
import Login from './login';
import Signup from './signup';
import { values } from 'lodash';
import Navigationa from '../navigationa';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, authRoute: '' };
    this.openSignUp = this.openSignUp.bind(this);
    this.openSignIn = this.openSignIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.swy_info = this.swy_info.bind(this);
    this.monkey_page = this.monkey_page.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openSignIn(e) {
    e.preventDefault();
    this.setState({ isOpen: true, authRoute: 'signin' });
  }

  openSignUp(e) {
    e.preventDefault();
    this.setState({ isOpen: true, authRoute: 'signup' });
  }

  swy_info(e) {
    e.preventDefault();
    window.location.hash = '/swy_info'
  }

  closeModal(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({ isOpen: false, authRoute: '' });
  }

  monkey_page(e) {
    e.preventDefault();
    window.location.hash = 'monkeys'
  }

  render() {
    let authRoute;
    if (this.state.authRoute === 'signin') {
      authRoute = <Login errors={this.props.errors} login={this.props.login}/>;
    } else {
      authRoute = <Signup errors={this.props.errors}
        signup={this.props.signup}
        login = {this.props.login}/>;
    }

    return (
      <div className='homepage'>
        <header className='loggedhome-header'>
          <Navigationa />
        </header>
        <Modal overlayClassName="homepage-modal-overlay"
          className='homepage-modal'
          onRequestClose={this.closeModal}
          isOpen={this.state.isOpen}
          contentLabel="Modal">
            {authRoute}
        </Modal>
        <main className='homepage-info'>
          <div className='homepage-overlay'>
          </div>
          <header>
            <div className='homepage-logo'></div>
            <ul>
              <li>
                <button onClick={this.swy_info} className='swyinfo'>About Me</button>
              </li>
               <li>
                <button onClick={this.openSignUp} className='signup'>Guest Pass</button>
              </li> 
              <li>
                <button onClick={this.openSignIn} className='login'>Admin LogIn</button>
              </li> 
            </ul>
          </header>
          <div className='homepage-description'>
            <h2 className="billabong">Welcome to tikLdMonkey</h2>
            <h3 className="tikld">Once Upon A Time</h3>
            <p className='p1'>
              <strong>B</strong>eyond the pristine valleys of the kingdom of Taabanirba, lived an old monkey who had been barnished to the forbidden forest. For two hundred and thrity five years no sane monkey had dared to set foot on his abode for fear of the wrath of the gods. But on one thunderous full moon dawn of the Taabanirban lunar calendar, a vague terror was descending upon this monkey kindom. The king summoned for the first group of sacrificial monkeys. The fear and desolation in the eyes of their families illuminated by the lightening that preceded and trailed the loud clapping thunder ....
            </p>
            <p> ... please check back later for the full story of the tikLdMonkey. In the mean time I found a series of videos at <a href="http://iceandsky.com/"><strong className='iceandsky'>Ice And Sky</strong></a> that I really liked. A sample is shown below. You can watch more within this site <a href="#" onClick={this.monkey_page}><strong className='here'>HERE</strong></a></p>
          </div>
        </main>

        <midhome className='homepage-mid'>
          <div className='iframe1'>
            <iframe  src="https://player.vimeo.com/video/226678225" width="640" height="360" frameBorder="0" allowFullScreen>
            </iframe>
            <p className='caption'>Credit: Ice and Sky Educational Videos</p>
          </div>
        </midhome>
        
        <section className="homepage-bottom">
          <div>
            <span>
              <p className="lorem">
                Note: Any non-English text on this site is gibberish, taken from Lorem Ipsum, and serving only as a temporary placeholder
              </p>
              <p className="lorem2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida laoreet nunc, sit amet faucibus lacus auctor eu. Donec sollicitudin felis orci. Curabitur porta ligula fringilla erat posuere congue. Ut rhoncus et eros nec feugiat. Vivamus ipsum arcu, ullamcorper non mattis ac, bibendum non nisi. Donec mollis et massa vitae facilisis. Donec dapibus metus ut lectus lacinia egestas. Morbi sed purus at ligula bibendum feugiat.</p>
              <br/>
              <p className="lorem2">Suspendisse mollis eu mauris eu lacinia. Fusce volutpat massa id urna congue pellentesque. Sed vehicula, nunc vitae malesuada tincidunt, sem urna dignissim dolor, sed luctus urna risus nec metus. Morbi semper a tellus in gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas augue odio, commodo a nisi et, convallis fringilla urna. Phasellus lobortis tortor et efficitur suscipit. Vestibulum efficitur molestie enim et pulvinar. Suspendisse in pretium sem, hendrerit porttitor libero. Duis pharetra neque vitae urna porta, vel aliquam lorem bibendum. Vivamus sodales suscipit ante, ac gravida diam semper ut. Fusce lacus ante, malesuada nec quam id, fermentum elementum tellus. Nulla in tellus condimentum, facilisis nisi a, congue eros. Vestibulum semper erat ut orci finibus consequat.</p>
              <br/>
              <p className="lorem2">Suspendisse semper lacinia risus non maximus. Duis ac convallis lacus. Cras in ultrices est, ut vehicula eros. In ut dolor dictum sapien mollis rutrum ac sit amet leo. Vestibulum eu congue elit, quis ullamcorper sapien. Donec gravida, massa id condimentum pretium, augue nunc egestas metus, nec bibendum lorem nibh nec diam. Donec vel semper sem, et tempus nisi. Quisque consectetur ullamcorper ipsum at dictum. Pellentesque tristique ultricies magna, vitae ornare quam faucibus hendrerit.</p>
              <br/>
            </span>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
