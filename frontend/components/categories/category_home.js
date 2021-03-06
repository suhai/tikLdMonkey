import React from 'react';
import { values, merge } from 'lodash';
import SideBarContainer from '../sidebar/sidebar_container';
import Modal from 'react-modal';
import Category from './category';

class CategoryHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      input: '' 
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.update = this.update.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.editCategory = this.editCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  componentDidMount() {
    this.props.fetchCategories() 
  }

  update(prop) {
    return e => this.setState({ [prop]: e.currentTarget.value });
  }

  addCategory() {
    let data = { 
      category: {
        name: this.state.input
      }
    };

    if (data.category.name.trim().length > 0) {
      this.props.createCategory(data);
    }

    this.setState({ input: '', isOpen: false });
  }

  
  openModal(e) {
    e.preventDefault();
    this.setState({
      isOpen: true
    })
  }

  closeModal() {
    this.setState({
      isOpen: false
    })
  }

  editCategory(id) {
    this.props.editCategory(id);
  }

  deleteCategory(id) {
    this.props.deleteCategory(id);
  }

  handleKey(e) {
    if (e.keyCode === 13) {
      this.addCategory();
    }
  }

  render() {
    let categories = values(this.props.categories).map( (category, idx) => (
      <Category key={idx} createCategory={this.props.createCategory}
            category={category}
            editCategory={this.editCategory} 
            deleteCategory={this.deleteCategory} /> 
    ));

    return (
      <main className='loggedhome-body'>
        <Modal overlayClassName="category-modal-overlay"
          className='category-modal'
          onRequestClose={this.closeModal}
          isOpen={this.state.isOpen}
          contentLabel="Modal">
            {
              <div className='modal-cat'>
                <h2>Add Category</h2>
                <input className='job-input' value={this.state.input} onChange={this.update('input')} onKeyUp={this.handleKey} type='name' placeholder='Enter category'></input>
                <button onClick={this.closeModal} className='jobedit-cancel'>Cancel</button>
                <button onClick={this.addCategory} className='jobedit-save'>Save</button>
              </div>
            }
        </Modal>
        <div className='main-index'>
          <nav className='content-nav'>
            <ul>
              <div className='upload-buttons'>
                <h2>Category Zone <button  onClick={this.openModal} className='addnew'>Add New</button></h2>   
              </div>
            </ul>
          </nav>

          <section className='user-page-bottom'>
            <div>
              <ul className='user-page-nav'>
                <div className="jobapp-header">
                  <span className="lefty">Category</span> <span className="righty">Actions</span>  
                </div>
                {categories}
              </ul>
            </div>
          </section>

        </div>
        <SideBarContainer />
      </main>
    );
  }
}

export default CategoryHome;
