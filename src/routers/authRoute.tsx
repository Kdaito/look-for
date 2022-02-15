import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { State } from "../stores";
import { pathNames } from "./path";

const AuthRoute: React.VFC<RouteProps> = ({ children, ...props }) => {
  const { auth } = useSelector((s: State) => s.auth);
  return (
    <Route
      {...props}
      render={() =>
        auth ? <Redirect to={{ pathname: pathNames.main }} /> : children
      }
    />
  );
};

export default AuthRoute;
