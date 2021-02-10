import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import React, { useState } from "react";
import { cn } from "../../../../services/helpers/classname";

import './styles.scss'

const block = cn("stage-block");

const stages = [
  "Школьный этап",
  "Районный (муниципальный) этап",
  "Региональный этап",
  "Заключительный этап",
];

const altStages = [
  "Районный (муниципальный) этап",
  "Региональный этап",
  "Республиканский (федеральный) этап",
];

interface IStageBlockProps {
  type: 0 | 1;
}

export function StageBlock(props: IStageBlockProps) {
  const [competitionStage, setCompetitionStage] = useState<number | null>(null);

  const finalStages = props.type === 1 ? altStages : stages;

  return (
    <div className={block()}>
      <FormLabel className={block("form-label").toString()} component="legend">
        Выберите этап олимпиады
      </FormLabel>
      <RadioGroup
        value={competitionStage}
        onChange={(_, value) => setCompetitionStage(Number(value))}
      >
        {finalStages.map((stage, idx) => (
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label={stage}
            value={idx + 1}
          />
        ))}
      </RadioGroup>
    </div>
  );
}
