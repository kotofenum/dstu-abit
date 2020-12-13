import React from "react";
import { cn } from "../../services/helpers/classname";

import "./styles.scss";

const block = cn("education-properties");

interface IEducationPropertiesProps {
  list: { name: string; value: string }[];
}

export function EducationProperties({ list }: IEducationPropertiesProps) {
  return (
    <div className={block()}>
      {list.map((property) => (
        <div className={block("property")}>
          {property.name}: {property.value}
        </div>
      ))}
    </div>
  );
}
