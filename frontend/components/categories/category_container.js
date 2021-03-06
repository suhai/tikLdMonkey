import { connect } from 'react-redux';
import { createCategory, fetchCategories, deleteCategory, editCategory, fetchCategory } from '../../actions/category_actions';
import CategoryHome from './category_home';

const mapStateToProps = (state) => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  createCategory: data => dispatch(createCategory(data)),
  fetchCategories: () => dispatch(fetchCategories()),
  deleteCategory: id => dispatch(deleteCategory(id)),
  editCategory: id => dispatch(editCategory(id)),
  fetchCategory: (id) => dispatch(fetchCategory(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryHome);