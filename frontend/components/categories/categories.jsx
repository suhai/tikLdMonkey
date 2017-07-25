// import React from 'react';
// import { values } from 'lodash'; 
// import Category from './category';
// export default class Categories extends React.Component {
//   constructor(props) {
//     super(props);  
//   }

//   componentDidMount() {
//     this.props.fetchCategories() 
//   }

//   render() {
//     let categories = values(this.props.category).map( (category, idx) => (
//       <Category key={idx} name={category.name} cid={category.id} editCategory={this.props.editCategory}
//        deleteCategory={this.props.deleteCategory} />

//       // <li className='user-page-options list' key={idx}>
//       //   <a href="#">{category.name}</a>
//       //   <aside>
//       //     <button onClick={this.props.editCategory(category.id)}className='user-page-edit'>Edit</button>
//       //     <button onClick={this.props.deleteCategory(idx)} className='user-page-delete'>Delete</button>
//       //   </aside>
//       // </li>
//     ));

//     return(
//       <div>
//         <ul className='user-page-nav'>
//           {categories}
//         </ul>
//       </div>
//     );
//   }
// }
