import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from 'react-modal';
import Login from './login';
import Signup from './signup';
import { values } from 'lodash';
import Navigationa from '../navigationa';

const easthalo = 'https://res.cloudinary.com/swy/image/upload/v1506539090/homepage_s5uxoq.png';
const cheekchubby = 'https://res.cloudinary.com/swy/image/upload/v1501895999/cheek5_x393hf.png';
const tikldmonkey = 'https://res.cloudinary.com/swy/image/upload/v1506539659/tikldmonkey_mc2lgi.png';
const murmuralley = 'https://res.cloudinary.com/swy/image/upload/v1501895992/murmur1_i6zdm2.png';
const racewars = 'https://res.cloudinary.com/swy/image/upload/v1499749889/images/black-and-white-code-programming-tech-79290.jpg';
const playground = 'https://res.cloudinary.com/swy/image/upload/v1499750288/images/mavis-6-1580.jpg';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, authRoute: '' };
    this.openSignUp = this.openSignUp.bind(this);
    this.openSignIn = this.openSignIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.swy_info = this.swy_info.bind(this);
		this.monkey_page = this.monkey_page.bind(this);
		this.renderMessageForm = this.renderMessageForm.bind(this);
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
    window.location.hash = '/monkeys'
	}
	
	renderMessageForm(e) {
    e.preventDefault();
    window.location.hash = '/enquiries'
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
      <div className='homepage default-margin'>
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
               {/* <li>
                <button onClick={this.openSignUp} className='signup'>Guest Pass</button>
              </li>  */}
              <li>
                <button onClick={this.openSignIn} className='login'>Private Acess</button>
              </li> 
            </ul>
          </header>
          <div className='homepage-description'>
            <h2 className="billabong">tikLdMonkey</h2>
            <div className='here'>
              <h3>A CONTENT MANAGEMENT SYSTEM APPLICATION</h3>
              <p>This is a perosnal site that I use to manage my work. It serves primarily as an experimental area for projects the projects that I work on. You should find below brief descriptions and links to my most recent projects. If you have any questions or comments please feel free to send me a mesage <a onClick={this.renderMessageForm}><strong className='resume-link'> HERE </strong></a>. I try to respond within 24 hours.</p>
            </div>
            
          </div>
        </main>
        
        <div className="main-contant">  
				<section id="portfolio" className="portfolio-section space-150">
						<div className="container">
								<div className="row">
										<div className="col-md-8 col-full-width" id='portfolio'>
												<div className="section-header text-center">
													<h2 className="section-title wow fadeInDown">
															<span>Stuff</span> I've Built  
													</h2>
													<div className="divider wow fadeInDown"><span></span></div>
													<p className="wow fadeInDown">Over the past several months I have worked on projects from simple ruby implementation of minesweeper to fullstack projects such as <a href='https://easthalo.herokuapp.com/'><strong className='resume-link'> EastHalo </strong></a>. Below you will find some of those projects with very brief descriptions. There is a link to the source code of each on GitHub, and a live link to some of them.</p>
												</div>
										</div>
								</div>
								
								<div className="row">
										<div className="col-md-12 portfolio-nav-main">
												<ul className="portfolio-categories-nav">
														<li><a href="#" data-hover="All" data-filter="*" className="filter">All<span>6</span></a></li>
														<li><a href="#" data-hover="HTML" data-filter=".html" className="filter">HTML<span>4</span></a></li>
														<li><a href="#" data-hover="CSS" data-filter=".css" className="filter">CSS<span>4</span></a></li>
														<li><a href="#" data-hover="Ruby" data-filter=".ruby" className="filter">Ruby<span>4</span></a></li>
														<li><a href="#" data-hover="JavaScript" data-filter=".javascript" className="filter">JavaScript<span>4</span></a></li>
														<li><a href="#" data-hover="jQuery" data-filter=".jquery" className="filter">jQuery<span>2</span></a></li>
														<li><a href="#" data-hover="SQL" data-filter=".sql" className="filter">SQL<span>3</span></a></li>
														<li><a href="#" data-hover="React" data-filter=".react" className="filter">React<span>2</span></a></li>
														<li><a href="#" data-hover="Rails" data-filter=".rails" className="filter">Rails<span>4</span></a></li>
														<li><a href="#" data-hover="Redux" data-filter=".redux" className="filter">Redux<span>2</span></a></li>		
												</ul>
										</div>
								</div>
								
								<div id="port-masonry" className="row portfolio-item-content">
										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 react redux ruby rails javascript sql">
												<a href="#easthalo" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src={easthalo} alt="easthalo homepage" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>EastHalo Univeristy</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="easthalo" className="portfolio-popup mfp-hide text-center">
														<h2 className="title centered-text">EastHalo University</h2>
														<img src={easthalo} alt="easthalo homepage" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Description of EastHalo</p>
																<p>Tools and More Info</p>
														</div>
														<a className="btn btn-default btn-live" href="https://easthalo.herokuapp.com/#/">Live</a>
														<a className="btn btn-default btn-live" href="https://github.com/suhai/EastHalo">GitHub</a>
												</div>
										</div>

										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 react redux ruby rails javascript sql">
												<a href="#tikldmonkey" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src={tikldmonkey} alt="tikldmonkey homepage" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>tikLdMonkey</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="tikldmonkey" className="portfolio-popup mfp-hide text-center">
														<h2 className="title centered-text">The tikLdMonkey</h2>
														<img src={tikldmonkey} alt="tikldmonkey homepage" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Description of The tikLdMonkey</p>
																<p>Tools and More Info</p>
														</div>
														<a className="btn btn-default btn-live" href="https://www.tikldmonkey.com/#/">Live</a>
														<a className="btn btn-default btn-live" href="https://github.com/suhai/tikLdMonkey">GitHub</a>
												</div>
										</div>

										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 html css ruby rails sql">
												<a href="#cheekchubby" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src={cheekchubby}alt="cheekchubby homepage" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>cheekChubby</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="cheekchubby" className="portfolio-popup mfp-hide text-center">
														<h2 className="title centered-text">cheekChubby</h2>
														<img src={cheekchubby} alt="cheekchubby homepage" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Description of cheekChubby</p>
																<p>Tools and More Info</p>
														</div>
														<a className="btn btn-default btn-live" href="http://cheekchubby.herokuapp.com/">Live</a>
														<a className="btn btn-default btn-live" href="https://github.com/suhai/cheekchubby">GitHub</a>
												</div>
										</div>

										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 ruby rails html css">
												<a href="#murmuralley" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src={murmuralley} alt="murmuralley homepage" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>MurmurAlley</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="murmuralley" className="portfolio-popup mfp-hide text-center">
														<h2 className="title centered-text">MurmurAlley</h2>
														<img src={murmuralley} alt="murmuralley homepage" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Description of MurmurAlley</p>
																<p>Tools and More Info</p>
														</div>
														<a className="btn btn-default btn-live" href="https://murmuralley.herokuapp.com/">Live</a>
														<a className="btn btn-default btn-live" href="https://github.com/suhai/murmurAlley">GitHub</a>
												</div>
										</div>

										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 jquery html css">
												<a href="#playground" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src={playground} alt="img" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>Play Ground</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="playground" className="portfolio-popup mfp-hide text-center">
														<h2 className="title centered-text">Play Ground</h2>
														<img src={playground} alt="img" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Description of Play Ground</p>
																<p>Tools and More Info</p>
														</div>
														<a className="btn btn-default btn-live" href="">GitHub</a>
												</div>
										</div>

										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 jquery html css">
												<a href="#racingwars" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src={racewars} alt="img" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>Race Wars</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="racingwars" className="portfolio-popup mfp-hide text-center">
														<h2 className="title centered-text">Racing Wars</h2>
														<img src={racewars} alt="img" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Description of Race Wars</p>
																<p>Tools and More Info</p>
														</div>
														<a className="btn btn-default btn-live" href="">GitHub</a>
												</div>
										</div>	
										
								</div>
								<div className="row">
									<div className="col-md-12 text-left" onClick={this.renderMessageForm}>
										<a className="btn btn-loadmore wow fadeInDown message-link" href="#"><i className="fa fa-refresh"></i>leave me a message</a>
									</div>
									<div className="col-md-12 text-right">
										<a className="btn btn-loadmore wow fadeInUp download-link" href="https://drive.google.com/open?id=0B3YmJk3--C3rTVE2UGlTNmR5UjQ"><i className="fa fa-refresh" target='_blank'></i>download resume</a>
									</div>
								</div>
						</div>
				</section>
			</div>
		</div>
	);
}
}

export default HomePage;