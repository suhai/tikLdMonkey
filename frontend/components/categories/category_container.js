import { connect } from 'react-redux';
import { createCategory, fetchCategories, deleteCategory, editCategory } from '../../actions/category_actions';
import CategoryHome from './category_home';

const mapStateToProps = (state) => ({
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  createCategory: data => dispatch(createCategory(data)),
  fetchCategories: () => dispatch(fetchCategories()),
  deleteCategory: id => dispatch(deleteCategory(id)),
  editCategory: id => dispatch(editCategory(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryHome);