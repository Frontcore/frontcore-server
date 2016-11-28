import React from 'react';
import Auth from '../utils/auth.utils';
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
import Profile from '../views/Settings/Profile.jsx';
import Connection from '../views/Settings/Connection.jsx';
import Notifications from '../views/Settings/Notifications.jsx';
import SSHkey from '../views/Settings/SSHkey.jsx';
import SystemInfo from '../views/Settings/SystemInfo.jsx';
import Updates from '../views/Settings/Updates.jsx';
import Dashboard from '../views/Dashboard/Dashboard.jsx';
import BrowseFs from '../views/BrowseFs/BrowseFs.jsx';
import Install from '../views/Install/Install.jsx';
import Login from '../views/Auth/Login.jsx';
import ForgotPassword from '../views/Auth/ForgotPassword.jsx';

import storeConfig from '../store/storeConfig';
import { Provider } from 'react-redux';
const store = storeConfig();

let auth = new Auth();

function shouldRedirectToLogin(nextState, replace) {
  if (!auth.isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

function shouldRedirectToHome(nextState, replace) {
  if (auth.isLoggedIn()) {
    replace({
      pathname: '/'
    });
  }
}

const Routes = (
  <Provider store={store}>
    <Router history={appHistory}>
      <Route path = "install" component = {Install} />
      <Route path = "login" component = {Login} onEnter={shouldRedirectToHome}/>
      <Route path = "forgotpwd" component = {ForgotPassword} />
      <Route path = "/" component = {App} onEnter={shouldRedirectToLogin}>
        <IndexRoute component = {Setup} />
        <Route path = "setup" component = {Setup} />
        <Route path = "feedback" component = {Feedback} />
        <Route path = "rules" component = {Rules}>
          <IndexRedirect to = "/rules/content" />
          <Route path = "content" component = {RulesContent} />
        </Route>
        <Route path = "settings" component = {Settings}>
          <IndexRedirect to = "/settings/profile" />
					<Route path = "profile" component = {Profile} />
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
