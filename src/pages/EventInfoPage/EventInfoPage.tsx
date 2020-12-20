import React, { useEffect } from "react";
import { Brick } from "../../components/utility/Brick";
import { cn } from "../../services/helpers/classname"; // TODO: fix root path

import "./styles.scss";

import data from "../EventListPage/data";
import { EventCard } from "../EventListPage/components/EventCard";
import { useRouteMatch } from "react-router-dom";
import { useOvermind } from "../../store";
import moment from "moment";

import { ReactComponent as SchoolIcon } from "../../assets/svg/school.svg";
import { ReactComponent as LanguageIcon } from "../../assets/svg/language.svg";
import { Tag } from "../EventListPage/components/Tag/Tag";
import { eventTypes } from "../../types/eventTypes";
import { Button } from "@material-ui/core";

const block = cn("event-info-page");

export function EventInfoPage() {
  const { params } = useRouteMatch();
  const eventId = (params as any)["id"] as string;

  console.log(eventId);

  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.events.getEvent(eventId);
  }, [eventId]);

  const event = state.events.currentEvent;

  return event ? (
    <div className={block()}>
      <Brick size={8} />
      <div className={block("main")}>
        <div className={block("summary")}>
          <a
          className={block('hide-desktop')}
            style={{ color: "inherit", textDecoration: "none", marginBottom: '8px' }}
            href={event?.link!}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              color="primary"
              // disabled={event?.placesLeft === 0}
            >
              Подключиться
            </Button>
          </a>
          <span className={block("type")}>
            {(eventTypes as any)[event.type]}
          </span>
          <span className={block("title")}>{event?.title}</span>
          <Brick size={1} />
          <span className={block("description")}>{event?.description}</span>
        </div>
        <div className={block("details")}>
          <span className={block("date")}>
            {moment(event?.startsAt).format("D MMMM, dddd")}
          </span>
          <span className={block("time-range")}>
            {new Date(event?.startsAt).toLocaleTimeString().substr(0, 5) +
              " — " +
              new Date(event?.endsAt).toLocaleTimeString().substr(0, 5)}
          </span>
          {/* <span className={block("place", { online: !event?.place })}> */}
          <span className={block("place", { online: true })}>
            {/* TODO: reuse */}
            {/* {event?.place ? ( */}
            {false ? (
              <SchoolIcon className={block("icon")} />
            ) : (
              <LanguageIcon className={block("icon")} />
            )}
            {/* <span>{event?.place || "Онлайн"}</span> */}
            <span>{false || "Онлайн"}</span>
          </span>
        </div>
      </div>

      <div className={block("actions")}>
        <a
          style={{ color: "inherit", textDecoration: "none" }}
          href={event?.link!}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            color="primary"
            // disabled={event?.placesLeft === 0}
          >
            Подключиться
          </Button>
        </a>
        {/* {event?.userIsJoined && <Tag name="Подключиться" isConnectButton />}
        <Tag
          name={event?.userIsJoined ? "Отписаться от мероприятия" : "Записаться на мероприятие"}
          isButton
          disabled={event?.placesLeft === 0}
          onClick={async (e) => {
            e.preventDefault();
            if (event?.userIsJoined) {
              await actions.events.leftEvent({ eventId: event?.uid! });
            } else {
              // await actions.events.joinEvent({ eventId: event?.uid! });
            }
            actions.events.getEvents();
            actions.events.getEvent(event?.uid!);
          }}
        />
        {(event?.placesLeft || event?.placesLeft === 0) && (
          <span
            className={block("places-left", {
              joined: event?.userIsJoined,
              low:
                event?.placesLeft > 0 &&
                event?.placesLeft <= 3 &&
                !event?.userIsJoined,
            })}
          >
            {event?.userIsJoined
              ? "Вы идете"
              : event?.placesLeft === 0
              ? `Места закончились`
              : `Осталось ${event?.placesLeft} мест`}
          </span>
        )} */}
      </div>
    </div>
  ) : null;
}
