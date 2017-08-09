import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class JobApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      id: this.props.job_app.id,
      role: this.props.job_app.role,
      job_url: this.props.job_app.job_url,
      company_name: this.props.job_app.company_name,
      company_url: this.props.job_app.company_url,
      location: this.props.job_app.location,
      salary_range: this.props.job_app.salary_range,
      date_applied: this.props.job_app.date_applied,
      activity: this.props.job_app.activity
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.editJob = this.editJob.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.rightHere = this.rightHere.bind(this);
  }
  

  openModal(e) {
    e.preventDefault();
    this.setState({
      isOpen: true,
      id: this.props.job_app.id,
      role: this.props.job_app.role,
      job_url: this.props.job_app.job_url,
      company_name: this.props.job_app.company_name,
      company_url: this.props.job_app.company_url,
      location: this.props.job_app.location,
      salary_range: this.props.job_app.salary_range,
      date_applied: this.props.job_app.date_applied,
      activity: this.props.job_app.activity
    })
  }

  closeModal() {
    this.setState({
      isOpen: false
    })
  }

  handleKey(e) {
    if (e.keyCode === 13) {
      this.editJob(e);
    }
  }

  editJob(e) {
    let data = {
      id: this.state.id,
      role: this.state.role,
      job_url: this.state.job_url,
      company_name: this.state.company_name,
      company_url: this.state.company_url,
      location: this.state.location,
      salary_range: this.state.salary_range,
      date_applied: this.state.date_applied,
      activity: this.state.activity
    };
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
    this.props.editJobApp(data); 
  }

  deleteJob() {
    const id = this.props.job_app.id;
    this.props.deleteJobApp(id);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.currentTarget.value });
  }

  rightHere(e) {
    e.preventDefault();
    window.location.hash = '/job_apps'
  }


  render() {
    return (
      <main>
        <Modal overlayClassName="category-modal-overlay"
          className='category-modal'
          onRequestClose={this.closeModal}
          isOpen={this.state.isOpen}
          contentLabel="Modal">
            {
              <div className='modal-test'>
                <input className='cat-input' value={this.state.role} onChange={this.update('role')} onKeyUp={this.handleKey} type='name' ></input>
                <input className='cat-input' value={this.state.job_url} onChange={this.update('job_url')} onKeyUp={this.handleKey} type='name' ></input>
                <input className='cat-input' value={this.state.company_name} onChange={this.update('company_name')} onKeyUp={this.handleKey} type='name' ></input>
                <input className='cat-input' value={this.state.company_url} onChange={this.update('company_url')} onKeyUp={this.handleKey} type='name' ></input>
                <input className='cat-input' value={this.state.location} onChange={this.update('location')} onKeyUp={this.handleKey} type='name' ></input>
                <input className='cat-input' value={this.state.salary_range} onChange={this.update('salary')} onKeyUp={this.handleKey} type='name' ></input>
                <input className='cat-input' value={this.state.data_applied} onChange={this.update('date_applied')} onKeyUp={this.handleKey} type='name' ></input>
                <input className='cat-input' value={this.state.activity} onChange={this.update('activity')} onKeyUp={this.handleKey} type='name' ></input>
                <button onClick={this.editJob} className='catedit-save'> Save </button>
                <button onClick={this.closeModal}className='catedit-cancel'>Cancel</button>
              </div>
            }
        </Modal>

        <li className='user-page-options list'>
          <a onClick={this.rightHere}>{this.props.job_app.role}</a>
          <aside>
            <button onClick={this.openModal} className='user-page-edit'>Edit</button>
            <button onClick={this.deleteJob}className='user-page-delete'>Delete</button>
          </aside>
        </li>
      </main>
    );
  }
}

export default JobApp;