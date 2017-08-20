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
          </div>
        </main>
        
        <section className="homepage-bottom">
          <div>

          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
