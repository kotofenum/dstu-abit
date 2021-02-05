import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../services/helpers/classname";

import "./styles.scss";

const block = cn("achievement-competition-page");

export function AchievementCompetitionPage() {
  const [competitionCategory, setCompetitionCategory] = useState<number | null>(
    null
  );

  return (
    <div className={block()}>
      <span className={block("heading")}>
        Добавление индивидуального достижения
      </span>
      <div className={block("content")}>
        <FormControl component="fieldset">
          <FormLabel
            className={block("form-label").toString()}
            component="legend"
          >
            Выберите тип олимпиады
          </FormLabel>
          <RadioGroup
            value={competitionCategory}
            onChange={(_, value) => setCompetitionCategory(Number(value))}
          >
            <FormControlLabel
              className={block("radio").toString()}
              control={<Radio className={block("radio-icon").toString()} />}
              label="Всероссийская олимпиада школьников 2017– 2021 гг."
              value={1}
            />
            <FormControlLabel
              className={block("radio").toString()}
              control={<Radio className={block("radio-icon").toString()} />}
              label="Олимпиада из перечня Министерства науки и высшего образования 2017– 2021 гг."
              value={2}
            />
          </RadioGroup>
          {/* <FormHelperText></FormHelperText> */}
        </FormControl>
        <div className={block("actions")}>
          <Link to={`/achievements/category/${0}/form`}>
            <Button
              variant="contained"
              color="primary"
              disabled={!competitionCategory}
            >
              Далее
            </Button>
          </Link>
          {/* <Link to="/achievements/intro">
          <Button variant="outlined" color="primary">
            Вернуться к заполненным достижениям
          </Button>
        </Link> */}
        </div>
      </div>
    </div>
  );
}
