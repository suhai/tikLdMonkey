// HOW TO MAKE AN API CALL FROM DEVTOOLS CONSOLE
// $.ajax({
//     method: 'POST',
//     url: 'categories',
//     data: {
//         category: {
//             name: 'lunch'
//         }
//     }
// })


export const createCategory = data => (
  $.ajax({
    method: 'POST',
    url: 'api/categories',
    data: data
  })
);


export const fetchCategory = category => {
  $.ajax({
    method: 'GET',
    url: `api/categories/${category}`
  })
}



export const fetchCategories = data => (
  $.ajax({
    method: 'GET',
    url: 'api/categories'
  })
);


export const deleteCategory = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/categories/${id}`
  })
}


export const updateCategory = category => (
  $.ajax({
    method: 'PATCH',
    url: `api/categories/${category.id}`,
    data: {category}
  })
);



