import { connect } from 'react-redux';
import { createCategory, fetchCategories } from '../../actions/category_actions';
import CategoryHome from './category_home';

const mapStateToProps = (state) => ({
  category: state.category
});

const mapDispatchToProps = dispatch => ({
  createCategory: data => dispatch(createCategory(data)),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryHome);