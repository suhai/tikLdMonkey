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
    // let categories = values(this.props.category).map( (category, idx) => (
    //       <li key={idx}>{category.name}</li>
    //     ));
    let categories = values(this.props.category).map( (category, idx) => (
          <li key={idx}>{category.name}  <button className='addcat'>Edit</button> <button className='deletecat'>Delete</button></li>
        ));
    return(
      <div>
        <li>
          <input value={this.state.input} onChange={this.update('input')} type='name' placeholder='Enter category'></input>
        </li>
        <li>
          <button onClick={this.addCategory}>Save Category</button>
        </li>
        <ul>
          {categories}
        </ul>
      </div>
    );
  }
}

export default CategoryForm;