import { Button, Paper, Tab, Tabs } from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";
import { AccountType } from "../../store/graphql-global-types";

import "./styles.scss";

const block = cn("profile-page");

export function ProfilePage() {
  const { state } = useOvermind();
  const [tab, setTab] = useState<"profile" | "achievements" | "events">(
    "profile"
  );

  const user = state.auth.user;

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
              onChange={(_, value) => setTab(value)}
            >
              <Tab label="Данные профиля" value="profile" />
              <Tab label="Мои мероприятия" value="events" disabled />
              <Tab label="Достижения" value="achievements" disabled />
            </Tabs>
          </Paper>
        </div>
        <div className={block("details-row")}>
          <span className={block("details-row-name")}>Страна:</span>
          <span className={block("details-row-value")}>{user.country}</span>
        </div>
        <div className={block("details-row")}>
          <span className={block("details-row-name")}>Населенный пункт:</span>
          <span className={block("details-row-value")}>{user.locality}</span>
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
            <span className={block("details-row-value")}>{user.school}</span>
          </div>
        )}
        {user.child && (
          <div className={block("details-row")}>
            <span className={block("details-row-name")}>
              ФИО ребенка:
            </span>
            <span className={block("details-row-value")}>{user.child}</span>
          </div>
        )}
        {user.position && (
          <div className={block("details-row")}>
            <span className={block("details-row-name")}>
              Должность:
            </span>
            <span className={block("details-row-value")}>{user.position}</span>
          </div>
        )}
        <div className={block("details-row")}>
          <span className={block("details-row-name")}>E-mail:</span>
          <span className={block("details-row-value")}>{user.email}</span>
        </div>
        <div className={block("details-action")}>
          <Button variant="outlined" color="primary">
            Редактировать
          </Button>
        </div>
      </div>
    </div>
  ) : null;
}
