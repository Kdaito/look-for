import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "../views/components/templates/MainLayout/MainLayout";
import RequirementList from "../views/pages/RequirementList";

const Routers: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        render={({ match: { url } }) => (
          <Switch>
            <MainLayout>
              <Route exact path={url}>
                <RequirementList />
              </Route>
            </MainLayout>
          </Switch>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Routers;
