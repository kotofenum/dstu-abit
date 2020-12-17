import React, { useEffect } from "react";
import { Switch, Route, Router, Redirect, useHistory } from "react-router-dom";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { EducationPage } from "../pages/EducationPage";
import { EventInfoPage } from "../pages/EventInfoPage";
import { EventListPage } from "../pages/EventListPage";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage/inedx";
import { MajorListPage } from "../pages/MajorListPage";
import { MajorPage } from "../pages/MajorPage";
import { ProgramPage } from "../pages/ProgramPage";
import { RegisterPage } from "../pages/RegisterPage";
import { SpecialtyPage } from "../pages/SpecialtyPage";
import { useOvermind } from "../store";

import { browserHistory } from "./browserHistory";

function MainRouting() {
  const { state, actions } = useOvermind();

  const history = useHistory();
  
  useEffect(() => {
    if (state.auth.token) {
      actions.auth.getMe()
      actions.tags.getMyTags();
    } else {
      history.push('/register')
    }
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route exact path="/education" component={EducationPage} />
        <Route exact path="/education/majors" component={MajorListPage} />
        <Route exact path="/education/majors/:id" component={MajorPage} />
        <Route
          exact
          path="/education/specialties/:id"
          component={SpecialtyPage}
        />
        <Route exact path="/education/programs/:id" component={ProgramPage} />
        <Route exact path="/events/:id" component={EventInfoPage} />
        <Route exact path="/events" component={EventListPage} />
        <Redirect path="/" to="/events" />
      </Switch>
    </>
  );
}

export function Routing() {
  return (
    <Router history={browserHistory}>
      <Header />
      <Menu />
      <Route component={MainRouting} />
    </Router>
  );
}
