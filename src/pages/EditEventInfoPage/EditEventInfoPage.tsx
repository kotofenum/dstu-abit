import React, { useEffect, useState } from "react";
import { Brick } from "../../components/utility/Brick";
import { cn } from "../../services/helpers/classname"; // TODO: fix root path

import "./styles.scss";

import data from "../EventListPage/data";
import { EventCard } from "../EventListPage/components/EventCard";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useOvermind } from "../../store";
import moment from "moment";

import { ReactComponent as SchoolIcon } from "../../assets/svg/school.svg";
import { ReactComponent as LanguageIcon } from "../../assets/svg/language.svg";
import { Tag } from "../EventListPage/components/Tag/Tag";
import { eventTypes } from "../../types/eventTypes";
import { Button, TextField } from "@material-ui/core";

const block = cn("edit-event-info-page");

export function EditEventInfoPage() {
  const { params } = useRouteMatch();
  const eventId = (params as any)["id"] as string;

  console.log(eventId);

  const { state, actions } = useOvermind();

  const history = useHistory();

  useEffect(() => {
    actions.events.getEvent(eventId);
  }, [eventId]);

  const event = state.events.currentEvent;

  const realPassword = "бит";

  const [description, setDescription] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [link, setLink] = useState<string | null>(null);
  const [pwd, setPwd] = useState<string | null>(null);

  useEffect(() => {
    if (event) {
      setDescription(event.description);
      setTitle(event.title);
      setLink(event.link);
    }
  }, [event]);

  useEffect(() => {
    if (event) {
      document.title = `Редактирование "${event.title}" | Абитуриент ДГТУ`;
    }
  }, [event]);

  return event ? (
    <div className={block()}>
      <Brick size={8} />
      <div className={block("main")}>
        <div className={block("summary")}>
          <span className={block("type")}>
            {(eventTypes as any)[event.type]}
          </span>
          <span className={block("title")}>
            <TextField
              style={{ width: "100%" }}
              variant="outlined"
              label="Название"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </span>
          <Brick size={1} />
          <span className={block("description")}>
            <TextField
              style={{ width: "100%" }}
              multiline
              variant="outlined"
              label="Описание"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </span>
          <Brick size={1} />
          <span className={block("description")}>
            <TextField
              style={{ width: "100%" }}
              variant="outlined"
              label="Ссылка"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </span>
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
        <Button
          variant="contained"
          color="primary"
          // disabled={pwd !== realPassword}
          onClick={async () => {
            // await actions.events.editEvent({
            //   eventId: event.uid,
            //   description: description || event.description,
            //   title: title || event.title,
            //   link: link || event.link,
            // });
            await actions.events.getEvent(event.uid);
            history.push(`/events/${event.uid}`);
          }}
        >
          Сохранить
        </Button>
        {/* <TextField
          style={{ marginLeft: "8px" }}
          label="Пароль"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        /> */}
      </div>
    </div>
  ) : null;
}
