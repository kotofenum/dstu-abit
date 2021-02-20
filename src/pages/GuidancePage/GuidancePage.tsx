import React, { useEffect } from "react";
import { cn } from "../../services/helpers/classname";
import { guidanceEvents } from "./data";

import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";

import "./styles.scss";
import { Link, useHistory } from "react-router-dom";
import { useOvermind } from "../../store";
import { Button } from "@material-ui/core";

const block = cn("guidance-page");

export function GuidancePage() {
  const history = useHistory();
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.guidance.getGuidances();
  }, [actions.guidance]);

  return (
    <div className={block()}>
      <span className={block("heading")}>
        План проведения профориентационных мероприятий
      </span>
      <div className={block("actions")}>
        {state.auth.isAdmin ? (
          <Link
            to="/guidance/add"
            style={{
              alignSelf: "flex-end",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Button variant="outlined" color="primary">
              Создать событие
            </Button>
          </Link>
        ) : null}
      </div>
      <div className={block("list")}>
        {state.guidance.guidances.map((event) =>
          event.link ? (
            <a
              className={block("event-block")}
              key={event.uid}
              href={event.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className={block("event-title")}>
                {event.title}
                <div
                  className={block("icon")}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/guidance/${event.uid}/edit`);
                  }}
                >
                  <EditIcon />
                </div>
              </span>
              <span className={block("event-date")}>{event.date}</span>
              <span className={block("event-unit")}>
                Факультет/структурное подразделение: {event.description}
              </span>
            </a>
          ) : (
            <div className={block("event-block")} key={event.title}>
              <span className={block("event-title")}>
                {event.title}
                <div
                  className={block("icon")}
                  onClick={(e) => {
                    e.preventDefault();
                    history.push(`/guidance/${event.uid}/edit`);
                  }}
                >
                  <EditIcon />
                </div>
              </span>
              <span className={block("event-date")}>{event.date}</span>
              <span className={block("event-unit")}>
                Факультет/структурное подразделение: {event.description}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
