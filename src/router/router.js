import React from 'react';

import { Router, Route, IndexRoute, useRouterHistory, IndexRedirect } from 'react-router';
import { createHashHistory } from 'history';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

import App from '../App.js';

import Setup from '../views/Setup/Setup.jsx';
import Settings from '../views/Settings/Settings.jsx';
import Feedback from '../views/Feedback/Feedback.jsx';
import Rules from '../views/Rules/Rules.jsx';
import RulesContent from '../views/Rules/RulesContent.jsx';
import ErrorPage from '../views/ErrorPage/PageNotFound.jsx';
import Connection from '../views/Settings/Connection.jsx';
import Notifications from '../views/Settings/Notifications.jsx';
import SSHkey from '../views/Settings/SSHkey.jsx';
import SystemInfo from '../views/Settings/SystemInfo.jsx';
import Updates from '../views/Settings/Updates.jsx';
import Dashboard from '../views/Dashboard/Dashboard.jsx';
import BrowseFs from '../views/BrowseFs/BrowseFs.jsx';
import Install from '../views/Install/Install.jsx';
import License from '../views/Install/License.jsx';
import Database from '../views/Install/Database.jsx';
import Login from '../views/Auth/Login.jsx';
import ForgotPassword from '../views/Auth/ForgotPassword.jsx';

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
      <Route path = "login" component = {Login} />
      <Route path = "forgotpwd" component = {ForgotPassword} />
      <Route path = "/" component = {App}>
        <IndexRoute component = {Setup} />
        <Route path = "setup" component = {Setup} />
        <Route path = "feedback" component = {Feedback} />
        <Route path = "rules" component = {Rules}>
          <IndexRedirect to = "/rules/content" />
          <Route path = "content" component = {RulesContent} />
        </Route>
        <Route path = "settings" component = {Settings}>
          <IndexRedirect to = "/settings/dbconnect" />
          <Route path = "dbconnect" component = {Connection} />
          <Route path = "notifications" component = {Notifications} />
          <Route path = "sshkey" component = {SSHkey} />
          <Route path = "sysinfo" component = {SystemInfo} />
          <Route path = "updates" component = {Updates} />
        </Route>
        <Route path = ":projectid">
          <IndexRedirect to = "/:projectid/dashboard" />
          <Route path = "dashboard" component = {Dashboard} />
          <Route path = "browse/source(/**)(/*.*)" component = {BrowseFs} />
        </Route>
      </Route>
      <Route path="*" component={ErrorPage}/>
    </Router>
  </Provider>
);

export default Routes;
