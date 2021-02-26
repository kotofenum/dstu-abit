import React from "react";
import { cn } from "../../../../services/helpers/classname";
import { TagRelationType } from "../../../../store/graphql-global-types";
import { EducationType } from "../../../../types/EducationType";
import { HighlightedText } from "../HighlightedText";

import "./styles.scss";

const block = cn("autocomplete-option");

interface AutocompleteOptionProps {
  searchInput: string;
  title: string;
  type: TagRelationType;
}

export function AutocompleteOption(props: AutocompleteOptionProps) {
  return (
    <div className={block()}>
      <span className={block("title")} title={props.title}>
        <HighlightedText text={props.title} highlight={props.searchInput} />
      </span>
      <div
        className={block("type", {
          ...(props.type && { [props.type]: true }),
        })}
      >
        {EducationType[props.type]}
      </div>
    </div>
  );
}
