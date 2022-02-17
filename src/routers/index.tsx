import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import AuthRoute from "./authRoute";
import { pathNames } from "./path";
import SignIn from "../views/pages/auth/SignIn";
import SignUp from "../views/pages/auth/SignUp";
import UserSetting from "../views/pages/UserSetting";
import RequirementList from "../views/pages/RequirementList";
import EditRequirement from "../views/pages/EditRequirement";
import RegisterRequirement from "../views/pages/RegisterRequirement";
import MainLayout from "../views/components/templates/MainLayout/MainLayout";

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
        <PrivateRoute exact path={pathNames.edit}>
          <EditRequirement />
        </PrivateRoute>
        <PrivateRoute exact path={pathNames.setting}>
          <UserSetting />
        </PrivateRoute>
      </MainLayout>
    </Switch>
  </BrowserRouter>
);

export default Routers;
