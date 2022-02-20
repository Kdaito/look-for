import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import NonUserRoute from "./NonUserRoute";
import { pathNames } from "./path";
import SignIn from "../views/pages/auth/SignIn";
import SignUp from "../views/pages/auth/SignUp";
import UserSetting from "../views/pages/UserSetting";
import RequirementList from "../views/pages/RequirementList";
import EditRequirement from "../views/pages/EditRequirement";
import RegisterRequirement from "../views/pages/RegisterRequirement";
import MainLayout from "../views/components/templates/MainLayout";
import NonUserLayout from "../views/components/templates/NonUserLayout";
import Home from "../views/pages/Home";

const Routers: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <NonUserRoute exact path={pathNames.home}>
        <NonUserLayout>
          <Home />
        </NonUserLayout>
      </NonUserRoute>
      <NonUserRoute exact path={pathNames.signIn}>
        <SignIn />
      </NonUserRoute>
      <NonUserRoute exact path={pathNames.signUp}>
        <SignUp />
      </NonUserRoute>
      <MainLayout>
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
