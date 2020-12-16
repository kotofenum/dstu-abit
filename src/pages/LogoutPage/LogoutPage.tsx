import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useOvermind } from "../../store";

export function LogoutPage() {
  const { actions, state } = useOvermind();

  const history = useHistory();

  useEffect(() => {
    actions.auth.logout();
    history.push("/login");
  }, []);

  return null;
}
