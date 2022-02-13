import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MainLayout from "../views/components/templates/MainLayout/MainLayout";
import SignIn from "../views/pages/auth/SignIn";
import SignUp from "../views/pages/auth/SignUp";
import RegisterRequirement from "../views/pages/RegisterRequirement";
import RequirementList from "../views/pages/RequirementList";
import UserSetting from "../views/pages/UserSetting";
import PrivateRoute from "./privateRoute";
import AuthRoute from "./authRoute";
import { pathNames } from "./path";

const Routers: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <AuthRoute exact path={pathNames.signIn}>
        <SignIn />
      </AuthRoute>
      <AuthRoute exact path={pathNames.signUp}>
        <SignUp />
      </AuthRoute>
      <MainLayout>
        <PrivateRoute exact path="/">
          <Redirect to={pathNames.main} />
        </PrivateRoute>
        <PrivateRoute exact path={pathNames.main}>
          <RequirementList />
        </PrivateRoute>
        <PrivateRoute exact path={pathNames.register}>
          <RegisterRequirement />
        </PrivateRoute>
        <PrivateRoute exact path={pathNames.setting}>
          <UserSetting />
        </PrivateRoute>
      </MainLayout>
    </Switch>
  </BrowserRouter>
);

export default Routers;
