import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useOvermind } from "../store";

export function ProtectedRoute({ component: Component, ...rest }: any) {
  const { state } = useOvermind();

  return (
    <Route
      {...rest}
      render={(props) =>
        state.auth.isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}
