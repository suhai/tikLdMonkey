import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
    applyMiddleware(...middlewares))
  )
);

export default configureStore;
