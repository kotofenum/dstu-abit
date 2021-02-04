import React from "react";
import { cn } from "../../../../services/helpers/classname";

import "./styles.scss";

const block = cn("achievement-card");

interface AchievementCardProps {
  name: string;
}

export function AchievementCard(props: AchievementCardProps) {
  return (
    <div className={block()}>
      <span className={block("name")}>{props.name}</span>
      <span className={block("status")}>Заполнено</span>
    </div>
  );
}
