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
                <button onClick={this.openSignIn} className='login'>User LogIn</button>
              </li> 
            </ul>
          </header>
          <div className='homepage-description'>
            <h2 className="billabong">tikLdMonkey</h2>
            <h3 className='here'>MORE CONTENT COMING SOON</h3>
            <p>This is a Content Management Application. Please feel free to sign in as a guest and mess around with the 'Categories' section by Adding New, Editing, or Deleting Categories. You may also check out my other projects by visiting the Projects section above, or taking a look at my resume below.</p>

            {/* <p>In the mean time I found a series of videos at <a href="#"><strong className='iceandsky'>Ice And Sky</strong></a> that I really liked. A sample is shown below. You can watch more within this site <a href="#" onClick={this.monkey_page}><strong className='here'>HERE</strong></a></p> */}
          </div>
        </main>

        {/* <midhome className='homepage-mid'>
          <div className='iframe1'>
            <iframe  src="https://player.vimeo.com/video/226678225" width="640" height="360" frameBorder="5" allowFullScreen>
            </iframe>
            <p className='caption'>Credit: Ice and Sky Educational Videos</p>
          </div>
        </midhome> */}
        
        <section className="homepage-bottom">
          <div>
            {/* <span>
              <h3 className="tikld">Once Upon A Time</h3>
            <p className='p1'>
              <strong>B</strong>eyond the pristine valleys of the kingdom of Taabanirba, lived an old monkey who had been barnished to the forbidden forest. For two hundred and thrity five years no sane monkey had dared to set foot on his abode for fear of the wrath of the gods. But on one thunderous full moon dawn of the Taabanirban lunar calendar, a vague terror was descending upon this monkey kindom. The king summoned for the first group of sacrificial monkeys. The fear and desolation in the eyes of their families illuminated by the lightening that preceded and trailed the loud clapping thunder ....
              </p>
              <br />
            <p className='p1'>
              ... please check back later for the full story of the tikLdMonkey.
            </p>
            </span> */}
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
