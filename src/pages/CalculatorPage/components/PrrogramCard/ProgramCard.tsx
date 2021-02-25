import React from "react";
import { cn } from "../../../../services/helpers/classname";

import "./styles.scss";

const block = cn("results-program-card");

export interface IProgramSubject {
  title: string;
  minScore: number;
  scored: boolean;
}

interface IProgramCardProps {
  title: string;
  requiredSubjects: IProgramSubject[];
  optionalSubjects: IProgramSubject[];
  minScore: number | null;
}

export function ProgramCard(props: IProgramCardProps) {
  return (
    <div className={block()}>
      <span className={block("title")}>{props.title}</span>
      {props.minScore && (
        <span className={block("min-score")}>
          Проходной балл 2020 г.: {props.minScore}
        </span>
      )}
      <div className={block("required")}>
        <span className={block("subheading")}>Обязательные предметы</span>
        {props.requiredSubjects.map((subject) => (
          <span className={block("subject", { scored: subject.scored })}>
            {subject.title} ({subject.minScore})
          </span>
        ))}
      </div>
      <div className={block("optional")}>
        <span className={block("subheading")}>Один предмет по выбору</span>
        {props.optionalSubjects.map((subject) => (
          <span className={block("subject", { scored: subject.scored })}>
            {subject.title} ({subject.minScore})
          </span>
        ))}
      </div>
    </div>
  );
}
