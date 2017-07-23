// import * as ProjectAPIUtil from '../util/project_api_util';
// import { receiveErrors, clearErrors } from './error_actions';

// export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
// export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
// export const REMOVE_PROJECT = "REMOVE_PROJECT";
// export const PROJECT_ERROR = "PROJECT_ERROR";


// export const receiveProjects = projects => ({
//   type: RECEIVE_PROJECTS,
//   projects
// });

// export const receiveProject = project => ({
//   type: RECEIVE_PROJECT,
//   project
// });

// export const removeProject = project => ({
//   type: REMOVE_PROJECT,
//   project
// });

// export const projectError = error => ({
//   type: PROJECT_ERROR,
//   error
// })



// // async actions
// export const fetchProjects = () => dispatch => (
//   ProjectAPIUtil.fetchProjects().then(projects => dispatch(receiveProjects(projects)))
// );

// export const fetchProject = id => dispatch => (
//   ProjectAPIUtil.fetchProject(id).then(project => dispatch(receiveProject(project)))
// );

// export const createProject = project => dispatch => (
//   ProjectAPIUtil.createProject(project)
//   .then(project => { dispatch(receiveproject(project)); dispatch(clearErrors())},
//   err => dispatch(receiveErrors(err.responseJSON)))
// );

// export const updateProject = project => dispatch => (
//   ProjectAPIUtil.updateProject(project).then(project => dispatch(receiveProject(project)))
// );

// export const deleteProject = project => dispatch => (
//   ProjectAPIUtil.destroyProject(project).then(project => dispatch(removeProject(project)))
// );
