import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const category = Object.assign({}, this.state);
    this.props.createCategory({ category }).then(
      () => this.setState({ 
        name: ''
      })
    );
  }

  render() {

    return (
      <form className="add-form" onSubmit={ this.handleSubmit }>
        <label>Name:
          <input
            className="input"
            ref="name"
            value={ this.state.name }
            placeholder="Add a Category"
            onChange={ this.update('name') }
            />
        </label>
        <div className='upload-buttons'>
          <button className='signup'>Cancel</button>
          <button className='signup'>Save</button>
        </div>
      </form>
    );
  }
};

export default CategoryForm;
