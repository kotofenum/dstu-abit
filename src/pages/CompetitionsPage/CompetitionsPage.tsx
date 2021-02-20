import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";
import { competitions } from "./data";
import groupBy from "lodash.groupby";

import "./styles.scss";
import { CompetitionGroup } from "../../store/graphql-global-types";
import { Competitions_competitions } from "../../store/competitions/effects/gql/graphql-types/Competitions";

import { ReactComponent as EditIcon } from "../../assets/svg/edit.svg";

const block = cn("competitions-page");

const groupWeight = {
  [CompetitionGroup.january]: 0,
  [CompetitionGroup.february]: 1,
  [CompetitionGroup.march]: 2,
  [CompetitionGroup.april]: 3,
  [CompetitionGroup.may]: 4,
  [CompetitionGroup.other]: 5,
};

export const groupLocale = {
  [CompetitionGroup.january]: "Январь",
  [CompetitionGroup.february]: "Февраль",
  [CompetitionGroup.march]: "Март",
  [CompetitionGroup.april]: "Апрель",
  [CompetitionGroup.may]: "Май",
  [CompetitionGroup.other]: "В течение учебного года",
};

export function CompetitionsPage() {
  const history = useHistory();
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.competitions.getCompetitions();
  }, [actions.competitions]);

  const groupedCompetitions = groupBy(
    state.competitions.competitions,
    (competition) => competition.group
  );

  const groupsArray = Object.keys(groupedCompetitions).reduce(
    (
      result: {
        date: string;
        data: Competitions_competitions[];
      }[],
      key
    ) => [...result, { date: key, data: groupedCompetitions[key] }],
    []
  );

  const sortedCompetitionGroups = groupsArray.sort(
    (a, b) =>
      groupWeight[a.date as keyof typeof CompetitionGroup] +
      groupWeight[b.date as keyof typeof CompetitionGroup]
  );

  return (
    <div className={block()}>
      <span className={block("heading")}>
        План проведения интеллектуальных соревнований ДГТУ
      </span>
      <div className={block("actions")}>
        {state.auth.isAdmin ? (
          <Link
            to="/competitions/add"
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
      </div>
      {sortedCompetitionGroups.map((group) => (
        <div className={block("group")} key={group.date}>
          <span className={block("group-name")}>
            {groupLocale[group.date as keyof typeof CompetitionGroup]}
          </span>
          <div className={block("list")}>
            {group.data.map((competition) =>
              competition.link ? (
                <a
                  className={block("competition-block")}
                  key={competition.uid}
                  href={competition.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={block("competition-title")}>
                    {competition.title}
                    {state.auth.isAdmin && (
                      <div
                        className={block("icon")}
                        onClick={(e) => {
                          e.preventDefault();
                          history.push(`/competitions/${competition.uid}/edit`);
                        }}
                      >
                        <EditIcon />
                      </div>
                    )}
                  </span>
                  <span className={block("competition-date")}>
                    {competition.date}
                  </span>
                  <span className={block("competition-audience")}>
                    Целевая аудитория: {competition.target}
                  </span>
                </a>
              ) : (
                <div
                  className={block("competition-block")}
                  key={competition.title}
                >
                  <span className={block("competition-title")}>
                    {competition.title}
                    {state.auth.isAdmin && (
                      <div
                        className={block("icon")}
                        onClick={(e) => {
                          e.preventDefault();
                          history.push(`/competitions/${competition.uid}/edit`);
                        }}
                      >
                        <EditIcon />
                      </div>
                    )}
                  </span>
                  <span className={block("competition-date")}>
                    {competition.date}
                  </span>
                  <span className={block("competition-audience")}>
                    Целевая аудитория: {competition.target}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
