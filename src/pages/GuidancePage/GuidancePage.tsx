import React from "react";
import { cn } from "../../services/helpers/classname";
import { guidanceEvents } from "./data";

import "./styles.scss";

const block = cn("guidance-page");

export function GuidancePage() {
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
              <span className={block("event-title")}>{event.name}</span>
              <span className={block("event-date")}>{event.date}</span>
              <span className={block("event-unit")}>
                Факультет/структурное подразделение: {event.unit}
              </span>
            </a>
          ) : (
            <div className={block("event-block")} key={event.name}>
              <span className={block("event-title")}>{event.name}</span>
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
