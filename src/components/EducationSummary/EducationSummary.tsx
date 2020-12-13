import React, { ReactNode } from "react";
import { cn } from "../../services/helpers/classname";
import { EducationType } from "../../types/EducationType";

import "./styles.scss";

const block = cn("education-summary");

interface IEducationSummaryProps {
  title: string;
  type: EducationType;
  relations: ReactNode;
}

function EducationSummary({ title, type, relations }: IEducationSummaryProps) {
  const key = Object.keys(EducationType).find(
    // TODO: get rid of it
    (key) => EducationType[key as keyof typeof EducationType] === type
  );

  return (
    <div className={block()}>
      <div className={block("button")}>+ Добавить к тегам</div>
      <div className={block("summary")}>
        <div className={block("title")}>{title}</div>
        <div className={block("info")}>
          <div className={block("type", { ...(key && { [key]: true }) })}>
            {type}
          </div>
          <div className={block("relations")}>{relations}</div>
        </div>
      </div>
    </div>
  );
}

EducationSummary.type = EducationType;
export const EducationSummarySmart = EducationSummary;
