import React from 'react';
import { values } from 'lodash'; 
export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.addCategory = this.addCategory.bind(this);
    this.update = this.update.bind(this);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.currentTarget.value })
  }

  addCategory() {
    let data ={
      category: {
        name: this.state.input
      }
    };
    this.setState({ input: '' });
    this.props.createCategory(data);
  }

  componentDidMount() {
    this.props.fetchCategories() 
  }


  render() {
    let categories = values(this.props.category).map( (category, idx) => (
      <ul className='user-page-nav' key={idx}>
        <li className='user-page-options' key={idx}><a href="#">{category.name}</a>
          <button className='user-page-edit'>Edit</button>
          <button className='user-page-delete'>Delete</button>
        </li>
      </ul>
    ));

    return(
      <div>
        <ul>
          {categories}
        </ul>
        
        <form onSubmit={this.addCategory}>
          <input value={this.state.input} onChange={this.update('input')} type='name' placeholder='Enter category'></input>
          <button>Save</button>
        </form>
      </div>
    );
  }
}
