import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../components/templates/MainLayout/MainLayout';
import Test from '../components/test';

const Routers: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        render={({match: {url}}) => (
          <Switch>
            <MainLayout>
              <Route exact path={url}>
                <Test/>
              </Route>
            </MainLayout>
          </Switch>
        )}
      />
    </Switch>
  </BrowserRouter>
)

export default Routers;