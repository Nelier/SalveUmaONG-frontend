import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Edit from './pages/ProfileEdit';
import Profile from './pages/Profile';
import Recover from './pages/Recover';
import PageTest from './pages/PageTest';

export default function Routes() {
  return (
    <BrowserRouter>
      <logProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/singup" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/recover" component={Recover} />
          <Route path="/edit" component={Edit} />
          <Route path="/ong" component={Profile} />
          <Route path="/pagetest" component={PageTest} />
        </Switch>
      </logProvider>
    </BrowserRouter>
  );
}
