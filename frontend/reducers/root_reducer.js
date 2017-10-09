import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import CategoryReducer from './category_reducer';
import MessageReducer from './message_reducer';
import JobAppReducer from './job_app_reducer';
import errorsReducer from './error_reducer';

import {combineReducers} from 'redux';


const rootReducer = combineReducers({
	session: SessionReducer,
	errors: errorsReducer,
  users: UserReducer,
  categories: CategoryReducer,
  messages: MessageReducer,
  job_apps: JobAppReducer,
});

export default rootReducer;
