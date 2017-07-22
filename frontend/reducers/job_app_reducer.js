import { RECEIVE_JOB_APPS,
         RECEIVE_JOB_APP,
         REMOVE_JOB_APP,
         JOB_APP_ERROR } from '../actions/job_app_actions';
import merge from 'lodash/merge';

const job_appReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_JOB_APPS:
      nextState = {};
      action.job_apps.forEach(job_app => nextState[job_app.id] = job_app);
      return nextState;
    case RECEIVE_JOB_APP:
      const newJobApp = {[action.job_app.id]: action.job_app};
      return merge({}, state, newjob_app);
    case REMOVE_JOB_APP:
      nextState = merge({}, state);
      delete nextState[action.job_app.id];
      return nextState;
    case JOB_APP_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default job_appReducer;

