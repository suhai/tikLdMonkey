import React from 'react';
import ReactDOM from 'react-dom';

class Category extends React.Component {
  constructor(props) {
    super(props);
    // this.deleteCategory = this.deleteCategory.bind(this);
    
    this.state = {

    }
  }

  deleteCategory(id) {
    // this.props.deleteCategory(id);
  }

  render() {
    return (
      <li className='user-page-options list'>
        <a href="#">{this.props.category.name}</a>
        <aside>
          <button onClick={this.props.editCategory}className='user-page-edit'>Edit</button>
          <button onClick={this.props.deleteCategory} className='user-page-delete'>Delete</button>
        </aside>
      </li>
    );
  }
}

export default Category;