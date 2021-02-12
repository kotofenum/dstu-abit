import React from "react";
import { cn } from "../../../../services/helpers/classname";

import "./styles.scss";

const block = cn("results-program-card");

interface IProgramSubject {
  title: string;
  minScore: number;
  scored: boolean;
}

interface IProgramCardProps {
  title: string;
  requiredSubjects: IProgramSubject[];
  optionalSubjects: IProgramSubject[];
  minScore: number;
}

export function ProgramCard(props: IProgramCardProps) {
  return (
    <div className={block()}>
      <span className={block("title")}>{props.title}</span>
      <span className={block("min-score")}>
        Проходной балл 2019 г.: {props.minScore}
      </span>
      <div className={block("required")}>
        <span className={block("subheading")}>Обязательные предметы</span>
        {props.requiredSubjects.map((subject) => (
          <span className={block("subject")}>
            {subject.title} ({subject.minScore}) {subject.scored ? "+" : "-"}
          </span>
        ))}
      </div>
      <div className={block("optional")}>
        <span className={block("subheading")}>Один предмет по выбору</span>
        {props.optionalSubjects.map((subject) => (
          <span className={block("subject")}>
            {subject.title} ({subject.minScore}) {subject.scored ? "+" : "-"}
          </span>
        ))}
      </div>
    </div>
  );
}
