import React, { useEffect, useState } from "react";
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

const block = cn("event-list-page");

export function EventListPage() {
  const { state, actions } = useOvermind();

  const [tags, setTags] = useState<string[]>([]);

  console.log(state.events);

  useEffect(() => {
    actions.events.getEvents();
  }, [actions.events]);

  const filteredEvents = tags.length
    ? state.events.events.filter((event) => {
        const str = (event.tags as unknown) as string;
        var json = str.replace(/([^\[\],\s]+)/g, '"$&"');
        var arr = JSON.parse(json) as Array<string>;

        const result = tags.find((tag) => arr.includes(tag));
        return !!result;
      })
    : state.events.events;

  const sortedEvents = [...filteredEvents].sort(
    (a, b) => new Date(a.startsAt).getTime() - new Date(b.startsAt).getTime()
  );

  const groupedEvents = groupBy(sortedEvents, (event) =>
    moment(event.startsAt).format("YYYY-MM-DD")
  );
  console.log(groupedEvents);

  return (
    <div className={block()}>
      <h1>Список мероприятий</h1>
      <div className={block("search")}>
        <Brick size={0} plusHalf />
        <span>Поиск по тегам:</span>
        <Brick size={0} plusHalf />
        <TagsInput
          value={tags}
          inputProps={{
            placeholder: "Новый тег",
          }}
          onChange={(tags) => setTags(tags)}
          renderTag={(props) => (
            <Tag name={props.tag} onRemove={() => props.onRemove(props.key)} />
          )}
          renderLayout={(tags, input) => (
            <TagField>
              {tags}
              {input}
            </TagField>
          )}
        />
        <Brick size={3} />
        <span>
          Сортировка: <u>по дате</u>
        </span>
        <Brick size={2} />
      </div>
      {Object.keys(groupedEvents).map((key) => {
        const date = moment(key);

        const events = groupedEvents[key];

        return (
          <>
            <span className={block("group-date")}>
              {date.format("D MMMM, dddd")}
            </span>
            <Brick size={2} />
            {events.map((event) => (
              <>
                <EventCard
                  {...event}
                  id={event.uid}
                  date={new Date(event.startsAt)}
                  timeRange={
                    new Date(event.startsAt).toLocaleTimeString().substr(0, 5) +
                    " — " +
                    new Date(event.endsAt).toLocaleTimeString().substr(0, 5)
                  }
                />
                <Brick size={3} />
              </>
            ))}
          </>
        );
      })}
      <Brick size={5} />
    </div>
  );
}
