import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainLayout from "../views/components/templates/MainLayout/MainLayout";
import SignIn from "../views/pages/auth/SignIn";
import SignUp from "../views/pages/auth/SignUp";
import RegisterRequirement from "../views/pages/RegisterRequirement";
import RequirementList from "../views/pages/RequirementList";
import UserSetting from "../views/pages/UserSetting";
import { pathNames } from "./path";

const Routers: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={pathNames.signIn}>
        <SignIn />
      </Route>
      <Route exact path={pathNames.signUp}>
        <SignUp />
      </Route>
      <MainLayout>
        <Route exact path={pathNames.main}>
          <RequirementList />
        </Route>
        <Route exact path={pathNames.register}>
          <RegisterRequirement />
        </Route>
        <Route exact path={pathNames.setting}>
          <UserSetting />
        </Route>
      </MainLayout>
    </Switch>
  </BrowserRouter>
);

export default Routers;
