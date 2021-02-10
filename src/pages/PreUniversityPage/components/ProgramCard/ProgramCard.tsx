import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { cn } from "../../../../services/helpers/classname";

import "./styles.scss";

const block = cn("program-card");

interface IProgramCardProps {
  title: string;
  description: string;
  selectedProgram: string | null;
  onSelect: (title: string) => void;
}

export function ProgramCard(props: IProgramCardProps) {
  const isSelected = props.selectedProgram === props.title;

  return (
    <div
      key={props.title}
      className={block({ selected: isSelected })}
      onClick={() => props.onSelect(props.title)}
    >
      <span className={block("title")}>{props.title}</span>
      <AnimatePresence>
        {isSelected && (
          <motion.span
            className={block("description")}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {props.description}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
