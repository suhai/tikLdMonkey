import React from 'react';
import { values } from 'lodash'; 
export default class Categories extends React.Component {
  constructor(props) {
    super(props);  
  }

  componentDidMount() {
    this.props.fetchCategories() 
  }


  render() {
    let categories = values(this.props.category).map( (category, idx) => (
      <ul className='user-page-nav' key={idx}>
        <li className='user-page-options list' key={idx}>
          <a href="#">{category.name}</a>
          <aside>
            <button className='user-page-edit'>Edit</button>
            <button className='user-page-delete'>Delete</button>
          </aside>
        </li>
      </ul>
    ));

    return(
      <div>
        <ul>
          {categories}
        </ul>
      </div>
    );
  }
}
