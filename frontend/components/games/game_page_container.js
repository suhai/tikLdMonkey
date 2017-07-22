import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGame, fetchGames, createGame, updateGame, deleteGame } from '../../actions/game_actions';
import GamePage from './game_page';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  // fetchGame: game => dispatch(fetchGame(game)),
  fetchGames: games => dispatch(fetchGames(games)),
  // createGame: game => dispatch(createGame(game)),
  // updateGame: (game, id) => dispatch(updateGame(game, id)),
  // deleteGame: (game, id) => dispatch(deleteGame(game, id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
)(GamePage));
