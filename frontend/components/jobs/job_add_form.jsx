// import React from 'react';

// class JobForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       role: '',
//       company_name: '',
//       company_url: '',
//       location: '',
//       salary_range: '',
//       date_applied: '',
//       activity: ''
//     };

//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   update(property) {
//     return e => this.setState({ [property]: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     const Job = Object.assign({}, this.state);
//     this.props.createJob({ job }).then(
//       () => this.setState({ 
//         role: '',
//         company_name: '',
//         company_url: '',
//         location: '',
//         salary_range: '',
//         date_applied: '',
//         activity: ''
//       })
//     );
//   }

//   render() {

//     return (
//       <form className="add-form" onSubmit={ this.handleSubmit }>
//         <label>Role:
//           <input
//             className="input"
//             ref="role"
//             value={ this.state.role }
//             placeholder="Add a Job"
//             onChange={ this.update('role') }
//             />
//         </label>
//         <label>Name of Company:
//           <input
//             className="input"
//             ref="company_name"
//             value={ this.state.company_name }
//             placeholder="Add Company Name"
//             onChange={ this.update('company_name') }
//             />
//         </label>
//         <label>Company Url:
//           <input
//             className="input"
//             ref="company_url"
//             value={ this.state.company_url }
//             placeholder="Add Company Url"
//             onChange={ this.update('company_url') }
//             />
//         </label>
//         <label>Location:
//           <input
//             className="input"
//             ref="location"
//             value={ this.state.location }
//             placeholder="Add a Job"
//             onChange={ this.update('location') }
//             />
//         </label>
//         <label>Salary Range:
//           <input
//             className="input"
//             ref="salary_range"
//             value={ this.state.salary_range }
//             placeholder="Add Salary Range"
//             onChange={ this.update('salary_range') }
//             />
//         </label>
//         <label>Date Applied:
//           <input
//             className="input"
//             ref="date_applied"
//             value={ this.state.date_applied }
//             placeholder="Add Date Applied"
//             onChange={ this.update('date_applied') }
//             />
//         </label>
//         <label>Activity:
//           <input
//             className="input"
//             ref="activity"
//             value={ this.state.activity }
//             placeholder="Add Activity"
//             onChange={ this.update('activity') }
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

// export default JobForm;
