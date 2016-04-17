import React from 'react';

import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../App.js';

import ClusterTabPane from '../views/Cluster/ClusterTabPane.jsx';
import ErrorPage from '../views/ErrorPage/PageNotFound.jsx';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {ClusterTabPane} />
      <Route path = "cluster" component = {ClusterTabPane} />
    </Route>
    <Route path="*" component={ErrorPage}/>
  </Router>
);

export default Routes;
