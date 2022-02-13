import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { State } from "../stores";
import { pathNames } from "./path";

const PrivateRoute: React.VFC<RouteProps> = ({ children, ...props }) => {
  const { auth } = useSelector((s: State) => s.user);
  return (
    <Route
      {...props}
      render={() =>
        auth ? children : <Redirect to={{ pathname: pathNames.signIn }} />
      }
    />
  );
};

export default PrivateRoute;
