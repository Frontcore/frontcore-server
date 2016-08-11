import React from 'react';

import { Router, Route, IndexRoute, useRouterHistory, IndexRedirect } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../App.js';

import Setup from '../views/Setup/Setup.jsx';
import Settings from '../views/Settings/Settings.jsx';
import ErrorPage from '../views/ErrorPage/PageNotFound.jsx';
import Profile from '../views/Settings/Profile.jsx';
import Notifications from '../views/Settings/Notifications.jsx';
import SSHkey from '../views/Settings/SSHkey.jsx';
import Dashboard from '../views/Dashboard/Dashboard.jsx';
import BrowseFs from '../views/BrowseFs/BrowseFs.jsx';

const Routes = (
  <Router history={appHistory}>
    <Route path = "/" component = {App}>
      <IndexRoute component = {Setup} />
      <Route path = "setup" component = {Setup} />
      <Route path = "settings" component = {Settings}>
        <IndexRedirect to = "/settings/profile" />
        <Route path = "profile" component = {Profile} />
        <Route path = "notifications" component = {Notifications} />
        <Route path = "sshkey" component = {SSHkey} />
      </Route>
      <Route path = ":project">
        <IndexRedirect to = "/:project/dashboard" />
        <Route path = "dashboard" component = {Dashboard} />
        <Route path = "browse/source(/**)(/*.*)" component = {BrowseFs} />
      </Route>
    </Route>
    <Route path="*" component={ErrorPage}/>
  </Router>
);

export default Routes;
