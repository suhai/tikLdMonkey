import React from 'react';
import { values, merge } from 'lodash';
import SideBarContainer from '../sidebar/sidebar_container';
import Modal from 'react-modal';
import JobApp from './job_app';

class JobAppHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      role: '',
      job_url: '',
      company_name: '',
      company_url: '',
      location: '',
      salary_range: '',
      date_applied: '',
      activity: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addJobApp = this.addJobApp.bind(this);
    this.update = this.update.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.editJobApp = this.editJobApp.bind(this);
    this.deleteJobApp = this.deleteJobApp.bind(this);
  }

  componentDidMount() {
    this.props.fetchJobApps() 
  }

  update(prop) {
    return e => this.setState({ [prop]: e.currentTarget.value });
  }

  addJobApp() {
    let data = { 
      job_app: {
        role: this.state.role,
        job_url: this.state.job_url,
        company_name: this.state.company_name,
        company_url: this.state.company_url,
        location: this.state.location,
        salary_range: this.state.salary_range,
        date_applied: this.state.date_applied,
        activity: this.state.activity
      }
    };

    if (data.job_app.role.trim().length > 0) {
      this.props.createJobApp(data);
    }

    this.setState({ 
      role: '',
      job_url: '',
      company_name: '',
      company_url: '',
      location: '',
      salary_range: '',
      date_applied: '',
      activity: '', 
      isOpen: false  
    });
  }

  
  openModal(e) {
    e.preventDefault();
    this.setState({
      isOpen: true
    })
  }

  closeModal() {
    this.setState({
      isOpen: false
    })
  }

  editJobApp(id) {
    this.props.editJobApp(id);
  }

  deleteJobApp(id) {
    this.props.deleteJobApp(id);
  }

  handleKey(e) {
    if (e.keyCode === 13) {
      this.addJobApp();
    }
  }

  render() {
    let job_apps = values(this.props.job_apps).map( (job_app, idx) => (
      <JobApp key={idx} createJobApp={this.props.createJobApp}
            job_app={job_app}
            editJobApp={this.editJobApp} 
            deleteJobApp={this.deleteJobApp} /> 
    ));

    return (
      <main className='loggedhome-body'>
        <Modal overlayClassName="category-modal-overlay"
          className='job-modal'
          onRequestClose={this.closeModal}
          isOpen={this.state.isOpen}
          contentLabel="Modal">
            {
              <div className='modal-job'>
                <h2>Add Job Application</h2>
                <input className='job-input' value={this.state.role} onChange={this.update('role')} type='name' placeholder='Enter JobApp'></input>
                <input className='job-input' value={this.state.job_url} onChange={this.update('job_url')} type='name' placeholder='Enter Company Name'></input>
                <input className='job-input' value={this.state.company_name} onChange={this.update('company_name')} type='name' placeholder='Enter URL'></input>
                <input className='job-input' value={this.state.company_url} onChange={this.update('company_url')} type='name' placeholder='Enter Company URL'></input>
                <input className='job-input' value={this.state.location} onChange={this.update('location')} type='name' placeholder='Enter Location'></input>
                <input className='job-input' value={this.state.salary_range} onChange={this.update('salary_range')} type='decimal' placeholder='Enter Salary Range'></input>
                <input className='job-input' value={this.state.date_applied} onChange={this.update('date_applied')} type='date' placeholder='Enter Date Applied'></input>
                <textarea className='job-input' value={this.state.activity} onChange={this.update('activity')} onKeyUp={this.handleKey} type='text' placeholder='Enter Activity'></textarea>
                <button onClick={this.closeModal} className='jobedit-cancel'>Cancel</button>
                <button onClick={this.addJobApp} className='jobedit-save'>Add</button>
              </div>
            }
        </Modal>
        <div className='main-index'>
          <nav className='content-nav'>
            <ul>
              <div className='upload-buttons'>
                <h2>JobApp Zone <button onClick={this.openModal} className='addnew'>Add New</button></h2>   
              </div>
            </ul>
          </nav>

          <section className='user-page-bottom'>
            {/* <h3 className='cat-demo'>This is a demo Page</h3> */}
            <div>
              <ul className='user-page-nav'>
                <div className="jobapp-header">
                  <span className="lefty">Role</span> <span className="centy"> Date Applied</span> <span className="righty">Actions</span>  
                </div>
                
                {job_apps}
              </ul>
            </div>
          </section>

        </div>
        <SideBarContainer />
      </main>
    );
  }
}

export default JobAppHome;
