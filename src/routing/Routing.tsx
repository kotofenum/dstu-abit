import React, { useEffect } from "react";
import {
  Switch,
  Route,
  Router,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { EditEventInfoPage } from "../pages/EditEventInfoPage";
import { EducationPage } from "../pages/EducationPage";
import { EventInfoPage } from "../pages/EventInfoPage";
import { EventListPage } from "../pages/EventListPage";
import { FutureTourPage } from "../pages/FutureTourPage";
import { LoginPage } from "../pages/LoginPage";
import { LogoutPage } from "../pages/LogoutPage/inedx";
import { ProfilePage } from "../pages/ProfilePage";
import { MajorListPage } from "../pages/MajorListPage";
import { MajorPage } from "../pages/MajorPage";
import { ProgramListPage } from "../pages/ProgramListPage";
import { ProgramPage } from "../pages/ProgramPage";
import { RegisterPage } from "../pages/RegisterPage";
import { SpecialtyPage } from "../pages/SpecialtyPage";
import { WelcomePage } from "../pages/WelcomePage";
import { useOvermind } from "../store";

import { browserHistory } from "./browserHistory";
import { SearchBar } from "../components/SearchBar";
import { MainPage } from "../pages/MainPage";
import { AchievementCategoryPage } from "../pages/AchievementCategoryPage/AchievementCategoryPage";
import { AchievementsIntroPage } from "../pages/AchievementsIntroPage";
import { Notifications } from "../components/Notifications";
import { AchievementFormPage } from "../pages/AchievementFormPage";
import { AchievementCompetitionPage } from "../pages/AchievementCompetitionPage";
import { PreUniversityPage } from "../pages/PreUniversityPage";
import { ToastProvider } from "react-toast-notifications";
import { CalculatorPage } from "../pages/CalculatorPage";
import { EditProfilePage } from "../pages/EditProfilePage/EditProfilePage";
import { ApplicationDraftPage } from "../pages/ApplicationDraftPage";

export const useScrollToTop = (): null => {
  const location = useLocation();
  const pathname = location.pathname;
  const history = useHistory();

  useEffect(() => {
    // if (!location?.state?.cancelScroll && history.action !== 'POP') { TODO: реализовать
    if (history.action !== "POP") {
      window.scrollTo({
        top: 0,
      });
    }
  }, [history.action, location, pathname]);

  return null;
};

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function MainRouting() {
  const { state, actions } = useOvermind();

  const history = useHistory();

  useEffect(() => {
    if (state.auth.token) {
      actions.auth.getMe();
      actions.tags.getMyTags();
    } else {
      // history.push('/register')
    }
  }, [state.auth.token]);

  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* <Route exact path="/welcome" component={WelcomePage} /> */}
        <Route exact path="/welcome" component={MainPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route exact path="/profile/edit" component={EditProfilePage} />
        <Route path="/profile" component={ProfilePage} />
        {/* <Route exact path="/education" component={EducationPage} /> */}
        <Route
          exact
          path="/achievements/intro"
          component={AchievementsIntroPage}
        />
        <Route
          exact
          path="/achievements/category"
          component={AchievementCategoryPage}
        />
        <Route
          path="/achievements/category/:id/form"
          component={AchievementFormPage}
        />
        <Route
          exact
          path="/achievements/category/:id/form/competition"
          component={AchievementCompetitionPage}
        />
        <Redirect path="/achievements" to="/achievements/intro" />
        <Route
          exact
          path="/application/draft"
          component={ApplicationDraftPage}
        />
        <Redirect exact path="/application" to="/application/draft" />
        <Route exact path="/pre-university" component={PreUniversityPage} />
        <Route exact path="/calculator" component={CalculatorPage} />
        <Route exact path="/education/majors" component={MajorListPage} />
        <Route exact path="/education/majors/:id" component={MajorPage} />
        <Route
          exact
          path="/education/specialties/:id"
          component={SpecialtyPage}
        />
        <Route exact path="/education/programs" component={ProgramListPage} />
        <Route exact path="/education/programs/:id" component={ProgramPage} />
        <Redirect path="/education" to="/education/programs" />
        <Route exact path="/events/:id/edit" component={EditEventInfoPage} />
        <Route exact path="/events/:id" component={EventInfoPage} />
        <Route exact path="/events" component={EventListPage} />
        <Route exact path="/future-tour" component={FutureTourPage} />
        <Redirect path="/" to="/welcome" />
      </Switch>
    </>
  );
}

export function Routing() {
  const { state } = useOvermind();

  return (
    <ToastProvider>
      <Router history={browserHistory}>
        <Header />
        <Menu />
        {state.ui.notificationsOpened && <Notifications />}
        <Route component={MainRouting} />
      </Router>
    </ToastProvider>
  );
}
