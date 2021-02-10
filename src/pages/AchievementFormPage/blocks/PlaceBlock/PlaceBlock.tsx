import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import React, { useState } from "react";
import { cn } from "../../../../services/helpers/classname";

import './styles.scss'

const block = cn("place-block");

const places = ["участник", "I место", "II место", "III место"];

export function PlaceBlock() {
  const [competitionPlace, setCompetitionPlace] = useState<number | null>(null);

  return (
    <div className={block()}>
      <FormLabel className={block("form-label").toString()} component="legend">
        Выберите результат
      </FormLabel>
      <RadioGroup
        value={competitionPlace}
        onChange={(_, value) => setCompetitionPlace(Number(value))}
      >
        {places.map((res, idx) => (
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label={res}
            value={idx + 1}
          />
        ))}
      </RadioGroup>
    </div>
  );
}
