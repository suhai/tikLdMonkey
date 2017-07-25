// import React from 'react';

// class TriviaForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       excerpt: '',
//       body: '',
//       image_url: '',
//       video_url: '',
//       category_id: ''
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   update(property) {
//     return e => this.setState({ [property]: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const trivium = Object.assign({}, this.state);
//     this.props.createTrivium({ trivium }).then(
//       () => this.setState({ 
//         title: '',
//         excerpt: '',
//         body: '',
//         image_url: '',
//         video_url: '',
//         category_id: ''
//       })
//     );
//   }

//   render() {

//     return (
//       <form className="add-form" onSubmit={ this.handleSubmit }>
//         <label>Title:
//           <input
//             className="input"
//             ref="title"
//             value={ this.state.title }
//             placeholder="Add Title"
//             onChange={ this.update('title') }
//             />
//         </label>
//         <label>Excerpt:
//           <input
//             className="input"
//             ref="excerpt"
//             value={ this.state.excerpt }
//             placeholder="Add Excerpt"
//             onChange={ this.update('excerpt') }
//             />
//         </label>
//         <label>Body:
//           <input
//             className="input"
//             ref="body"
//             value={ this.state.body }
//             placeholder="Add Body"
//             onChange={ this.update('body') }
//             />
//         </label>
//         <label>Image Url:
//           <input
//             className="input"
//             ref="image_url"
//             value={ this.state.image_url }
//             placeholder="Add Image Url"
//             onChange={ this.update('image_url') }
//             />
//         </label>
//         <label>Video:
//           <input
//             className="input"
//             ref="video"
//             value={ this.state.video }
//             placeholder="Add Video Url"
//             onChange={ this.update('video_url') }
//             />
//         </label>
//         <label>Category:
//           <input
//             className="input"
//             ref="category_id"
//             value={ this.state.category_id }
//             placeholder="Add Category"
//             onChange={ this.update('category_id') }
//             />
//         </label>
//         <div className='upload-buttons'>
//           <button  className='signup'>Cancel</button>
//           <button  className='signup'>Save</button>
//         </div>
//       </form>
//     );
//   }
// };

// export default TriviaForm;
