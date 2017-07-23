// import React from 'react';
// import ReactDOM from 'react-dom';

// export default class CategoryForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: '', password: '' };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.update = this.update.bind(this);
//     this.handleKey = this.handleKey.bind(this);
//   }

//   handleChange(e) {
//     this.setState({text: e.target.value});
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     var newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState((prevState) => ({
//       items: prevState.items.concat(newItem),
//       text: ''
//     }));
//   }

//   handleKey(e) {
//     if (e.key === 'Enter') {
//       this.props.login(this.state);
//     }
//   }

//   render() {
//     let errors = this.props.errors.join('');
//     return (
//       <div>
//         <li>
//           <h3>ADD / EDIT</h3>
//         </li>
//         <form>
//           <p className='auth-errors'>{errors}</p>
//           <input onKeyPress={this.handleKey} onChange={this.update('username')} placeholder='Username'></input>
//           <input onKeyPress={this.handleKey} onChange={this.update('password')} type='password' placeholder='Password'></input>
//           <button onClick={this.handleSubmit}>Enter</button>
//         </form>
//       </div>
//     );
//   }
// }

