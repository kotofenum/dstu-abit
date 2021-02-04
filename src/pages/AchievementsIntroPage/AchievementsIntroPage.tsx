import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { AchievementCard } from "./components/AchievementCard";

import "./styles.scss";

const block = cn("achievements-intro-page");

export function AchievementsIntroPage() {
  const achievements: string[] = [
    "Осуществление волонтерской (добровольческой) деятельности",
    "Итоговое сочинение выпускников 2021 года",
  ];

  return (
    <div className={block()}>
      <span className={block("heading")}>
        Предварительный учет индивидуальных достижений
      </span>
      {achievements?.length ? (
        <div className={block("cards")}>
          {achievements.map((achievement) => (
            <AchievementCard key={achievement} name={achievement} />
          ))}
        </div>
      ) : (
        <span>Нет заполненных индивидуальных достижений.</span>
      )}
      <div className={block("actions")}>
        <Link to="/achievements/category">
          <Button variant="contained" color="primary">
            Добавить достижение
          </Button>
        </Link>
        <Button variant="outlined" color="primary" disabled={!achievements?.length}>
          Оценить индивидуальные достижения
        </Button>
      </div>
    </div>
  );
}
