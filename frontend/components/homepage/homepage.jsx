import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from 'react-modal';
import Login from './login';
import Signup from './signup';
import { values } from 'lodash';
import Navigationa from '../navigationa';
import Project from './Project';
import { myProjects } from '../stat_data/projects';


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
		};
		
		const projects = myProjects.map((project, idx) => (
			<Project key={idx} project={project} />
		));

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
									{projects}	
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