import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { achiemeventCategories } from "./categories";

import "./styles.scss";

const block = cn("achievement-category-page");

export function AchievementCategoryPage() {
  const [achievementCategory, setAchievementCategory] = useState<number | null>(
    null
  );

  const [disabled, setDisabled] = useState<number[]>([]);

  useEffect(() => {
    const achievements = localStorage.getItem("ach") || "{}";
    const arr = JSON.parse(achievements) || {};

    const disabledCategories = Object.keys(arr).map((key) => Number(key));
    setDisabled(disabledCategories);
  }, []);

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
            Выберете категорию достижения
          </FormLabel>
          <RadioGroup
            value={achievementCategory}
            onChange={(_, value) => setAchievementCategory(Number(value))}
          >
            {achiemeventCategories.map((category) => (
              <FormControlLabel
                className={block("radio").toString()}
                control={<Radio className={block("radio-icon").toString()} />}
                key={category.value}
                label={category.label}
                value={category.value}
                disabled={disabled.includes(category.value)}
              />
            ))}
          </RadioGroup>
          {/* <FormHelperText></FormHelperText> */}
        </FormControl>
        <div className={block("actions")}>
          <Link to={`/achievements/category/${achievementCategory}/form`}>
            <Button
              variant="contained"
              color="primary"
              disabled={!achievementCategory}
            >
              Далее
            </Button>
          </Link>
          <Link to="/achievements/intro">
            <Button variant="outlined" color="primary">
              Вернуться к заполненным достижениям
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
