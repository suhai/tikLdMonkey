import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];
// const createLogger = createLogger();

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  // const createLogger = require('redux-logger');
  middlewares.push(createLogger());
}

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
    applyMiddleware(createLogger(), thunk))
  )
);

export default configureStore;
