import React, { useEffect } from "react";
import { cn } from "../../../../services/helpers/classname";
import { Tag } from "../Tag/Tag";

import { ReactComponent as CalendarIcon } from "../../../../assets/svg/calendar.svg";
import { ReactComponent as SchoolIcon } from "../../../../assets/svg/school.svg";
import { ReactComponent as LanguageIcon } from "../../../../assets/svg/language.svg";

import "./styles.scss";
import { Link } from "react-router-dom";
import { useOvermind } from "../../../../store";
import { eventTypes } from "../../../../types/eventTypes";
import { Button } from "@material-ui/core";

const block = cn("event-modal");

export interface IEventModalProps {
  id: string;
}

export function EventModal(props: IEventModalProps) {
  const { id } = props;

  const { actions, state } = useOvermind();

  useEffect(() => {
    actions.events.getEvent(id);

    return () => actions.events.clearCurrentEvent()
  }, [actions.events, id]);

  const event = state.events.currentEvent;

  return event ? (
    <Link to={`/events/${id}`} className={block()}>
      <div className={block("top-line")}>
        <span className={block("date")}>
          <CalendarIcon className={block("icon")} />
          {/* <span>{date.toLocaleDateString()}</span> */}
        </span>
      </div>
      <div className={block("top")}>
        <div className={block("info")}>
          <span className={block("title")}>{event.title}</span>
          <span className={block("description")}>{event.description}</span>
        </div>
        <div className={block("meta")}>
          <span className={block("type")}>
            {(eventTypes as any)[event.type]}
          </span>
          <span className={block("time-range")}>
            {new Date(event.startsAt).toLocaleTimeString().substr(0, 5) +
              " — " +
              new Date(event.endsAt).toLocaleTimeString().substr(0, 5)}
          </span>
          <span className={block("place", { online: true })}>
            {/* {place ? (
              <SchoolIcon className={block("icon")} />
            ) : (
              <LanguageIcon className={block("icon")} />
            )} */}
            <span>{event.faculty || "Онлайн"}</span>
          </span>
          {!!event.reward && (
            <span className={block("reward")}>{event.reward} баллов</span>
          )}
        </div>
      </div>
      <div className={block("bottom-line")}>
        <div className={block("actions")}>
          <a
            style={{ color: "inherist", textDecoration: "none" }}
            href={event.link!}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={async (e) => {
                e.stopPropagation();
                actions.events.visitEvent({ eventId: id });
              }}
            >
              Подключиться
            </Button>
          </a>
        </div>
      </div>
    </Link>
  ) : null;
}
