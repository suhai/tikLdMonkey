// import React from 'react';
// import { values, merge } from 'lodash';
// import JobApp from './job_app';

// class JobAppForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       role: '',
//       job_url: '',
//       company_name: '',
//       company_url: '',
//       location: '',
//       salary_range: '',
//       date_applied: '',
//       activity: ''
//     };
//     this.addJobApp = this.addJobApp.bind(this);
//     this.update = this.update.bind(this);
//     this.handleKey = this.handleKey.bind(this);
//     this.editJobApp = this.editJobApp.bind(this);
//     this.deleteJobApp = this.deleteJobApp.bind(this);
//     this.backToJobs = this.backToJobs.bind(this);
//   }

//   // componentDidMount() {
//   //   this.props.fetchJobApps() 
//   // }

//   update(prop) {
//     return e => this.setState({ [prop]: e.currentTarget.value });
//   }

//   addJobApp() {
//     let data = { 
//       job_app: {
//         role: this.state.role,
//         job_url: this.state.job_url,
//         company_name: this.state.company_name,
//         company_url: this.state.company_url,
//         location: this.state.location,
//         salary_range: this.state.salary_range,
//         date_applied: this.state.date_applied,
//         activity: this.state.activity
//       }
//     };

//     if (data.job_app.role.trim().length > 0) {
//       this.props.createJobApp(data);
//       // console.log(data);
//     }

//     this.setState({ 
//       role: '',
//       job_url: '',
//       company_name: '',
//       company_url: '',
//       location: '',
//       salary_range: '',
//       date_applied: '',
//       activity: '', 
//       isOpen: false  
//     });
//     // this.backToJobs;
//   }

  
//   backToJobs(e) {
//     e.preventDefault();
//     window.location.hash = '/jobs'
//   }

//   editJobApp(id) {
//     this.props.editJobApp(id);
//   }

//   deleteJobApp(id) {
//     this.props.deleteJobApp(id);
//   }

//   handleKey(e) {
//     if (e.keyCode === 13) {
//       this.addJobApp();
//     }
//   }

//   render() {

//     return (
//       <main className='loggedhome-body'>
//       <h2>ADD JOB APP</h2>
//       <form>
//         <input className='job-input' value={this.state.role} onChange={this.update('role')} type='name' placeholder='Enter JobApp'></input>
//         <input className='job-input' value={this.state.job_url} onChange={this.update('job_url')} type='name' placeholder='Enter Company Name'></input>
//         <input className='job-input' value={this.state.company_name} onChange={this.update('company_name')} type='name' placeholder='Enter URL'></input>
//         <input className='job-input' value={this.state.company_url} onChange={this.update('company_url')} type='name' placeholder='Enter Company URL'></input>
//         <input className='job-input' value={this.state.location} onChange={this.update('location')} type='name' placeholder='Enter Location'></input>
//         <input className='job-input' value={this.state.salary_range} onChange={this.update('salary_range')} type='decimal' placeholder='Enter Salary Range'></input>
//         <input className='job-input' value={this.state.date_applied} onChange={this.update('date_applied')} type='date' placeholder='Enter Date Applied'></input>
//         <textarea className='job-input' value={this.state.activity} onChange={this.update('activity')} type='text' placeholder='Enter Activity'></textarea>
//         <button onClick={this.backToJobs} className='catedit-cancel'>Cancel</button>
//         <button onClick={this.addJobApp} onKeyUp={this.handleKey} className='cat-save'>Add JobApp</button>  
//         </form>
//       </main>
//     );
//   }
// }

// export default JobAppForm;
