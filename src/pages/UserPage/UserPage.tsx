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

const block = cn("user-page");

interface ITabProps {
  setTab: React.Dispatch<React.SetStateAction<"info" | "events" | "favorite">>;
  uid: string;
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
  }, [props]);

  useEffect(() => {
    actions.admin.getUserEvents(props.uid);
  }, [actions.admin, actions.events, props.uid]);

  return null;
};

const Favorite = (props: ITabProps) => {
  const { actions } = useOvermind();

  useEffect(() => {
    props.setTab("favorite");
  }, [actions.admin, props]);

  useEffect(() => {
    actions.admin.getUserTags(props.uid);
  }, [actions.admin, props.uid]);

  return null;
};

export function UserPage() {
  const { actions, state } = useOvermind();
  const { path, params } = useRouteMatch();
  const userId = (params as any)["id"] as string;
  const history = useHistory();
  const [tab, setTab] = useState<"info" | "events" | "favorite">("info");

  const user = state.admin.currentUser;
  useEffect(() => {
    actions.admin.getUser(userId);
  }, [actions.admin, userId]);

  console.log(path);

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
      <div className={block("content")}>
        <div className={block("details")}>
          <div className={block("details-tabs")}>
            <Paper square>
              <Tabs
                value={tab}
                indicatorColor="primary"
                textColor="primary"
                onChange={(_, value) => {
                  setTab(value);
                  history.replace(`/admin/users/${userId}/${value}`);
                }}
              >
                <Tab label="Данные профиля" value="info" />
                <Tab label="Запись на мероприятия" value="events" />
                <Tab label="Интересы" value="favorite" />
              </Tabs>
            </Paper>
          </div>
        </div>
        <Switch>
          <Route exact path={`${path}/info`}>
            <div className={block("tab-content")}>
              <MyInfo setTab={setTab} uid={userId} />
              <div className={block("details-row")}>
                <span className={block("details-row-name")}>Страна:</span>
                <span className={block("details-row-value")}>
                  {user.country}
                </span>
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
                <span className={block("details-row-name")}>
                  Дата рождения:
                </span>
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
                  <span className={block("details-row-name")}>
                    ФИО ребенка:
                  </span>
                  <span className={block("details-row-value")}>
                    {user.child}
                  </span>
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
              {/* <div className={block("details-action")}>
                <Link to="/profile/edit">
                  <Button variant="contained" color="primary">
                    Редактировать
                  </Button>
                </Link>
              </div> */}
            </div>
          </Route>
          <Route exact path={`${path}/events`}>
            <div className={block("details")}>
              <FetchMyEvents setTab={setTab} uid={userId} />
              {state.admin.eventsOfUser.map((userEvent) => (
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
          {/* <Route exact path={`${path}/achievements`}>
            <div className={block("cards")}>
              <MyAchievements setTab={setTab} />
              {achievements.map((achievement) => (
                <AchievementCard
                  key={achievement.name}
                  name={achievement.name}
                  reward={achievement.reward}
                />
              ))}
            </div>
          </Route> */}
          <Route exact path={`${path}/favorite`}>
            <div style={{ display: "flex", flexDirection: "column" }}>
            <Favorite setTab={setTab} uid={userId} />
              {state.admin.tagsOfUser?.programs?.length ? (
                <span className={block("subheading")}>
                  Образовательные программы
                </span>
              ) : null}
              {state.admin.tagsOfUser?.programs.map((program) => (
                <Link to={`/education/programs/${program.uid}`}>
                  {program.title}
                </Link>
              ))}
              {state.admin.tagsOfUser?.specialties?.length ? (
                <span className={block("subheading")}>Направления</span>
              ) : null}
              {state.admin.tagsOfUser?.specialties.map((program) => (
                <Link to={`/education/specialties/${program.uid}`}>
                  {program.title}
                </Link>
              ))}
              {state.admin.tagsOfUser?.majors?.length ? (
                <span className={block("subheading")}>
                  Укрупненные группы направлений
                </span>
              ) : null}
              {state.admin.tagsOfUser?.majors.map((program) => (
                <Link to={`/education/majors/${program.uid}`}>
                  {program.title}
                </Link>
              ))}
            </div>
          </Route>
          <Redirect exact path={path} to={`${path}/info`} />
        </Switch>
      </div>
    </div>
  ) : null;
}
