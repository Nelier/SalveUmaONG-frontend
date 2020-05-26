import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { logProvider } from './contexts/isLogged';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Edit from './pages/ProfileEdit';

export default function Routes() {
  return (
    <BrowserRouter>
      <logProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/singup" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/edit" component={Edit} />
        </Switch>
      </logProvider>
    </BrowserRouter>
  );
}
