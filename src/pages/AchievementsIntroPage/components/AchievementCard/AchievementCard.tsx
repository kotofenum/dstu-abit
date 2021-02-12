import React from "react";
import { cn } from "../../../../services/helpers/classname";

import "./styles.scss";

const block = cn("achievement-card");

interface AchievementCardProps {
  name: string;
  reward?: number;
}

export function AchievementCard(props: AchievementCardProps) {
  return (
    <div className={block()}>
      <span className={block("name")}>{props.name}</span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          fontSize: "14px",
        }}
      >
        <span>
          {/* {props.reward || 0 > 0
            ? "Предварительные баллы: " + props.reward
            : null} */}
            {null}
        </span>
        <span className={block("status")}>Заполнено</span>
      </div>
    </div>
  );
}
