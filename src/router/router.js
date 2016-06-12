import React from 'react';

import { Router, Route, IndexRoute, useRouterHistory, IndexRedirect } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../App.js';

import Dashboard from '../views/Dashboard/Dashboard.jsx';
import Settings from '../views/Settings/Settings.jsx';
import ErrorPage from '../views/ErrorPage/PageNotFound.jsx';
import Profile from '../views/Settings/Profile.jsx';
import Notifications from '../views/Settings/Notifications.jsx';
import SSHkey from '../views/Settings/SSHkey.jsx';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Dashboard} />
      <Route path = "dashboard" component = {Dashboard} />
      <Route path = "settings" component = {Settings}>
        <IndexRedirect to="/settings/profile" />
        <Route path = "profile" component = {Profile} />
        <Route path = "notifications" component = {Notifications} />
        <Route path = "sshkey" component = {SSHkey} />
      </Route>
    </Route>
    <Route path="*" component={ErrorPage}/>
  </Router>
);

export default Routes;
