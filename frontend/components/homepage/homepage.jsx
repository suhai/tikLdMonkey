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
              <h3>FULL CONTENT COMING SOON</h3>
              <p>This is a Content Management Application. Please feel free to sign in as a guest and mess around with the 'Categories' and 'JobApp' or 'User' sections. Additional features are being added weekly. You may also check out my other projects by visiting the Portfolio section above.</p>
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
															<span>Stuff</span> I've Built in The Past                           
													</h2>
													<div className="divider wow fadeInDown"><span></span></div>
													<p className="wow fadeInDown">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque iste velit sequi odio, fugit fuga, veritatis quas, temporibus quam, non dolorem neque nisi magnam vitae.</p>
												</div>
										</div>
								</div>
								
								<div className="row">
										<div className="col-md-12 portfolio-nav-main">
												<ul className="portfolio-categories-nav">
														<li><a href="#" data-hover="All" data-filter="*" className="filter">All<span>9</span></a></li>
														<li><a href="#" data-hover="HTML" data-filter=".html" className="filter">HTML<span>3</span></a></li>
														<li><a href="#" data-hover="WordPress" data-filter=".wordpress" className="filter">CSS<span>3</span></a></li>
														<li><a href="#" data-hover="joomla" data-filter=".joomla" className="filter">React<span>1</span></a></li>
														<li><a href="#" data-hover="Photoshop" data-filter=".Photoshop" className="filter">Redux<span>4</span></a></li>
														<li><a href="#" data-hover="Photoshop" data-filter=".Photoshop" className="filter">Ruby<span>4</span></a></li>
														<li><a href="#" data-hover="Photoshop" data-filter=".Photoshop" className="filter">Rails<span>4</span></a></li>
														<li><a href="#" data-hover="Photoshop" data-filter=".Photoshop" className="filter">SQL<span>4</span></a></li>
														<li><a href="#" data-hover="Photoshop" data-filter=".Photoshop" className="filter">JavaScript<span>4</span></a></li>
														<li><a href="#" data-hover="Photoshop" data-filter=".Photoshop" className="filter">jQuery<span>4</span></a></li>
												</ul>
										</div>
								</div>
								
								<div id="port-masonry" className="row portfolio-item-content">
										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 joomla">
												<a href="#portfolio-9" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" alt="img" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>item name</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="portfolio-9" className="portfolio-popup mfp-hide text-center">
														<h2 className="title">item name</h2>
														<img src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" alt="img" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam temporibus veritatis laboriosam. Voluptatibus et aspernatur officia placeat! Maiores ducimus quisquam consequuntur facere, numquam ratione fuga neque maxime ea alias exercitationem similique, blanditiis unde repellendus facilis tempora, quaerat tenetur tempore eveniet amet fugiat ipsa. Quia delectus magnam deserunt, ex doloremque sunt.</p>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis molestias dolore suscipit voluptatibus facilis officiis numquam vitae dolores quis nostrum praesentium quos, velit, in quasi. Sint numquam quae, amet veritatis.</p>
														</div>
														<a className="btn btn-default btn-live" href="#">live preview</a>
												</div>
										</div>
										
										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 html">
												<a href="#portfolio-2" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg"alt="img" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>item name</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="portfolio-2" className="portfolio-popup mfp-hide text-center">
														<h2 className="title">item name</h2>
														<img src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" alt="img" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ratione quidem tempora maiores inventore pariatur sapiente quasi, nulla deserunt voluptate a facilis architecto, temporibus excepturi necessitatibus modi unde placeat magni obcaecati labore quas nesciunt enim vel possimus. Beatae facere blanditiis molestiae quae provident cupiditate, vitae delectus cum fuga debitis eum.</p>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga voluptate cum quibusdam autem deleniti dolores saepe ducimus unde quis dolorum facilis voluptatum, praesentium sed in placeat cumque accusamus, impedit. Sit!</p>
														</div>
														<a className="btn btn-default btn-live" href="#">live preview</a>
												</div>
										</div>

										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 html wordpress">
												<a href="#portfolio-3" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" alt="img" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>item name</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="portfolio-3" className="portfolio-popup mfp-hide text-center">
														<h2 className="title">item name</h2>
														<img src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" alt="img" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, placeat vitae repellat quo natus sequi, id libero illo numquam debitis qui non. Officiis dicta, in deleniti quo amet qui.</p>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur tenetur quod molestiae cupiditate distinctio. Ex necessitatibus earum, porro, asperiores doloribus facilis possimus vitae, temporibus, sapiente ipsa error accusantium debitis. Dolores.</p>
														</div>
														<a className="btn btn-default btn-live" href="#">live preview</a>
												</div>
										</div>

										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 wordpress joomla html">
												<a href="#portfolio-6" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" alt="img" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>item name</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="portfolio-6" className="portfolio-popup mfp-hide text-center">
														<h2 className="title">item name</h2>
														<img src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg"alt="img" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor tempore quod ullam consectetur, non ducimus eveniet. Aspernatur dolores quas ipsam excepturi provident reprehenderit, enim, iusto ad ea incidunt, vel sit recusandae delectus dolore eligendi suscipit velit accusamus. Voluptas quos deserunt odit, nisi ipsa, quia veritatis quod adipisci quis, unde sapiente!</p>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum nesciunt voluptatum consequuntur, enim facilis iure hic iusto nulla minima expedita. Blanditiis officiis consequuntur, magnam repudiandae inventore laudantium nihil, quidem voluptatem.</p>
														</div>
														<a className="btn btn-default btn-live" href="#">live preview</a>
												</div>
										</div>
																				
										
										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 html">
												<a href="#portfolio-5" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" alt="img" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>item name</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="portfolio-5" className="portfolio-popup mfp-hide text-center">
														<h2 className="title">item name</h2>
														<img src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea doloremque quis nam ipsa, necessitatibus quo illo. Dolorum nam, iste voluptate tempore facere qui recusandae cupiditate eligendi, repellendus rem! Consequatur architecto quasi dolore, facilis error. In distinctio dolorem amet odio vel! Earum, quidem numquam assumenda repudiandae similique, quo sint modi quis.</p>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus velit ratione, assumenda atque beatae dolore. At maiores id sunt, odit quidem, rerum repudiandae distinctio ipsa deserunt nostrum, quos laboriosam fugit.</p>
														</div>
														<a className="btn btn-default btn-live" href="#">live preview</a>
												</div>
										</div>


										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 joomla">
												<a href="#portfolio-7" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" alt="img" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>item name</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="portfolio-7" className="portfolio-popup mfp-hide text-center">
														<h2 className="title">item name</h2>
														<img src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt laudantium necessitatibus architecto fuga magni tenetur neque hic totam quibusdam. Iure obcaecati quidem fugit doloremque laboriosam reprehenderit maxime consequuntur corporis, hic voluptate tempore nulla sed. Nesciunt a sunt, voluptatum eveniet, quam laudantium veritatis. Hic dolorem quam similique enim delectus aut quaerat.</p>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque architecto iusto aut debitis blanditiis, laborum excepturi eaque repellendus doloribus deleniti commodi minima recusandae illum voluptate necessitatibus magnam, saepe incidunt aliquid.</p>
														</div>
														<a className="btn btn-default btn-live" href="#">live preview</a>
												</div>
										</div>

										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 Photoshop joomla">
												<a href="#portfolio-4" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" alt="img" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>item name</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="portfolio-4" className="portfolio-popup mfp-hide text-center">
														<h2 className="title">item name</h2>
														<img src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium itaque architecto ipsam pariatur nam quo nobis asperiores qui alias sunt, at ab officiis placeat voluptatum dolor vero. Sint et blanditiis quibusdam temporibus saepe accusamus eum quidem, numquam minus veritatis neque fuga officia atque libero natus quia expedita! Iure, eligendi in!</p>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, accusantium aspernatur alias. Totam eveniet fugit ducimus sit temporibus, voluptas odio veniam quibusdam perspiciatis, itaque distinctio placeat laboriosam adipisci quaerat voluptatem.</p>
														</div>
														<a className="btn btn-default btn-live" href="#">live preview</a>
												</div>
										</div>
										
										<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 Photoshop">
												<a href="#portfolio-8" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" alt="img" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>item name</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="portfolio-8" className="portfolio-popup mfp-hide text-center">
														<h2 className="title">item name</h2>
														<img src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" />
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae, iusto iste perferendis culpa tenetur sequi, adipisci ipsa quas modi accusamus, provident. Ducimus unde vero voluptas dolorem id aspernatur quia cum officiis nobis, ab illum iusto eligendi architecto sit modi doloremque optio voluptates perspiciatis quasi, voluptatem porro molestias sapiente labore.</p>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quas sunt sed officia in, quos ea quaerat ab aliquid, blanditiis incidunt consequuntur dolores et, nihil, ad fugit dicta rerum porro.</p>
														</div>
														<a className="btn btn-default btn-live" href="#">live preview</a>
												</div>
										</div>
										
									<div className="single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 wordpress">
												<a href="#portfolio-1" className="single-portfolio-item-inner">
														<img className="port-thumbnil" src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg" alt="img" />
														<div className="portfolio-overlay text-center">
																<div className="portfolio-overlay-inner tb">
																		<div className="tb-cell">
																				<i className="fa fa-plus"></i>
																				<h3>item name</h3>
																		</div>
																</div>
														</div>
												</a>
												<div id="portfolio-1" className="portfolio-popup mfp-hide text-center">
														<h2 className="title">item name</h2>
														<img src="https://res.cloudinary.com/swy/image/upload/v1503358376/tikldhomepage_ixjjm0.jpg"/>
														<div className="protfolio-popup-info">
																<h3>description</h3>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quod repellendus, sequi vero ex nostrum quia error, illum iusto dicta dignissimos quis reprehenderit similique sint sapiente eius voluptates quidem veniam odit dolorum impedit quae! Eligendi temporibus architecto rerum sunt deleniti itaque impedit nobis labore commodi facere? Vitae assumenda, repellendus quasi.</p>
																<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sint explicabo saepe aspernatur enim ut cum maiores blanditiis libero. Eaque ea eius tempora quis obcaecati sed, commodi veritatis eum incidunt!</p>
														</div>
														<a className="btn btn-default btn-live" href="#">live preview</a>
												</div>
										</div>
								</div>
								<div className="row">
									<div className="col-md-12 text-left" onClick={this.renderMessageForm}>
										<a className="btn btn-loadmore wow fadeInDown message-link" href="#"><i className="fa fa-refresh"></i>leave me a message</a>
									</div>
									<div className="col-md-12 text-right">
										<a className="btn btn-loadmore wow fadeInUp download-link" href="https://drive.google.com/open?id=0B3YmJk3--C3rTVE2UGlTNmR5UjQ"><i className="fa fa-refresh"></i>download resume</a>
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