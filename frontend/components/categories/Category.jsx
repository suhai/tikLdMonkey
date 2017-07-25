import React from 'react';
import ReactDOM from 'react-dom';

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.deleteCategory = this.deleteCategory.bind(this);
    
    this.state = {

    }
  }

  deleteCategory(id) {
    this.props.deleteCategory(id);
  }

  render() {
    return (
      <li className='user-page-options list'>
        <a href="#">{this.props.category.name}</a>
        <aside>
          <button onClick={this.props.editCategory.bind(this)}className='user-page-edit'>Edit</button>
          <button onClick={this.props.deleteCategory.bind(this)} className='user-page-delete'>Delete</button>
        </aside>
      </li>
    );
  }
}
