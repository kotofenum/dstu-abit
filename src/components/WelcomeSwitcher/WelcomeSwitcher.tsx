import React, { useEffect, useState } from "react";
import { cn } from "../../services/helpers/classname";
import { Paper, Tab, Tabs } from "@material-ui/core";

import "./styles.scss";
import { useHistory, useRouteMatch } from "react-router-dom";

const block = cn("welcome-switcher");

export function WelcomeSwitcher() {
  const history = useHistory();
  const isWelcome = useRouteMatch("/welcome");
  const isNavigation = useRouteMatch("/welcome/navigation");

  useEffect(() => {
    if (isNavigation) {
      setTab("navigation");
    } else {
      setTab("open-day");
    }
  }, [isNavigation]);

  const [tab, setTab] = useState<"open-day" | "navigation">("open-day");

  return isWelcome ? (
    <div className={block()}>
      <Paper square>
        <Tabs
          value={tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(_, value) => {
            setTab(value);
            history.replace(`/welcome/${value}`);
          }}
        >
          <Tab label="День открытых дверей" value="open-day" />
          <Tab label="Навигация" value="navigation" />
        </Tabs>
      </Paper>
    </div>
  ) : null;
}
