import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
		const { 
			id, 
			tags, 
			image, 
			image_alt,
			header,
			desc,
			live_url,
			git_url,
			video
		} = this.props.project;

    return (
				<div className={`single-portfolio-item grid col-md-4 col-sm-6 col-xs-6 ${tags}`}>
					<a href={`#${id}`} className="single-portfolio-item-inner">
							<img className="port-thumbnil" src={image} alt={image_alt} />
							<div className="portfolio-overlay text-center">
									<div className="portfolio-overlay-inner tb">
											<div className="tb-cell">
													<i className="fa fa-plus"></i>
													<h3>{header}</h3>
											</div>
									</div>
							</div>
					</a>
					<div id={id} className="portfolio-popup mfp-hide text-center">
							<h2 className="title centered-text">{header}</h2>
							<img src={image} alt="easthalo homepage" />
							<div className="protfolio-popup-info">
									<h3>description</h3>
									<p>{desc}</p>
									<p>Tools and More Info</p>
							</div>
							<a className="btn btn-default btn-live" href={live_url} >Live</a>
							<a className="btn btn-default btn-live" href={git_url} >GitHub</a>
					</div>
			</div>
    );
  }
}

export default Project;