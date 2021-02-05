import { Button, Paper, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import { cn } from "../../services/helpers/classname";
import { AccountType } from "../../store/graphql-global-types";

import "./styles.scss";

const block = cn("profile-page");

export function ProfilePage() {
  const [profileType] = useState<AccountType>(AccountType.enrolee);
  const [tab, setTab] = useState<"profile" | "events">("profile");

  return (
    <div className={block()}>
      <div className={block("person")}>
        <div className={block("userpic")}></div>
        <div className={block("user-info")}>
          <span className={block("user-name")}>
            Христо Александр Александрович
          </span>
          <span className={block("user-type", { [profileType]: true })}>
            Студент
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
              <Tab label="Достижения" value="achievements" />
              {/* <Tab label="Мои мероприятия" value="events" /> */}
            </Tabs>
          </Paper>
        </div>
        <div className={block("details-row")}>
          <span className={block("details-row-name")}>Страна:</span>
          <span className={block("details-row-value")}>Россия</span>
        </div>
        <div className={block("details-row")}>
          <span className={block("details-row-name")}>Населенный пункт:</span>
          <span className={block("details-row-value")}>Ростов-на-Дону</span>
        </div>
        <div className={block("details-row")}>
          <span className={block("details-row-name")}>Дата рождения:</span>
          <span className={block("details-row-value")}>25 марта 1995 г.</span>
        </div>
        <div className={block("details-row")}>
          <span className={block("details-row-name")}>
            Образовательное учреждение:
          </span>
          <span className={block("details-row-value")}>
            Донской Государственный Технический Университет
          </span>
        </div>
        <div className={block("details-row")}>
          <span className={block("details-row-name")}>E-mail:</span>
          <span className={block("details-row-value")}>
            kotofenum@gmail.com
          </span>
        </div>
        <div className={block("details-action")}>
          <Button variant="outlined" color="primary">
            Редактировать
          </Button>
        </div>
      </div>
    </div>
  );
}
