import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "../views/components/templates/MainLayout/MainLayout";
import SignIn from "../views/pages/auth/SignIn";
import SignUp from "../views/pages/auth/SignUp";
import RegisterRequirement from "../views/pages/RegisterRequirement";
import RequirementList from "../views/pages/RequirementList";

const Routers: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/auth/sign-in">
        <SignIn />
      </Route>
      <Route exact path="/auth/sign-up">
        <SignUp />
      </Route>
      <Route
        path="/main"
        render={({ match: { url } }) => (
          <Switch>
            <MainLayout>
              <Route exact path={`${url}/register`}>
                <RegisterRequirement />
              </Route>
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
