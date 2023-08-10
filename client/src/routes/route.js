import React from "react";
import { Route, Navigate } from "react-router-dom";

const AppRoute = ({
  component: Component,
  isAuthProtected,
  isUser,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthProtected && !localStorage.getItem("user")) {
        return (
          <Navigate
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }

      return <Component {...props} />;
    }}
  />
);

export default AppRoute;
