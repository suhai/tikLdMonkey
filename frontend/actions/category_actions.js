export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const CATEGORY_ERROR = 'CATEGORY_ERROR';
import * as APIUtil from '../util/category_api_util';



export const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
})

export const createCategory = data => dispatch => (
  APIUtil.createCategory(data) 
  .then(category => dispatch(receiveCategory(category)))
)




export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
})

export const fetchCategories = () => dispatch => (
  APIUtil.fetchCategories() 
  .then(categories => {
    return dispatch(receiveCategories(categories))
   })
)