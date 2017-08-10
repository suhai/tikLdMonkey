import { RECEIVE_JOB_APPS,
         RECEIVE_JOB_APP,
         REMOVE_JOB_APP,
         JOB_APP_ERROR } from '../actions/job_app_actions';
import merge from 'lodash/merge';

const JobAppReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_JOB_APP:
      newState[action.job_app.id] = action.job_app
      return newState
    case RECEIVE_JOB_APPS:
      return action.job_apps
    case REMOVE_JOB_APP:
      delete newState[action.job_app.id];
      return newState;
      
    default:
      return state
  }
};

export default JobAppReducer;


