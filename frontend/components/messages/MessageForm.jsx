import React from 'react';
import { values, merge } from 'lodash';
import Footer from '../footer/Footer';

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
				<div className="form-style">
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
				<Footer />
			</div>
		)
	};
};

export default MessageForm;