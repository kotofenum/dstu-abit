import React, { useCallback, useEffect, useState } from "react";
import { Brick } from "../../components/utility/Brick";
import { cn } from "../../services/helpers/classname"; // TODO: fix root path
import { EventCard } from "./components/EventCard";
import { TagField } from "./components/TagField";
import TagsInput, { RenderTagProps } from "react-tagsinput";

import "./styles.scss";

import data from "./data";
import { useOvermind } from "../../store";

import groupBy from "lodash.groupby";
import { Events_events } from "../../store/events/effects/gql/graphql-types/Events";
import moment from "moment";
import { Tag } from "./components/Tag/Tag";
import { EducationTypePlain } from "../../types/EducationType";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import queryString from "query-string";
import { ModuleType } from "../../store/graphql-global-types";
import { moduleType, moduleTypeLocal } from "../../types/ModuleType";
import { Backdrop, Button, Modal, TextField } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import { EventModal } from "./components/EventModal";

const block = cn("event-list-page");

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const group = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

interface IFlattenTag {
  uid: string;
  title: string;
  type: EducationTypePlain;
}

export function EventListPage() {
  const { state, actions } = useOvermind();

  const [tags, setTags] = useState<IFlattenTag[]>([]);

  const location = useLocation();
  const query = queryString.parse(location.search);

  const moduleKey = query?.module as keyof typeof moduleType;
  const module = moduleType[moduleKey] as ModuleType;

  useEffect(() => {
    if (module) {
      document.title = `Модуль ${
        (moduleTypeLocal as any)[moduleKey]
      }, события | Абитуриент ДГТУ`;
    } else {
      document.title =
        "Полная карта мероприятий Дня открытых дверей | Абитуриент ДГТУ";
    }
  }, [module, moduleKey]);

  console.log(state.events);

  const getFlattenTags = useCallback(() => {
    const majorTags: IFlattenTag[] = state.tags.tags
      ? state.tags.tags.majors.map((tag) => ({
          ...tag,
          type: EducationTypePlain.major,
        }))
      : [];

    const specialtyTags: IFlattenTag[] = state.tags.tags
      ? state.tags.tags.specialties.map((tag) => ({
          ...tag,
          type: EducationTypePlain.specialty,
        }))
      : [];

    const programTags: IFlattenTag[] = state.tags.tags
      ? state.tags.tags.programs.map((tag) => ({
          ...tag,
          type: EducationTypePlain.program,
        }))
      : [];

    return [...majorTags, ...specialtyTags, ...programTags];
  }, [state.tags.tags]);

  useEffect(() => {
    setTags(getFlattenTags());
  }, [getFlattenTags]);

  // const normalizedTags = [
  //   ...state.tags.tags?.majors!,
  //   ...state.tags.tags?.specialties!,
  //   ...state.tags.tags?.programs!,
  // ];

  const [showModule, setShowModule] = useState<boolean>(true);
  const [showPersonal, setShowPersonal] = useState<boolean>(false);
  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    setShowModule(false);
    if (module) {
      actions.events.getEventsForModule({ module });
      setShowModule(true);
    }
  }, [module]);

  useEffect(() => {
    console.log("run");
    const job = async () => {
      await actions.events.getEvents();

      // if () {
      //   await actions.events.getEventsForModule()
      // }

      if (state.auth.token) {
        // await actions.tags.getMyTags();
        await actions.events.getEventsForUserTags();
      }
    };

    job();
  }, [
    actions.events,
    actions.tags,
    state.auth.token,
    location,
    location.search,
    module,
  ]);

  const otherEvents = state.events.events.filter((event) =>
    state.events.personalEvents.some((pEvent) => pEvent.uid === event.uid)
  );

  const filterSearch = (events: Events_events[], search?: string | null) => {
    if (!search) {
      return events;
    }

    return events.filter((event) => {
      return (
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.description?.toLowerCase()?.includes(search.toLowerCase())
      );
    });
  };

  const filteredEvents =
    showModule && state.events.eventsForModule.length
      ? filterSearch(state.events.eventsForModule, search)
      : tags.length && showPersonal
      ? // ? state.events.events.filter((event) => {
        //     const str = (event.tags as unknown) as string;
        //     var json = str.replace(/([^\[\],\s]+)/g, '"$&"');
        //     var arr = JSON.parse(json) as Array<string>;

        //     const result = tags.find((tag) => arr.includes(tag));
        //     return !!result;
        //   })
        filterSearch(state.events.personalEvents, search)
      : filterSearch(state.events.events, search);

  const sortedEvents = [...filteredEvents].sort(
    (a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime()
  );

  const groupedEvents = groupBy(sortedEvents, (event) =>
    moment(event.startsAt).format("YYYY-MM-DD")
  );
  console.log(groupedEvents);

  const sortedOtherEvents = [...otherEvents].sort(
    (a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime()
  );

  const groupedOtherEvents = groupBy(sortedOtherEvents, (event) =>
    moment(event.startsAt).format("YYYY-MM-DD")
  );
  // console.log();

  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = React.useState<string | null>(null);

  const openEvent = (uid: string) => {
    console.log("opening event ", uid);
    setSelectedEvent(uid);
    setOpen(true);
  };

  return (
    <div className={block()} key={location.search}>
      <h1
        style={{
          color: "rgb(34, 88, 161)",
          fontFamily: '"Open Sans", sans-serif',
          fontWeight: 600,
        }}
      >
        Список мероприятий
      </h1>
      {!!tags?.length && showPersonal && !state.events.eventsForModule?.length && (
        <div className={block("search")}>
          <Brick size={0} plusHalf />
          <span>
            Подборка по вашим тегам:{" "}
            <span
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={() => setShowPersonal(!showPersonal)}
            >
              {showPersonal ? "отключить" : "включить"}
            </span>
          </span>
          <Brick size={0} plusHalf />
          {showPersonal && (
            <TagsInput
              value={tags}
              inputProps={{
                placeholder: "Новый тег",
              }}
              onChange={(tags) => setTags(tags)}
              renderTag={(props) => (
                <div style={{ marginBottom: "6px" }}>
                  <Tag
                    name={props.tag.title}
                    type={props.tag.type}
                    // onRemove={() => props.onRemove(props.key)}
                  />
                </div>
              )}
              renderLayout={(tags, input) => <TagField>{tags}</TagField>}
            />
          )}
        </div>
      )}
      {/* <Brick size={3} />
      <span>
        Сортировка: <u>по дате</u>
      </span>{" "} */}
      {module ? (
        !!state.events.eventsForModule.length ? (
          <span className={block("module-text")}>
            Модуль «{(moduleTypeLocal as any)[moduleKey]}»
            <Link
              to="/events"
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                marginLeft: "8px",
              }}
              onClick={() => setShowModule(false)}
            >
              {"Все события"}
            </Link>
          </span>
        ) : (
          <span className={block("module-text")}>
            События модуля {(moduleTypeLocal as any)[moduleKey]} не найдены
            <br />
            <br />
            Все события:
          </span>
        )
      ) : null}
      <Brick size={3} />
      <div className={block("module-text")} style={{ width: "80%" }}>
        <TextField
          label="Поиск"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: "80%" }}
        />
      </div>
      <Brick size={3} />
      {state.auth.isAdmin ? (
        <Link
          to="/events/add"
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
      <motion.div
        className={block("list")}
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        {Object.keys(groupedEvents).map((key, idx) => {
          const date = moment(key);

          const events = groupedEvents[key];

          return (
            <motion.div className={block("group")} variants={group}>
              {idx > 0 && <div className={block("list-separator")} />}
              <div className={block("group-date")}>
                {date.format("D MMMM")}
                <span className={block("group-date-day")}>
                  {date.format("dddd")}
                </span>
              </div>
              <Brick size={2} />
              <div className={block("cards")}>
                <AnimatePresence>
                  {events.map((event) => (
                    <motion.div
                      variants={item}
                      onClick={() => openEvent(event.uid)}
                    >
                      <EventCard
                        {...event}
                        tags={[]}
                        id={event.uid}
                        key={event.uid}
                        url={event.link}
                        date={new Date(event.startsAt)}
                        timeRange={
                          new Date(event.startsAt)
                            .toLocaleTimeString()
                            .substr(0, 5) +
                          " — " +
                          new Date(event.endsAt)
                            .toLocaleTimeString()
                            .substr(0, 5)
                        }
                      />
                      <Brick size={3} />
                    </motion.div>
                  ))}
                  {/* {idx + 1 < Object.keys(groupedEvents).length && (
                  <div className={block("list-separator")} />
                )} */}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <Brick size={2} />
      {!!groupedOtherEvents.lenght && (
        <>
          <h1>Еще мероприятия не из ваших тегов:</h1>
          {Object.keys(groupedOtherEvents).map((key) => {
            const date = moment(key);

            const events = groupedOtherEvents[key];

            return (
              <>
                <span className={block("group-date")}>
                  {date.format("D MMMM, dddd")}
                </span>
                <Brick size={2} />
                {events.map((event) => (
                  <div onClick={() => openEvent(event.uid)}>
                    <EventCard
                      {...event}
                      tags={[]}
                      id={event.uid}
                      key={event.uid}
                      date={new Date(event.startsAt)}
                      timeRange={
                        new Date(event.startsAt)
                          .toLocaleTimeString()
                          .substr(0, 5) +
                        " — " +
                        new Date(event.endsAt).toLocaleTimeString().substr(0, 5)
                      }
                    />
                    <Brick size={3} />
                  </div>
                ))}
              </>
            );
          })}
        </>
      )}
      <Brick size={5} />
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={block("modal")}
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* <div className={block("modal-wrapper")}> */}
        <div className={block("window")}>
          <AnimatePresence>
            {selectedEvent && (
              <motion.div
                variants={item}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <EventModal id={selectedEvent} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Modal>
    </div>
  );
}
