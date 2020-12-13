import React, { PropsWithChildren } from "react";
import { cn } from "../../../../services/helpers/classname";
import { Tag } from "../Tag/Tag";

import "./styles.scss";

const block = cn("tag-field");

interface ITagFieldProps {
  fields?: string[];
}

export function TagField({ fields, children }: PropsWithChildren<ITagFieldProps>) {
  return (
    <div className={block()}>
      {/* <Tag name="МКМТ" />
      <Tag name="Разработка" /> */}
      {children}
    </div>
  );
}
