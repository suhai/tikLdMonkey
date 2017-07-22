import React from 'react';
import { values } from 'lodash'; 
class CategoryForm extends React.Component {
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
          <li key={idx}>{category.name}</li>
        ));
    return(
      <div className="app">
        <li>
          <input value={this.state.input} onChange={this.update('input')} type='name' placeholder='Enter category'></input>
        </li>
        <li>
          <button className='user-page-delete' onClick={this.addCategory}>Save Category</button>
        </li>
        <ul>
          {categories}
        </ul>
      </div>
    );
  }
}

export default CategoryForm;