import React from "react";
import { cn } from "../../services/helpers/classname";
import { competitions } from "./data";

import "./styles.scss";

const block = cn("competitions-page");

export function CompetitionsPage() {
  return (
    <div className={block()}>
      <span className={block("heading")}>
        План проведения интеллектуальных соревнований ДГТУ
      </span>
      {competitions.map((group) => (
        <div className={block("group")} key={group.date}>
          <span className={block("group-name")}>{group.date}</span>
          <div className={block("list")}>
            {group.data.map((competition) =>
              competition.link ? (
                <a
                  className={block("competition-block")}
                  key={competition.name}
                  href={competition.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={block("competition-title")}>
                    {competition.name}
                  </span>
                  <span className={block("competition-audience")}>
                  Целевая аудитория: {competition.audience}
                  </span>
                </a>
              ) : (
                <div
                  className={block("competition-block")}
                  key={competition.name}
                >
                  <span className={block("competition-title")}>
                    {competition.name}
                  </span>
                  <span className={block("competition-audience")}>
                  Целевая аудитория: {competition.audience}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
