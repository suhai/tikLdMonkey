export const fetchGame = game => (
  $.ajax({
    method: 'GET',
    url: `api/games/${game}`
  })
);

export const fetchGames = () => {
  $.ajax({
    method: 'GET',
    url: `api/games`
  });
};

export const createGame = game => (
 $.ajax({
    method: 'POST',
    url: '/api/games',
    dataType: "json",
    data: game
  })
);

export const updateGame = (game, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/games/${id}`,
    dataType: "json",
    data: game
  })
);

export const deleteGame = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/games/${id}`
  })
);
