import React from 'react';
import { values, merge } from 'lodash';

class MessageShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: {}

		};
		this.deleteMessage = this.deleteMessage.bind(this);
		this.replyMessage = this.replyMessage.bind(this);
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchMessage(id);
		this.props.fetchMessages();
	};

	deleteMessage() {
		let id = this.props.match.params.id;
		this.props.deleteMessage(id)
		window.location.hash = `/${this.props.currentUser.username}/messages`;
	};

	replyMessage() {
		// extract sender email and reply to the message via email
	};

	componentWillReceiveProps(props) {
		Object.keys(props.messages).length > 0 ?
			this.setState({
				message: props.messages[props.match.params.id]
			}) :
			this.setState({
				message: {},
			});
	}

	render() {
		const {
			sender,
			email,
			subject,
			msg
		} = this.state.message;

		return (
			<main className='user-page'>
				<div className='grouped-buttons'>
					<button className='btn delete' onClick={this.deleteMessage}>Delete Message</button>
					<button className='btn edit' onClick={this.replyMessage}>Reply to {sender}</button>
				</div>

				<div>
					<h4>{sender} <span className='msg-in-header'>from {email}</span></h4> 
					Said: <span>{subject}</span>
					<p>{msg}</p>
				</div>	
			</main>
		);
	}
}

export default MessageShow;