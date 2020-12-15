import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { EducationType } from "../../types/EducationType";
import { EducationCode } from "../EducationCode";

import "./styles.scss";

const block = cn("education-relation");

interface IEducationRelationProps {
  type: EducationType;
  code: string;
  name: string;
}

export function EducationRelation({
  type,
  code,
  name,
}: IEducationRelationProps) {
  const key = Object.keys(EducationType).find(
    // TODO: get rid of it
    (key) => EducationType[key as keyof typeof EducationType] === type
  ) as keyof typeof EducationType;

  const mapping = {
    major: 'majors',
    specialty: 'specialties',
    program: 'programs'
  }

  return (
    <Link to={`/education/${mapping[key]}/1`} className={block()}>
      <span className={block("type")}>{type}:</span>
      <EducationCode code={code} />
      <span className={block("name", { ...(key && { [key]: true }) })}>
        {name}
      </span>
    </Link>
  );
}
