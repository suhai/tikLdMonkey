// import React from 'react';

// class ProjectForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       title: '',
//       git_url: '',
//       web_url: '',
//       tool_box: '',
//       description: '',
//       image_url: '',
//       tags: ''
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   update(property) {
//     return e => this.setState({ [property]: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const game = Object.assign({}, this.state);
//     this.props.createProject({ project }).then(
//       () => this.setState({ 
//         title: '',
//         git_url: '',
//         web_url: '',
//         tool_box: '',
//         description: '',
//         image_url: '',
//         tags: ''
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
//         <label>Git Url:
//           <input
//             className="input"
//             ref="git_url"
//             value={ this.state.git_url }
//             placeholder="Add Git Url"
//             onChange={ this.update('git_url') }
//             />
//         </label>
//         <label>Web Url:
//           <input
//             className="input"
//             ref="web_url"
//             value={ this.state.web_url }
//             placeholder="Add Web Url"
//             onChange={ this.update('web_url') }
//             />
//         </label>
//         <label>Tool Box:
//           <input
//             className="input"
//             ref="tool_box"
//             value={ this.state.tool_box }
//             placeholder="Add Tools"
//             onChange={ this.update('tool_box') }
//             />
//         </label>
//         <label>Descriptiopn:
//           <input
//             className="input"
//             ref="description"
//             value={ this.state.description }
//             placeholder="Add Description"
//             onChange={ this.update('description') }
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
//         <label>Tags:
//           <input
//             className="input"
//             ref="tags"
//             value={ this.state.tags }
//             placeholder="Add Tags"
//             onChange={ this.update('tags') }
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

// export default ProjectForm;
