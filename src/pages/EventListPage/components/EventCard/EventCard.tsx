import React from "react";
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

const block = cn("event-card");

export interface IEventCardProps {
  id: string;
  title: string;
  description: string | null;
  date: Date;
  timeRange: string;
  place?: string | null;
  type: string;
  url?: string | null;
  placesLeft: number | null;
  userIsJoined?: boolean;
  reward?: number | null;
  tags: string[];
}

export function EventCard(props: IEventCardProps) {
  const {
    id,
    title,
    description,
    date,
    timeRange,
    place,
    type,
    url,
    placesLeft,
    userIsJoined,
    reward,
    tags,
  } = props;

  const { actions } = useOvermind();

  // const tgs = (tags as unknown) as string;
  // var json = tgs.replace(/([^\[\],\s]+)/g, '"$&"');
  // var array = JSON.parse(json);

  return (
    <Link to={`/events/${id}`} className={block()}>
      <div className={block("top-line")}>
        <span className={block("date")}>
          <CalendarIcon className={block("icon")} />
          <span>{date.toLocaleDateString()}</span>
        </span>
        <span className={block("place", { online: !place })}>
          {place ? (
            <SchoolIcon className={block("icon")} />
          ) : (
            <LanguageIcon className={block("icon")} />
          )}
          <span>{place || "Онлайн"}</span>
        </span>
      </div>
      <span className={block("type")}>{(eventTypes as any)[type]}</span>
      <span className={block("title")}>{title}</span>
      <span className={block("time-range")}>{timeRange}</span>
      <span className={block("description")}>{description}</span>
      <div className={block("bottom-line")}>
        <div className={block("actions")}>
          <a
            style={{ color: "inherit", textDecoration: "none" }}
            href={url!}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" color="primary">
              Подключиться
            </Button>
          </a>
          {/* <Tag
            name={userIsJoined ? "Отписаться" : "Записаться"}
            isButton
            disabled={placesLeft === 0}
            onClick={async (e) => {
              e.preventDefault();
              if (userIsJoined) {
                // await actions.events.leftEvent({ eventId: id });
              } else {
                // await actions.events.joinEvent({ eventId: id });
              }
              actions.events.getEvents()
              actions.events.getEvent(id)
            }}
          />
          {(placesLeft || placesLeft === 0) && (
            <span
              className={block("places-left", {
                joined: userIsJoined,
                low: placesLeft > 0 && placesLeft <= 3 && !userIsJoined,
              })}
            >
              {userIsJoined
                ? "Вы идете"
                : placesLeft === 0
                ? `Места закончились`
                : `Осталось ${placesLeft} мест`}
            </span>
          )} */}
        </div>
        <div className={block("tags")}>
          {tags.length ? tags.map((tag: string) => <Tag name={tag} />) : null}
        </div>
      </div>
    </Link>
  );
}
