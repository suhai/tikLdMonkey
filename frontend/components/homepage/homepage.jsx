import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Modal from 'react-modal';
import Login from './login';
import { values } from 'lodash';
import PublicNavigation from '../PublicNavigation';
import Project from './Project';
import { myProjects } from '../stat_data/projects';
import Footer from '../footer/Footer';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, authRoute: '' };
    this.openSignIn = this.openSignIn.bind(this);
    this.closeModal = this.closeModal.bind(this);
		this.swy_info = this.swy_info.bind(this);
		this.escapez = this.escapez.bind(this);
		this.renderMessageForm = this.renderMessageForm.bind(this);
  }

  componentWillMount() {
		Modal.setAppElement('body');
  }

  openSignIn(e) {
    e.preventDefault();
    this.setState({ isOpen: true, authRoute: 'signin' });
  }

  swy_info(e) {
    e.preventDefault();
    window.location.hash = '/swy_info'
	}
	
	escapez(e) {
    e.preventDefault();
    window.location.hash = '/escapez'
  }

  closeModal(e) {
    e.preventDefault();
    this.props.clearErrors();
    this.setState({ isOpen: false, authRoute: '' });
  }
	
	renderMessageForm(e) {
    e.preventDefault();
    window.location.hash = '/enquiries'
  }

  render() {
    let authRoute;
    if (this.state.authRoute === 'signin') {
      authRoute = <Login errors={this.props.errors} login={this.props.login}/>;
    };
		
		const projects = myProjects.map((project, idx) => (
			<Project key={idx} project={project} />
		));

    return (
      <div className='homepage'>
        <header className='home-header'>
          <PublicNavigation />
        </header>
        <Modal overlayClassName="homepage-modal-overlay"
          className='homepage-modal'
          onRequestClose={this.closeModal}
          isOpen={this.state.isOpen}
          contentLabel="Modal">
            {authRoute}
        </Modal>
        <main className='homepage-info'>
					<div className='twin-buttons'>
						<div className='lefty'>
							<button onClick={this.swy_info} >About Me</button>
						</div>
						<div className='righty'>
							<button onClick={this.openSignIn} >Private Acess</button>
						</div>
					</div>
          <div className='homepage-description'>
            <h2 className="billabong">tikLdMonkey</h2>
            <div className='main-desc'>
              <h3>A CONTENT MANAGEMENT SYSTEM APPLICATION</h3>
              <p>This is a perosnal site that I use to manage my work. It serves primarily as an experimental area for projects that I am working on. You should find below brief descriptions and links to my most recent projects. If you have any questions or comments please feel free to send me a mesage <a onClick={this.renderMessageForm}><strong className='highlighter'> HERE </strong></a>. I try to respond within 24 hours.</p>
								<button className='zombie-button' onClick={this.escapez} >Play My Zombie Game Here</button>
            </div> 
          </div>
        </main>
        
        <div className="main-content">  
				<section id="portfolio" className="portfolio-section space-150">
						<div className="container">
								<div className="row">
										<div className="col-md-12 col-full-width" id='portfolio'>
												<div className="section-header text-center">
													<h2 className="section-title wow fadeInDown">
															My Portfolio Projects
													</h2>
													<div className="divider wow fadeInDown"><span></span></div>
													<p className="wow fadeInDown portfolio-para">Over the past several months I have worked on projects from simple ruby implementation of minesweeper to fullstack projects such as <a href='https://easthalo.herokuapp.com/'><strong className='highlighted-link'> EastHalo </strong></a>. Below you will find some of those projects with very brief descriptions. There is a link to the source code of each on Github, and a live link to those that are deployed.</p>
												</div>
										</div>
								</div>
								
								<div className="row">
										<div className="col-md-12 portfolio-nav-main">
												<ul className="portfolio-categories-nav">
														<li><a href="#" data-hover="All" data-filter="*" className="filter">All<span>6</span></a></li>
														<li><a href="#" data-hover="HTML" data-filter=".html" className="filter">HTML<span>4</span></a></li>
														<li><a href="#" data-hover="CSS" data-filter=".css" className="filter">CSS<span>5</span></a></li>
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
				<Footer />
			</div>
		);
	}
}

export default HomePage;