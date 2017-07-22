import * as TriviumAPIUtil from '../util/trivium_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TRIVIA = "RECEIVE_TRIVIA";
export const RECEIVE_TRIVIUM = "RECEIVE_TRIVIUM";
export const REMOVE_TRIVIUM = "REMOVE_TRIVIUM";
export const TRIVIUM_ERROR = "TRIVIUM_ERROR";


export const receiveTrivia = trivia => ({
  type: RECEIVE_TRIVIA,
  trivia
});

export const receiveTrivium = trivium => ({
  type: RECEIVE_TRIVIUM,
  trivium
});

export const removeTrivium = trivium => ({
  type: REMOVE_TRIVIUM,
  trivium
});

export const triviumError = error => ({
  type: TRIVIUM_ERROR,
  error
})



// async actions
export const fetchTrivia = () => dispatch => (
  TriviumAPIUtil.fetchTrivia().then(trivia => dispatch(receiveTrivia(trivia)))
);

export const fetchTrivium = id => dispatch => (
  TriviumAPIUtil.fetchTrivium(id).then(trivium => dispatch(receiveTrivium(trivium)))
);

export const createTrivium = trivium => dispatch => (
  triviumAPIUtil.createTrivium(trivium)
  .then(trivium => { dispatch(receiveTrivium(trivium)); dispatch(clearErrors())},
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateTrivium = trivium => dispatch => (
  triviumAPIUtil.updateTrivium(trivium).then(trivium => dispatch(receiveTrivium(trivium)))
);

export const deleteTrivium = trivium => dispatch => (
  triviumAPIUtil.destroyTrivium(trivium).then(trivium => dispatch(removeTrivium(trivium)))
);
