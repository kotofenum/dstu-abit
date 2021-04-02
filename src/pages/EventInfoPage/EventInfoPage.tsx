import React, { useCallback, useEffect, useState } from "react";
import { Brick } from "../../components/utility/Brick";
import { cn } from "../../services/helpers/classname"; // TODO: fix root path

import "./styles.scss";

import data from "../EventListPage/data";
import { EventCard } from "../EventListPage/components/EventCard";
import { Link, useRouteMatch } from "react-router-dom";
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
  }, [actions.events, eventId]);

  const event = state.events.currentEvent;

  useEffect(() => {
    if (event) {
      document.title = `${event.title} | Абитуриент ДГТУ`;
    }
  }, [event]);

  // const [hasPart, setHasPart] = useState<boolean>(false);

  const hasPart = event?.userIsGoing || false;

  const get = useCallback(() => {
    const event = localStorage.getItem("ev" + eventId) || "false";
    const isPart = Boolean(JSON.parse(event)) || false;
    return isPart;
  }, [eventId]);

  const save = useCallback(
    (val: boolean) => {
      localStorage.setItem("ev" + eventId, String(val));
      // setHasPart(val);
    },
    [eventId]
  );

  useEffect(() => {
    const p = get();
    // setHasPart(p);
  }, [get]);

  return event ? (
    <div className={block()}>
      <Brick size={8} />
      <div className={block("main")}>
        <div className={block("summary")}>
          <a
            className={block("hide-desktop")}
            style={{
              color: "inherit",
              textDecoration: "none",
              marginBottom: "8px",
            }}
            href={event?.link!}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              color="primary"
              // disabled={event?.placesLeft === 0}
              onClick={async () => {
                actions.events.visitEvent({ eventId: event.uid });
              }}
            >
              Подробнее
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
          {!!event.reward && (
            <span style={{ marginBottom: "8px" }}>{event.reward} баллов</span>
          )}
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
            onClick={async () => {
              actions.events.visitEvent({ eventId: event.uid });
            }}
          >
            Подробнее
          </Button>
        </a>
        {/* {hasPart && <Tag name="Подключиться" isConnectButton />} */}
        {state.auth.user ? (
          <Button
            variant="outlined"
            color="primary"
            name={
              hasPart
                ? "Отписаться от мероприятия"
                : "Записаться на мероприятие"
            }
            // isButton
            disabled={event?.placesLeft === 0 && (event?.limit || 0) > 0}
            onClick={async (e) => {
              e.preventDefault();
              if (hasPart) {
                await actions.events.leaveEvent({ eventId: event?.uid! });
                save(false);
              } else {
                save(true);
                await actions.events.joinEvent({ eventId: event?.uid! });
              }
              actions.events.getEvents();
              actions.events.getEvent(event?.uid!);
            }}
          >
            {hasPart
              ? "Отписаться от мероприятия"
              : "Записаться на мероприятие"}
          </Button>
        ) : null}
        {state.auth.isAdmin && (
          <Link
            to={`/events/${eventId}/edit`}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              color="primary"
            >
              Редактировать
            </Button>
          </Link>
        )}
        {(event?.placesLeft || event?.placesLeft === 0) && (
          <span
            className={block("places-left", {
              joined: hasPart,
              low: event?.placesLeft > 0 && event?.placesLeft <= 3 && !hasPart,
            })}
          >
            {hasPart
              ? "Вы идете"
              : event?.placesLeft === 0
              ? `Места закончились`
              : `Осталось ${event?.placesLeft} мест`}
          </span>
        )}
      </div>
    </div>
  ) : null;
}
