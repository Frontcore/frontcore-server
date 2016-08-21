'use strict';

import { combineReducers } from 'redux';
import myProjects from './myProjectsReducer';
import browse from './browseReducer';
import project from './projectReducer';

const rootReducer = combineReducers({
  myProjects,
  browse,
  project
});

export default rootReducer;
