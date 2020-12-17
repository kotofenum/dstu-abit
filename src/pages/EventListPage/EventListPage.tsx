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

const block = cn("event-list-page");

interface IFlattenTag {
  uid: string;
  title: string;
  type: EducationTypePlain;
}

export function EventListPage() {
  const { state, actions } = useOvermind();

  const [tags, setTags] = useState<IFlattenTag[]>([]);

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

  useEffect(() => {
    actions.events.getEvents();
    actions.tags.getMyTags();
  }, [actions.events, actions.tags]);

  const filteredEvents = tags.length
    ? // ? state.events.events.filter((event) => {
      //     const str = (event.tags as unknown) as string;
      //     var json = str.replace(/([^\[\],\s]+)/g, '"$&"');
      //     var arr = JSON.parse(json) as Array<string>;

      //     const result = tags.find((tag) => arr.includes(tag));
      //     return !!result;
      //   })
      state.events.events
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
      {/* <div className={block("search")}>
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
            <div style={{marginBottom: '6px'}}>
            <Tag
              name={props.tag.title}
              type={props.tag.type}
              // onRemove={() => props.onRemove(props.key)}
            />
            </div>
          )}
          renderLayout={(tags, input) => (
            <TagField>
              {tags}
            </TagField>
          )}
        /> */}
        {/* <Brick size={3} />
        <span>
          Сортировка: <u>по дате</u>
        </span> */}
        <Brick size={6} />
      {/* </div> */}
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
                  tags={[]}
                  id={event.uid}
                  key={event.uid}
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
