import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Test from '../components/test';

const Routers: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route>
        <Test />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Routers;