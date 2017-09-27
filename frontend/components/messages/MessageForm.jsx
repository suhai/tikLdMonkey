import React from 'react';
import { values, merge } from 'lodash';

class MessageForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sender: '',
			email: '',
			subject: '',
			msg: ''
		};

		this.update = this.update.bind(this);
		this.handleKey = this.handleKey.bind(this);
		this.addMessage = this.addMessage.bind(this);
		this.redirectPath = this.redirectPath.bind(this);
	};

	componentDidMount() {
		this.props.fetchMessages();
	};

	update(prop) {
		return e => this.setState({ [prop]: e.currentTarget.value });	
	};

	redirectPath() {
		window.location.hash = '/';
	};

	handleKey(e) {
		if (e.keyCode === 13) {
			this.addMessage();
		}
	};

	addMessage() {
		let data = {
			message: {
				sender: this.state.sender,
				email: this.state.email,
				subject: this.state.subject,
				msg: this.state.msg
			}
		};

		if (data.message.msg.trim().length > 0) {
			this.props.createMessage(data);
		}

		this.setState({
			sender: '',
			email: '',
			subject: '',
			msg: ''
		});

		this.redirectPath();
	};

	render() {
		const {
			sender,
			email,
			subject,
			msg
		} = this.state;
		
		return (
			<div className='homepage message-div'>
				<div className="form-style-8">
				<h2>Send Enquiries Below</h2>
					<form >	
						<input type="text" className="field-style field-split align-left" value={sender} onChange={this.update('sender')} placeholder="Your Name" />
						<input type="text" className="field-style field-split align-right" value={email} onChange={this.update('email')} placeholder="Your Email" />
						<input type="text" className="field-style" value={subject} onChange={this.update('subject')} placeholder="Subject" />
						<textarea value={msg} onChange={this.update('msg')} placeholder=" Enter Your Message"></textarea>
						<div className='wide-seapration'>
							<div className='lefty'>
								<input type="submit" onClick={this.addMessage} value='Submit Message'/>
							</div>
							<div className='righty'>
								<input type="button" onClick={this.redirectPath} value='Cancel'/>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	};
};

export default MessageForm;






// import React from 'react';
// import ReactDOM from 'react-dom';
// import Navigationa from '../navigationa';

// const SwyInfo = () => (
//   <div className="app">
//     <header className='loggedhome-header'>
//       <Navigationa />
//     </header>
//       <img className="swy-img" src='http://res.cloudinary.com/swy/image/upload/a_hflip/v1500934478/swy_rsd2cc.jpg'/>
//     <h3 className='temporal'>About Me</h3>
//     <div>
//       <p className='about-me'>     
//         My name is Swy, and I am a self-taught Fullstack Web Developer. Over halfway through college I came to the realization that I had a lopsided interest in one specific area (physical chemistry) of my major relative to other areas. This interest was driven, in part, by the analytical nature of the course that required careful mathematical analysis and computational modeling (of molecules). I loved using Mathematica and being able to write my own code to suit my needs, especially during my year-long senior thesis project on analyzing liquid matrices. Not satisfied with just Mathematica, I began learning Ruby, then JavaScript, and then I just couldn’t stop there.  I have since built a strong background in multiple languages and frameworks through a combination of immersive software bootcamp and disciplined self-teaching.  
//       </p>
//       <hr className='about-hr'/>
//       <p className='about-me'>
//         I worked as a data security intern at Free Geek, Portland for the summer of 2016. I consider myself to be a self-disciplined, highly motivated, eager and quick learner. I have spent over 2000 hours coding, including a regular average of 70hrs of coding/week from Jan 2017 - July 2017. I have gained a strong knowledge in Data Structures, Algorithms, Space and Time complexities, and OOP design patterns. When writing code I personally gravitate toward finding a balance between clean, concise code and being detail oriented enough for others to understand my code in my absence. I focus mainly on Rails for my backend and React-Redux for my frontend with PostgreSQL as my preferred database. However, I am open to learning and picking up other languages and frameworks as I expand my technical expertise. 
//       </p>
//       <hr className='about-hr'/>
//       <p className='about-me'>
//         Personally I’m still very much a kid at heart, but very organized and diligent at work. I'm also an enthusiastic team player who is social media shy but very warm and lively in person. I played 4 years of college soccer. I must confess here and now that I love playing soccer - a lot - and I love eating watermelons.
//       </p>
//       <hr className='about-hr'/>
//     </div>
    
//   </div>
// );

// export default SwyInfo;