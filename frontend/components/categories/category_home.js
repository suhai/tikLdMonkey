import React from 'react';
import { values, merge } from 'lodash';
import SideBarContainer from '../sidebar/sidebar_container';
import Categories from './categories';
import Modal from 'react-modal';

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
  }

  update(prop) {
    return e => this.setState({ [prop]: e.currentTarget.value });
  }

  addCategory() {
    let data ={
      category: {
        name: this.state.input
      }
    };
    this.setState({ input: '', isOpen: false });
    this.props.createCategory(data);
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

  handleKey(e) {
    if (e.keyCode === 13) {
      this.addCategory();
    }
  }

  render() {

    return (
      <main className='loggedhome-body'>
        <Modal overlayClassName="homepage-modal-overlay"
          className='homepage-modal'
          onRequestClose={this.closeModal}
          isOpen={this.state.isOpen}
          contentLabel="Modal">
            {
              <div className='modal-test'>
                <input className='cat-input' value={this.state.input} onChange={this.update('input')} onKeyUp={this.handleKey} type='name' placeholder='Enter category'></input>
                <button onClick={this.addCategory} className='cat-save'>Save Category</button>
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
            <Categories fetchCategories={this.props.fetchCategories} createCategory={this.props.createCategory}
            category={this.props.category}/> 
          </section>

        </div>
        <SideBarContainer />
      </main>
    );
  }
}

export default CategoryHome;
