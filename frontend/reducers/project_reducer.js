// import { RECEIVE_PROJECTS,
//          RECEIVE_PROJECT,
//          REMOVE_PROJECT,
//          PROJECT_ERROR } from '../actions/project_actions';
// import merge from 'lodash/merge';

// const projectsReducer = (state = {}, action) => {
//   Object.freeze(state);
//   let nextState;

//   switch(action.type){
//     case RECEIVE_PROJECTS:
//       nextState = {};
//       action.projects.forEach(project => nextState[project.id] = project);
//       return nextState;
//     case RECEIVE_PROJECT:
//       const newProject = {[action.project.id]: action.project};
//       return merge({}, state, newproject);
//     case REMOVE_PROJECT:
//       nextState = merge({}, state);
//       delete nextState[action.project.id];
//       return nextState;
//     case PROJECT_ERROR:
//       alert(action.error);
//     default:
//       return state;
//   }
// };

// export default projectsReducer;

