import React, { useCallback, useEffect, useState } from "react";
import { cn } from "../../services/helpers/classname";

import { ReactComponent as MapIcon } from "../../assets/svg/map.svg";
import { ReactComponent as EducationIcon } from "../../assets/svg/school.svg";
import { ReactComponent as EventsIcon } from "../../assets/svg/events.svg";
import { ReactComponent as UgnIcon } from "../../assets/svg/ugn.svg";

import "./styles.scss";
import { Link, useRouteMatch } from "react-router-dom";

const block = cn("menu");

export function Menu() {
  const isWelcome = useRouteMatch("/welcome"); // TODO: сделать по-другому
  const isEducation = useRouteMatch("/education");
  const isEvents = useRouteMatch("/events");

  const [isInactive, setIsInactive] = useState<boolean>(true);
  const [timeoutId, setTimeoutId] = useState<number | undefined>();

  const startTimeout = useCallback(() => {
    const timeout = window.setTimeout(() => setIsInactive(true), 3000);
    setTimeoutId(timeout);
  }, []);

  const stopTimeout = useCallback(() => {
    clearTimeout(timeoutId);
    setTimeoutId(undefined);
  }, [timeoutId]);

  return (
    <div
      className={block({ inactive: isInactive })}
      onMouseEnter={() => {
        setIsInactive(false);
        stopTimeout();
      }}
      onMouseLeave={() => startTimeout()}
    >
      <Link
        to="/welcome"
        className={block("menu-item", { active: !!isWelcome })}
      >
        <MapIcon />
        <span className={block("menu-name")}>Навигация</span>
      </Link>
      {/* <Link
        to="/welcome"
        className={block("menu-item", { active: !!isEducation })}
      >
        <EducationIcon />
        <span className={block("menu-name")}>Образование</span>
      </Link> */}
      <Link to="/events" className={block("menu-item", { active: !!isEvents })}>
        <EventsIcon />
        <span className={block("menu-name")}>Мероприятия</span>
      </Link>
      <Link to="/education/programs" className={block("menu-item", { active: !!isEducation })}>
        <UgnIcon />
        <span className={block("menu-name")}>База знаний</span>
      </Link>
    </div>
  );
}
