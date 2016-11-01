import { combineReducers } from 'redux';
import myProjects from './myProjectsReducer';
import browse from './browseReducer';
import project from './projectReducer';
import rules from './rulesReducer';
import authenticate from './authReducer';

const rootReducer = combineReducers({
  myProjects,
  browse,
  project,
  rules,
	authenticate
});

export default rootReducer;
