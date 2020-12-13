import React from "react";
import { cn } from "../../services/helpers/classname";

import "./styles.scss";

const block = cn("education-code");

interface IEducationCodeProps {
  code: string;
}

export function EducationCode({ code }: IEducationCodeProps) {
  return <span className={block()}>{code}</span>;
}
