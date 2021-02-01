import React from "react";
import escapeRegExp from "lodash.escaperegexp";
import { cn } from "../../../../services/helpers/classname";

import "./styles.scss";

const block = cn("highlighted-text");

interface HighlightedTextProps {
  text: string;
  highlight: string;
}

export function HighlightedText(props: HighlightedTextProps) {
  if (!props.highlight.trim()) {
    return <span>{props.text}</span>;
  }
  const regex = new RegExp(`(${escapeRegExp(props.highlight)})`, "gi");
  const parts = props.text.split(regex);

  return (
    <>
      {parts
        .filter((part) => part)
        .map((part, i) =>
          regex.test(part) ? (
            <mark className={block("mark")} key={i}>
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
    </>
  );
}
