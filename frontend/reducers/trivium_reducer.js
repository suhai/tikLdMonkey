import { RECEIVE_TRIVIA,
         RECEIVE_TRIVIUM,
         REMOVE_TRIVIUM,
         TRIVIUM_ERROR } from '../actions/trivium_actions';
import merge from 'lodash/merge';

const triviaReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_TRIVIA:
      nextState = {};
      action.trivia.forEach(trivium => nextState[trivium.id] = trivium);
      return nextState;
    case RECEIVE_TRIVIUM:
      const newTrivium = {[action.trivium.id]: action.trivium};
      return merge({}, state, newtrivium);
    case REMOVE_TRIVIUM:
      nextState = merge({}, state);
      delete nextState[action.trivium.id];
      return nextState;
    case TRIVIUM_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default triviaReducer;


