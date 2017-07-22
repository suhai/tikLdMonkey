import { RECEIVE_GAMES,
         RECEIVE_GAME,
         REMOVE_GAME,
         GAME_ERROR } from '../actions/game_actions';
import merge from 'lodash/merge';

const gamesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_GAMES:
      nextState = merge({},state);
      action.games.forEach(game => nextState[game.id] = game);
      return nextState;
    case RECEIVE_GAME:
      const newGame = {[action.game.id]: action.game};
      return merge({}, state, newGame);
    case REMOVE_GAME:
      nextState = merge({}, state);
      delete nextState[action.game.id];
      return nextState;
    case GAME_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default gamesReducer;

