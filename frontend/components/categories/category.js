import React from 'react';
import ReactDOM from 'react-dom';

class Category extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {

    }
  }


  render() {
    return (
      <li className='user-page-options list'>
        <a href="#">{this.props.category.name}</a>
        <aside>
          <button className='user-page-edit'>Edit</button>
          <button className='user-page-delete'>Delete</button>
        </aside>
      </li>
    );
  }
}

export default Category;