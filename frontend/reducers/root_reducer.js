import SessionReducer from './session_reducer';
import UserReducer from './user_reducer';
import SearchReducer from './search_reducer';
import CategoryReducer from './category_reducer';
// import GameReducer from './game_reducer';
// import JobAppReducer from './job_app_reducer';
// import ProjectReducer from './project_reducer';
// import TriviumReducer from './trivium_reducer';

import {combineReducers} from 'redux';


const rootReducer = combineReducers({
  session: SessionReducer,
  users: UserReducer,
  search: SearchReducer,
  category: CategoryReducer
  // games: GameReducer,
  // job_apps: JobAppReducer,
  // projects: ProjectReducer,
  // trivium: TriviumReducer
});

export default rootReducer;
