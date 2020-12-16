import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { EducationPage } from "../pages/EducationPage";
import { EventInfoPage } from "../pages/EventInfoPage";
import { EventListPage } from "../pages/EventListPage";
import { MajorListPage } from "../pages/MajorListPage";
import { MajorPage } from "../pages/MajorPage";
import { ProgramPage } from "../pages/ProgramPage";
import { RegisterPage } from "../pages/RegisterPage";
import { SpecialtyPage } from "../pages/SpecialtyPage";

import { browserHistory } from "./browserHistory";

function MainRouting() {
  return (
    <>
      <Switch>
        <Route exact path="/register" component={RegisterPage} />
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
        <Redirect path="/" to="/education" />
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
