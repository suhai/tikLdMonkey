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
    url: 'categories',
    data: data
  })
);


export const fetchCategories = data => (
  $.ajax({
    method: 'GET',
    url: 'categories'
  })
);





