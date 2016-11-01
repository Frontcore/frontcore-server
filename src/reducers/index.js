import { combineReducers } from 'redux';
import myProjects from './myProjectsReducer';
import browse from './browseReducer';
import project from './projectReducer';
import rules from './rulesReducer';

const rootReducer = combineReducers({
  myProjects,
  browse,
  project,
  rules
});

export default rootReducer;
