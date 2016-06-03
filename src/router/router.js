import React from 'react';

import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../App.js';

import Dashboard from '../views/Dashboard/Dashboard.jsx';
import ErrorPage from '../views/ErrorPage/PageNotFound.jsx';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Dashboard} />
      <Route path = "dashboard" component = {Dashboard} />
    </Route>
    <Route path="*" component={ErrorPage}/>
  </Router>
);

export default Routes;
