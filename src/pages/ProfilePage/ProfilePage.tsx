import { Button, Paper, Tab, Tabs } from "@material-ui/core";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  Link,
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { Brick } from "../../components/utility/Brick";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";
import { AccountType } from "../../store/graphql-global-types";
import { AchievementCard } from "../AchievementsIntroPage/components/AchievementCard";
import { EventCard } from "../EventListPage/components/EventCard";

import "./styles.scss";

const block = cn("profile-page");

interface ITabProps {
  setTab: React.Dispatch<
    React.SetStateAction<"info" | "achievements" | "events">
  >;
}

const MyInfo = (props: ITabProps) => {
  useEffect(() => {
    props.setTab("info");
  }, [props]);

  return null;
};

const FetchMyEvents = (props: ITabProps) => {
  const { actions } = useOvermind();

  useEffect(() => {
    props.setTab("events");
    actions.events.myUserEvents();
  }, [actions.events, props]);

  return null;
};

const MyAchievements = (props: ITabProps) => {
  useEffect(() => {
    props.setTab("achievements");
  }, [props]);

  return null;
};

export function ProfilePage() {
  const { path } = useRouteMatch();
  const history = useHistory();
  const { state } = useOvermind();
  const [tab, setTab] = useState<"info" | "achievements" | "events">("info");

  const user = state.auth.user;

  const [achievements, setAchievements] = useState<
    { name: string; reward: number }[]
  >([]);

  useEffect(() => {
    const achievements = localStorage.getItem("ach") || "{}";
    const arr = JSON.parse(achievements) || {};
    const ar = Object.keys(arr).map((key) => ({
      name: arr[key].label,
      reward: arr[key].reward,
    }));
    setAchievements(ar);
  }, []);

  return user ? (
    <div className={block()}>
      <div className={block("person")}>
        <div className={block("userpic")}></div>
        <div className={block("user-info")}>
          <span className={block("user-name")}>
            {`${user.lastName} ${user.firstName} ${user.patronym}`}
          </span>
          <span className={block("user-type", { [user.type]: true })}>
            {user.type === AccountType.enrolee && <>Абитуриент</>}
            {user.type === AccountType.parent && <>Родитель</>}
            {user.type === AccountType.teacher && <>Педагог</>}
          </span>
        </div>
      </div>
      <div className={block("details")}>
        <div className={block("details-tabs")}>
          <Paper square>
            <Tabs
              value={tab}
              indicatorColor="primary"
              textColor="primary"
              onChange={(_, value) => {
                setTab(value);
                history.replace(`/profile/${value}`);
              }}
            >
              <Tab label="Данные профиля" value="info" />
              <Tab label="Мои мероприятия" value="events" />
              <Tab label="Достижения" value="achievements" />
            </Tabs>
          </Paper>
        </div>
      </div>
      <Switch>
        <Route exact path={`${path}/info`}>
          <div className={block("tab-content")}>
            <MyInfo setTab={setTab} />
            <div className={block("details-row")}>
              <span className={block("details-row-name")}>Страна:</span>
              <span className={block("details-row-value")}>{user.country}</span>
            </div>
            <div className={block("details-row")}>
              <span className={block("details-row-name")}>
                Населенный пункт:
              </span>
              <span className={block("details-row-value")}>
                {user.locality}
              </span>
            </div>
            <div className={block("details-row")}>
              <span className={block("details-row-name")}>Дата рождения:</span>
              <span className={block("details-row-value")}>
                {moment(user.birthDate).format("D MMMM YYYY")} г.
              </span>
            </div>
            {user.school && (
              <div className={block("details-row")}>
                <span className={block("details-row-name")}>
                  Образовательное учреждение:
                </span>
                <span className={block("details-row-value")}>
                  {user.school}
                </span>
              </div>
            )}
            {user.child && (
              <div className={block("details-row")}>
                <span className={block("details-row-name")}>ФИО ребенка:</span>
                <span className={block("details-row-value")}>{user.child}</span>
              </div>
            )}
            {user.position && (
              <div className={block("details-row")}>
                <span className={block("details-row-name")}>Должность:</span>
                <span className={block("details-row-value")}>
                  {user.position}
                </span>
              </div>
            )}
            <div className={block("details-row")}>
              <span className={block("details-row-name")}>E-mail:</span>
              <span className={block("details-row-value")}>{user.email}</span>
            </div>
            <div className={block("details-action")}>
              <Link to="/profile/edit">
                <Button variant="contained" color="primary">
                  Редактировать
                </Button>
              </Link>
            </div>
          </div>
        </Route>
        <Route exact path={`${path}/events`}>
          <div className={block("details")}>
            <FetchMyEvents setTab={setTab} />
            {state.events.myUserEvents.map((userEvent) => (
              <>
                <EventCard
                  {...userEvent.event}
                  tags={[]}
                  id={userEvent.event.uid}
                  key={userEvent.event.uid}
                  url={userEvent.event.link}
                  date={new Date(userEvent.event.startsAt)}
                  timeRange={
                    new Date(userEvent.event.startsAt)
                      .toLocaleTimeString()
                      .substr(0, 5) +
                    " — " +
                    new Date(userEvent.event.endsAt)
                      .toLocaleTimeString()
                      .substr(0, 5)
                  }
                />
                <Brick size={3} />
              </>
            ))}
          </div>
        </Route>
        <Route exact path={`${path}/achievements`}>
          <div className={block("cards")}>
            {achievements.map((achievement) => (
              <AchievementCard
                key={achievement.name}
                name={achievement.name}
                reward={achievement.reward}
              />
            ))}
          </div>
        </Route>
        <Redirect exact path="/profile" to={`${path}/info`} />
      </Switch>
    </div>
  ) : null;
}
