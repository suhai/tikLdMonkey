export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const CATEGORY_ERROR = 'CATEGORY_ERROR';
import * as API from '../util/category_api_util';




export const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
})

export const createCategory = data => dispatch => (
  API.createCategory(data) 
  .then(category => dispatch(receiveCategory(category)))
)
//-----------------------------------------------------------------




export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
})

export const fetchCategories = () => dispatch => (
  API.fetchCategories() 
  .then(categories => {
    return dispatch(receiveCategories(categories))
   })
)
//-----------------------------------------------------------------






export const removeCategory = category => ({
  type: REMOVE_CATEGORY,
  category
});

export const deleteCategory = id => dispatch => (
  API.deleteCategory(id)
    .then(category => dispatch(removeCategory(category)))
);
//-----------------------------------------------------------------




export const editCategory = category => dispatch => (
  API.updateCategory(category)
    .then(editedCategory => dispatch(receiveCategory(editedCategory)))
);
//-----------------------------------------------------------------