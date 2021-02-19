import React from "react";
import { cn } from "../../services/helpers/classname";
import { guidanceEvents } from "./data";

import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";

import "./styles.scss";
import { useHistory } from "react-router-dom";

const block = cn("guidance-page");

export function GuidancePage() {
  const history = useHistory()
  
  return (
    <div className={block()}>
      <span className={block("heading")}>
        План проведения профориентационных мероприятий
      </span>
      <div className={block("list")}>
        {guidanceEvents.map((event) =>
          event.link ? (
            <a
              className={block("event-block")}
              key={event.name}
              href={event.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className={block("event-title")}>
                {event.name}
                <div className={block("icon")} onClick={(e) => {
                  e.preventDefault()
                  history.push(`/guidance/${event.name}/edit`)
                }}>
                  <EditIcon />
                </div>
              </span>
              <span className={block("event-date")}>{event.date}</span>
              <span className={block("event-unit")}>
                Факультет/структурное подразделение: {event.unit}
              </span>
            </a>
          ) : (
            <div className={block("event-block")} key={event.name}>
              <span className={block("event-title")}>
                {event.name}
                <div className={block("icon")}>
                  <EditIcon />
                </div>
              </span>
              <span className={block("event-date")}>{event.date}</span>
              <span className={block("event-unit")}>
                Факультет/структурное подразделение: {event.unit}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
