'use strict';

import { combineReducers } from 'redux';
import myProjects from './myProjectsReducer';
import browse from './browseReducer';

const rootReducer = combineReducers({
  myProjects,
  browse
});

export default rootReducer;
