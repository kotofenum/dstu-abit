import { Button, TextField } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";

import "./styles.scss";

const block = cn("edit-guidance-page");

export function EditGuidancePage() {
  const { state, actions } = useOvermind();
  const history = useHistory();

  const { params } = useRouteMatch();
  const guidanceId = (params as any)["id"] as string;

  const [title, setTitle] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [link, setLink] = useState<string | null>(null);

  useEffect(() => {
    actions.guidance.getGuidance(guidanceId);
  }, [actions.guidance, guidanceId]);

  useEffect(() => {
    const guidance = state.guidance.currentGuidance;

    if (guidance) {
      if (guidance.title) {
        setTitle(guidance.title);
      }
      if (guidance.date) {
        setDate(guidance.date);
      }
      if (guidance.description) {
        setDescription(guidance.description);
      }
      if (guidance.link) {
        setLink(guidance.link);
      }
    }
  }, [state.guidance.currentGuidance]);

  const editGuidance = useCallback(async () => {
    await actions.guidance.editGuidance({
      uid: guidanceId!,
      title: title!,
      date: date!,
      description: description!,
      link: link!,
    });

    history.push(`/guidance`);
  }, [actions.guidance, date, description, guidanceId, history, link, title]);

  return (
    <div className={block()}>
      <span className={block("heading")}>Редактирование события</span>
      {state.guidance.currentGuidance ? (
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
          <Button variant="outlined" color="primary" onClick={editGuidance}>
            Сохранить
          </Button>
        </div>
      ) : null}
    </div>
  );
}
