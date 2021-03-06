import * as APIUtil from '../util/job_app_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_JOB_APPS = "RECEIVE_JOB_APPS";
export const RECEIVE_JOB_APP = "RECEIVE_JOB_APP";
export const REMOVE_JOB_APP = "REMOVE_JOB_APP";
export const JOB_APP_ERROR = "JOB_APP_ERROR";


export const receiveJobApps = job_apps => ({
  type: RECEIVE_JOB_APPS,
  job_apps
});

export const receiveJobApp = job_app => ({
  type: RECEIVE_JOB_APP,
  job_app
});

export const removeJobApp = job_app => ({
  type: REMOVE_JOB_APP,
  job_app
});

export const JobAppError = error => ({
  type: JOB_APP_ERROR,
  error
})



// async actions
export const fetchJobApps = () => dispatch => (
  APIUtil.fetchJobApps()
  .then(job_apps => dispatch(receiveJobApps(job_apps)))
);

export const fetchjob_app = id => dispatch => (
  APIUtil.fetchjob_app(id)
  .then(job_app => dispatch(receiveJobApp(job_app)))
);

export const createJobApp = data => dispatch => (
  APIUtil.createJobApp(data)
  .then(job_app => { dispatch(receiveJobApp(job_app)); dispatch(clearErrors())},
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const editJobApp = job_app => dispatch => (
  APIUtil.updateJobApp(job_app)
  .then(editedJobApp => dispatch(receiveJobApp(editedJobApp)))
);

export const deleteJobApp = id => dispatch => (
  APIUtil.deleteJobApp(id)
  .then(job_app => dispatch(removeJobApp(job_app)))
);
