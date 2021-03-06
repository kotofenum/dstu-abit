import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import React, { useState } from "react";
import { cn } from "../../../../services/helpers/classname";

import "./styles.scss";

const block = cn("list-block");

const defaultList = [
  "Мероприятие 1",
  "Мероприятие 2",
  "Мероприятие 3",
  "Мероприятие 4",
];

interface IListBlockProps {
  list?: string[];
}

export function ListBlock(props: IListBlockProps) {
  const [competitionListItem, setCompetitionListItem] = useState<number | null>(
    null
  );

  return (
    <div className={block()}>
      <FormLabel className={block("form-label").toString()} component="legend">
        Выберите мероприятие
      </FormLabel>
      <RadioGroup
        value={competitionListItem}
        onChange={(_, value) => setCompetitionListItem(Number(value))}
      >
        {(props.list || defaultList).map((res, idx) => (
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
