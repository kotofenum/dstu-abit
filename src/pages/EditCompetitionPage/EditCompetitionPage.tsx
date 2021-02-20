import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";
import { CompetitionGroup } from "../../store/graphql-global-types";
import { groupLocale } from "../CompetitionsPage/CompetitionsPage";

import "./styles.scss";

const block = cn("edit-competition-page");

export function EditCompetitionPage() {
  const { state, actions } = useOvermind();
  const history = useHistory();

  const { params } = useRouteMatch();
  const competitionId = (params as any)["id"] as string;

  const [title, setTitle] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [target, setTarget] = useState<string | null>(null);
  const [group, setGroup] = useState<CompetitionGroup | null>(null);
  const [link, setLink] = useState<string | null>(null);

  useEffect(() => {
    actions.competitions.getCompetition(competitionId);
  }, [actions.competitions, competitionId]);

  useEffect(() => {
    const competition = state.competitions.currentCompetition;

    if (competition) {
      if (competition.title) {
        setTitle(competition.title);
      }
      if (competition.date) {
        setDate(competition.date);
      }
      if (competition.target) {
        setTarget(competition.target);
      }
      if (competition.group) {
        setGroup(competition.group);
      }
      if (competition.link) {
        setLink(competition.link);
      }
    }
  }, [state.competitions.currentCompetition]);

  const editCompetition = useCallback(async () => {
    await actions.competitions.editCompetition({
      uid: competitionId!,
      title: title!,
      date: date!,
      target: target!,
      group: group!,
      link: link!,
    });

    history.push(`/competitions`);
  }, [actions.competitions, competitionId, title, date, target, group, link, history]);

  return (
    <div className={block()}>
      <span className={block("heading")}>Редактирование события</span>
      {state.competitions.currentCompetition ? (
        <div className={block("form")}>
          <TextField
            label="Название мероприятия"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormControl>
            <InputLabel>Временной период</InputLabel>
            <Select
              value={group}
              onChange={(e) => setGroup(e.target.value as CompetitionGroup)}
            >
              {Object.values(CompetitionGroup).map((group) => (
                <MenuItem value={CompetitionGroup[group]}>
                  {groupLocale[group]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Дата проведения"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            label="Целевая аудитория"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
          <TextField
            label="Ссылка"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <Button variant="outlined" color="primary" onClick={editCompetition}>
            Сохранить
          </Button>
        </div>
      ) : null}
    </div>
  );
}
