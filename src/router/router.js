import React from 'react';

import { Router, Route, IndexRoute, useRouterHistory, IndexRedirect } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../App.js';

import Setup from '../views/Setup/Setup.jsx';
import Settings from '../views/Settings/Settings.jsx';
import Feedback from '../views/Feedback/Feedback.jsx';
import ErrorPage from '../views/ErrorPage/PageNotFound.jsx';
import Connection from '../views/Settings/Connection.jsx';
import Notifications from '../views/Settings/Notifications.jsx';
import SSHkey from '../views/Settings/SSHkey.jsx';
import Dashboard from '../views/Dashboard/Dashboard.jsx';
import BrowseFs from '../views/BrowseFs/BrowseFs.jsx';
import Install from '../views/Install/Install.jsx';
import License from '../views/Install/License.jsx';
import Database from '../views/Install/Database.jsx';

import storeConfig from '../store/storeConfig';
import { Provider } from 'react-redux';
const store = storeConfig();

const Routes = (
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path = "install" component = {Install}>
        <IndexRedirect to = "/install/license" />
        <Route path = "license" component = {License} />
        <Route path = "database" component = {Database} />
      </Route>
      <Route path = "/" component = {App}>
        <IndexRoute component = {Setup} />
        <Route path = "setup" component = {Setup} />
        <Route path = "feedback" component = {Feedback} />
        <Route path = "settings" component = {Settings}>
          <IndexRedirect to = "/settings/dbconnect" />
          <Route path = "dbconnect" component = {Connection} />
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
  </Provider>
);

export default Routes;
