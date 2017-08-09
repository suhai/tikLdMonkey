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
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: ''
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
        role: this.state.input1,
        job_url: this.state.input2,
        company_name: this.state.input3,
        company_url: this.state.input4,
        location: this.state.input5,
        salary_range: this.state.input6,
        date_applied: this.state.input7,
        activity: this.state.input8
      }
    };

    if (data.job_app.role.trim().length > 0) {
      this.props.createJobApp(data);
    }

    this.setState({ 
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '', 
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
          className='category-modal'
          onRequestClose={this.closeModal}
          isOpen={this.state.isOpen}
          contentLabel="Modal">
            {
              <div className='modal-test'>
                <input className='job-input' value={this.state.input1} onChange={this.update('input1')} type='name' placeholder='Enter JobApp'></input>
                <input className='job-input' value={this.state.input2} onChange={this.update('input2')} type='name' placeholder='Enter Company Name'></input>
                <input className='job-input' value={this.state.input3} onChange={this.update('input3')} type='name' placeholder='Enter URL'></input>
                <input className='job-input' value={this.state.input4} onChange={this.update('input4')} type='name' placeholder='Enter Company URL'></input>
                <input className='job-input' value={this.state.input5} onChange={this.update('input5')} type='name' placeholder='Enter Location'></input>
                <input className='job-input' value={this.state.input6} onChange={this.update('input6')} type='name' placeholder='Enter Salary Range'></input>
                <input className='job-input' value={this.state.input7} onChange={this.update('input7')} type='name' placeholder='Enter Date Applied'></input>
                <input className='job-input' value={this.state.input8} onChange={this.update('input8')} onKeyUp={this.handleKey} type='name' placeholder='Enter Activity'></input>
                <button onClick={this.addJobApp} className='cat-save'>Save JobApp</button>
              </div>
            }
        </Modal>
        <div className='main-index'>
          <nav className='content-nav'>
            <ul>
              <div className='upload-buttons'>
                <h2>JobApp Zone <button className='addnew'>Add New</button></h2>   
              </div>
            </ul>
          </nav>

          <section className='user-page-bottom'>
            <h3 className='cat-demo'>This is a demo Page</h3>
            <p>
              It is still under construction and should be available soon. Please check back later.
            </p>
            <div>
              <ul className='user-page-nav'>
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
