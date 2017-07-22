import React from 'react';
import { values, merge } from 'lodash';
import SideBarContainer from '../sidebar/sidebar_container';
import Categories from './categories';

class CategoryHome extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <main className='loggedhome-body'>
        <div className='main-index'>
          <nav className='content-nav'>
            <ul>
              <div className='upload-buttons'>
                <h2>Category Zone <button  className='addnew'>Add New</button></h2>   
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
