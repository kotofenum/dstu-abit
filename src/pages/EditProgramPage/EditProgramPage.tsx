import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";

import "./styles.scss";

const block = cn("edit-program-page");

export function EditProgramPage() {
  const { state, actions } = useOvermind();
  const history = useHistory();

  const { params } = useRouteMatch();
  const programId = (params as any)["id"] as string;

  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    actions.programs.getProgram(programId);
  }, [actions.programs, programId]);

  useEffect(() => {
    const program = state.programs.currentProgram;

    if (program) {
      if (program.score) {
        setScore(program.score);
      }
    }
  }, [state.programs.currentProgram]);

  const editProgram = useCallback(async () => {
    await actions.programs.editProgram({
      uid: programId!,
      score: score!,
    });

    history.push(`/education/programs/${programId}`);
  }, [actions.programs, programId, score, history]);

  return (
    <div className={block()}>
      <span className={block("heading")}>Редактирование программы</span>
      {state.programs.currentProgram ? (
        <div className={block("form")}>
          <span>Программа "${state.programs.currentProgram.title}"</span>
          <TextField
            label="Проходной балл"
            type="number"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
          />
          <Button variant="outlined" color="primary" onClick={editProgram}>
            Сохранить
          </Button>
        </div>
      ) : null}
    </div>
  );
}
