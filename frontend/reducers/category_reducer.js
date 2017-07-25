import { RECEIVE_CATEGORY,
         RECEIVE_CATEGORIES,
         REMOVE_CATEGORY,
         CATEGORY_ERROR } from '../actions/category_actions';
import { merge } from 'lodash'

const CategoryReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_CATEGORY:
      newState[action.category.id] = action.category
      return newState
    case RECEIVE_CATEGORIES:
      return action.categories
    case REMOVE_CATEGORY:
      delete newState[action.category.id];
      return newState;
      
    default:
      return state
  }
};

export default CategoryReducer;


