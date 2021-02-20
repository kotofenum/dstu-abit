import { Button, TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";

import "./styles.scss";

const block = cn("add-guidance-page");

export function AddGuidancePage() {
  const { state, actions } = useOvermind();
  const history = useHistory();

  const [title, setTitle] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [link, setLink] = useState<string | null>(null);

  const addGuidance = useCallback(async () => {
    await actions.guidance.addGuidance({
      title: title!,
      date: date!,
      description: description!,
      link: link!,
    });

    history.push(`/guidance`);
  }, [actions.guidance, date, description, history, link, title]);

  return (
    <div className={block()}>
      <span className={block("heading")}>Создание события</span>
      <div className={block("form")}>
        <TextField
          label="Название мероприятия"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Дата проведения"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          label="Факультет/структурное подразделение"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Ссылка"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <Button variant="outlined" color="primary" onClick={addGuidance}>
          Добавить
        </Button>
      </div>
    </div>
  );
}
