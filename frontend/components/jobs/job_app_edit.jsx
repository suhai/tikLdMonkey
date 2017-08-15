// import React from 'react';
// import ReactDOM from 'react-dom';
// import { values, merge } from 'lodash';
// // import JobApp from './job_app';

// class JobAppEdit extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: this.props.id,
//       role: this.props.role,
//       job_url: this.props.job_url,
//       company_name: this.props.company_name,
//       company_url: this.props.company_url,
//       location: this.props.location,
//       salary_range: this.props.salary_range,
//       date_applied: this.props.date_applied,
//       activity: this.props.activity
//     };
//     // this.deleteJob = this.deleteJob.bind(this);
//     this.editJob = this.editJob.bind(this);
//     this.handleKey = this.handleKey.bind(this);
//     // this.rightHere = this.rightHere.bind(this);
//     this.backToJobs = this.backToJobs.bind(this);
//   }
  
 

//   // openModal(e) {
//   //   e.preventDefault();
//   //   this.setState({
//   //     isOpen: true,
//   //     id: this.props.job_app.id,
//   //     role: this.props.job_app.role,
//   //     job_url: this.props.job_app.job_url,
//   //     company_name: this.props.job_app.company_name,
//   //     company_url: this.props.job_app.company_url,
//   //     location: this.props.job_app.location,
//   //     salary_range: this.props.job_app.salary_range,
//   //     date_applied: this.props.job_app.date_applied,
//   //     activity: this.props.job_app.activity
//   //   })
//   // }

//   // closeModal() {
//   //   this.setState({
//   //     isOpen: false
//   //   })
//   // }

//   handleKey(e) {
//     if (e.keyCode === 13) {
//       this.editJob(e);
//     }
//   }

//   editJob(e) {
//     let data = {
//       id: this.state.id,
//       role: this.state.role,
//       job_url: this.state.job_url,
//       company_name: this.state.company_name,
//       company_url: this.state.company_url,
//       location: this.state.location,
//       salary_range: this.state.salary_range,
//       date_applied: this.state.date_applied,
//       activity: this.state.activity
//     };
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
//     this.props.editJobApp(data); 
//   }

//   // deleteJob() {
//   //   const id = this.props.job_app.id;
//   //   this.props.deleteJobApp(id);
//   // }

//   update(prop) {
//     return e => this.setState({ [prop]: e.currentTarget.value });
//   }

//   // rightHere(e) {
//   //   e.preventDefault();
//   //   window.location.hash = '/jobs'
//   // }

//   backToJobs(e) {
//     e.preventDefault();
//     window.location.hash = '/jobs'
//   }


//   render() {
//     // var cts = this.props.job_app.date_applied,
//     //   cdate = (new Date(cts)).toString().slice(0,16);
//     return (
//       <main>
//         <h2>EDIT JOB APP</h2>
//         <form>
//           <input className='job-input' value={this.state.role} onChange={this.update('role')} type='name' ></input>
//           <input className='job-input' value={this.state.job_url} onChange={this.update('job_url')} type='name' ></input>
//           <input className='job-input' value={this.state.company_name} onChange={this.update('company_name')} type='name' ></input>
//           <input className='job-input' value={this.state.company_url} onChange={this.update('company_url')} type='name' ></input>
//           <input className='job-input' value={this.state.location} onChange={this.update('location')} type='name' ></input>
//           <input className='job-input' value={this.state.salary_range} onChange={this.update('salary_range')} type='decimal' ></input>
//           <input className='job-input' value={this.state.date_applied} onChange={this.update('date_applied')} type='date' ></input>
//           <textarea className='job-input' value={this.state.activity} onChange={this.update('activity')} onKeyUp={this.handleKey} type='text' ></textarea>
//           <button onClick={this.backToJobs} className='catedit-cancel'>Cancel</button>
//           <button onClick={this.editJob} onKeyUp={this.handleKey} className='cat-save'>Update JobApp</button>  
//           </form>
//       </main>
//     );
//   }
// }

// export default JobAppEdit;