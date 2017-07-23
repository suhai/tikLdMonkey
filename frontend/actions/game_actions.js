// import * as GameAPIUtil from '../util/game_api_util';
// import { receiveErrors, clearErrors } from './error_actions';

// export const RECEIVE_GAMES = "RECEIVE_GAMES";
// export const RECEIVE_GAME = "RECEIVE_GAME";
// export const REMOVE_GAME = "REMOVE_GAME";
// export const GAME_ERROR = "GAME_ERROR";


// export const receiveGames = games => ({
//   type: RECEIVE_GAMES,
//   games
// });

// export const receiveGame = game => ({
//   type: RECEIVE_GAME,
//   game
// });

// export const removeGame = game => ({
//   type: REMOVE_GAME,
//   game
// });

// export const gameError = error => ({
//   type: GAME_ERROR,
//   error
// })



// // async actions
// export const fetchGames = () => async (dispatch) => {
//   const res = await fetch('api/games')
//   const jsn = await res.json();
//   console.log(jsn);
//   return res;
//   // GameAPIUtil.fetchGames().then(games => dispatch(receiveGames(games)));
// };

// export const fetchGame = id => dispatch => {
//   GameAPIUtil.fetchGame(id).then(game => dispatch(receiveGame(game)))
// };

// export const createGame = game => dispatch => (
//   GameAPIUtil.createGame(game)
//   .then(GAME => { dispatch(receiveGame(GAME)); dispatch(clearErrors())},
//   err => dispatch(receiveErrors(err.responseJSON)))
// );

// export const updateGame = game => dispatch => (
//   GameAPIUtil.updateGame(game).then(game => dispatch(receiveGame(game)))
// );

// export const deleteGame = game => dispatch => (
//   GameAPIUtil.destroyGame(game).then(game => dispatch(removeGame(game)))
// );
