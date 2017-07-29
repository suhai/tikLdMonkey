import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      id: this.props.category.id,
      name: this.props.category.name
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteCat = this.deleteCat.bind(this);
    this.editCat = this.editCat.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.rightHere = this.rightHere.bind(this);
  }
  

  openModal(e) {
    e.preventDefault();
    this.setState({
      isOpen: true,
      id: this.props.category.id,
      name: this.props.category.name
    })
  }

  closeModal() {
    this.setState({
      isOpen: false
    })
  }

  handleKey(e) {
    if (e.keyCode === 13) {
      this.editCat(e);
    }
  }

  editCat(e) {
    let data = {
      id: this.state.id,
      name: this.state.name
    };
    this.setState({ name: '', isOpen: false }); 
    this.props.editCategory(data); 
  }

  deleteCat() {
    const id = this.props.category.id;
    this.props.deleteCategory(id);
  }

  update(prop) {
    return e => this.setState({ [prop]: e.currentTarget.value });
  }

  rightHere(e) {
    e.preventDefault();
    window.location.hash = '/categories'
  }


  render() {
    return (
      <main>
        <Modal overlayClassName="category-modal-overlay"
          className='category-modal'
          onRequestClose={this.closeModal}
          isOpen={this.state.isOpen}
          contentLabel="Modal">
            {
              <div className='modal-test'>
                <input className='cat-input' value={this.state.name} onChange={this.update('name')} onKeyUp={this.handleKey} type='name' ></input>
                <button onClick={this.editCat} className='catedit-save'> Save </button>
                <button onClick={this.closeModal}className='catedit-cancel'>Cancel</button>
              </div>
            }
        </Modal>

        <li className='user-page-options list'>
          <a onClick={this.rightHere}>{this.props.category.name}</a>
          <aside>
            <button onClick={this.openModal} className='user-page-edit'>Edit</button>
            <button onClick={this.deleteCat}className='user-page-delete'>Delete</button>
          </aside>
        </li>
      </main>
    );
  }
}

export default Category;