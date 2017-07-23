// export const fetchTrivium = trivium => (
//   $.ajax({
//     method: 'GET',
//     url: `api/triviums/${trivium}`
//   })
// );

// export const fetchTrivia = query => {
//   if (query === undefined) query = {};
//   return $.ajax({
//     method: 'GET',
//     url: `api/triviums`,
//     data: {
//       query: query.query,
//       trivium_id: query.trivium_id,
//       search: query.search
//     }
//   });
// };

// export const createTrivium = trivium => (
//  $.ajax({
//     method: 'POST',
//     url: '/api/trivia',
//     dataType: "json",
//     data: trivium
//   })
// );

// export const updateTrivium = (trivium, id) => (
//   $.ajax({
//     method: 'PATCH',
//     url: `api/triviums/${id}`,
//     dataType: "json",
//     data: trivium
//   })
// );

// export const deleteTrivium = id => (
//   $.ajax({
//     method: 'DELETE',
//     url: `api/triviums/${id}`
//   })
// );
