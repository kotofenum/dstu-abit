import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import React, { useState } from "react";
import { cn } from "../../../../services/helpers/classname";

import './styles.scss'

const block = cn("subject-block");

const subjects = [
  "Информатика",
  "Математика",
  "Английский язык",
  "Астрономия",
  "Биология",
  "География",
  "История",
  "Китайский язык",
  "Литература",
  "Немецкий язык",
  "Немецкий язык",
  "Обществознание",
  "Право",
  "Русский язык",
  "Физика",
  "Французский язык",
  "Химия",
  "Экология",
  "Экономика",
];

export function SubjectBlock() {
  const [competitionSubject, setCompetitionSubject] = useState<number | null>(
    null
  );

  return (
    <div className={block()}>
      <FormLabel className={block("form-label").toString()} component="legend">
        Выберите предмет
      </FormLabel>
      <RadioGroup
        value={competitionSubject}
        onChange={(_, value) => setCompetitionSubject(Number(value))}
      >
        {subjects.map((subject, idx) => (
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label={subject}
            value={idx + 1}
          />
        ))}
      </RadioGroup>
    </div>
  );
}
