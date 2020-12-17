import React, { ReactNode } from "react";
import { cn } from "../../../services/helpers/classname";

import './styles.scss';

const block = cn("option-block");

enum OptionBlockColor {
  orange = "orange",
  purple = "purple",
  blue = "blue",
}

interface IOptionBlockProps {
  name: string;
  icon: ReactNode;
  color: OptionBlockColor;
}

function OptionBlock({ name, icon, color }: IOptionBlockProps) {
  return (
    <div className={block({ [color]: true })}>
      <div className={block("icon")}>{icon}</div>
      <div className={block("name")}>{name}</div>
    </div>
  );
}

OptionBlock.color = OptionBlockColor;

export default OptionBlock;
