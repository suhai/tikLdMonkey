import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import LoggedHome from './logged_home';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedHome);
