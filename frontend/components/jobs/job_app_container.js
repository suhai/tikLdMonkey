import { connect } from 'react-redux';
import { createJobApp, fetchJobApps, deleteJobApp, editJobApp, fetchJobApp } from '../../actions/job_app_actions';
import JobAppHome from './job_app_home';

const mapStateToProps = (state) => ({
  job_apps: state.job_apps
});

const mapDispatchToProps = dispatch => ({
  createJobApp: data => dispatch(createJobApp(data)),
  fetchJobApps: () => dispatch(fetchJobApps()),
  deleteJobApp: id => dispatch(deleteJobApp(id)),
  editJobApp: id => dispatch(editJobApp(id)),
  fetchJobApp: (id) => dispatch(fetchJobApp(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobAppHome);