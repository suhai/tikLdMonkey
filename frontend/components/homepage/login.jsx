import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.target.value });
  }

  handleKey(e) {
    if (e.key === 'Enter') {
      this.props.login(this.state);
    }
  }

  render() {
    let errors = this.props.errors.join('');
    return (
      <ul className='homepage-auth'>
				<li>
          <p className=''>ADMIN LOGIN</p>
        </li>
        <li>
          <p className='auth-errors'>{errors}</p>
          <input onKeyPress={this.handleKey} onChange={this.update('username')} placeholder='Admin Name'></input>
        </li>
        <li>
          <input onKeyPress={this.handleKey} onChange={this.update('password')} type='password' placeholder='Password'></input>
        </li>
        <li>
          <button onClick={this.handleSubmit}>Enter</button>
        </li>
      </ul>
    );
  }
}

export default Login;
