import { combineReducers } from 'redux';
import menu from './menu';
import auth from './auth';
import sidebar from './sidebar';

const rootReducer = combineReducers({
  menu,
  auth,
  sidebar,
});

export default rootReducer;
