// import React from 'react';

// class GameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       image: '',
//       description: ''
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   update(property) {
//     return e => this.setState({ [property]: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const game = Object.assign({}, this.state);
//     this.props.createGame({ game }).then(
//       () => this.setState({ 
//         name: '',
//         image: '',
//         description: ''
//       })
//     );
//   }

//   render() {

//     return (
//       <form className="add-form" onSubmit={ this.handleSubmit }>
//         <label>Name:
//           <input
//             className="input"
//             ref="name"
//             value={ this.state.name }
//             placeholder="Add Name"
//             onChange={ this.update('name') }
//             />
//         </label>
//         <label>Image:
//           <input
//             className="input"
//             ref="image_url"
//             value={ this.state.name }
//             placeholder="Add Image Url"
//             onChange={ this.update('image_url') }
//             />
//         </label>
//         <label>Descriptiopn:
//           <input
//             className="input"
//             ref="title"
//             value={ this.state.description }
//             placeholder="Add Description"
//             onChange={ this.update('description') }
//             />
//         </label>
//         <div className='upload-buttons'>
//           <button className='signup'>Cancel</button>
//           <button onClick={this.handleSubmit} className='signup' >Save</button>
//         </div>
//       </form>
//     );
//   }
// };

// export default GameForm;
