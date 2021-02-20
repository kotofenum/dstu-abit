import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";
import { CompetitionGroup } from "../../store/graphql-global-types";
import { groupLocale } from "../CompetitionsPage/CompetitionsPage";

import "./styles.scss";

const block = cn("add-guidance-page");

export function AddCompetitionPage() {
  const { actions } = useOvermind();
  const history = useHistory();

  const [title, setTitle] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [target, setTarget] = useState<string | null>(null);
  const [group, setGroup] = useState<CompetitionGroup | null>(null);
  const [link, setLink] = useState<string | null>(null);

  const addCompetition = useCallback(async () => {
    await actions.competitions.addCompetition({
      title: title!,
      date: date!,
      target: target!,
      group: group!,
      link: link!,
    });

    history.push(`/competitions`);
  }, [actions.competitions, date, group, history, link, target, title]);

  return (
    <div className={block()}>
      <span className={block("heading")}>Создание события</span>
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
        <Button variant="outlined" color="primary" onClick={addCompetition}>
          Добавить
        </Button>
      </div>
    </div>
  );
}
