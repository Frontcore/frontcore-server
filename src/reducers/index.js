'use strict';

import { combineReducers } from 'redux';
import myProjects from './myProjectsReducer';

const rootReducer = combineReducers({
  myProjects
});

export default rootReducer;
