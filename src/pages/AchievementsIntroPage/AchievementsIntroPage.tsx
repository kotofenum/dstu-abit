import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { AchievementCard } from "./components/AchievementCard";

import "./styles.scss";

const block = cn("achievements-intro-page");

export function AchievementsIntroPage() {
  const [achievements, setAchievements] = useState<
    { name: string; reward: number }[]
  >([]);

  useEffect(() => {
    const achievements = localStorage.getItem("ach") || "{}";
    const arr = JSON.parse(achievements) || {};
    const ar = Object.keys(arr).map((key) => ({
      name: arr[key].label,
      reward: arr[key].reward,
    }));
    setAchievements(ar);
  }, []);

  return (
    <div className={block()}>
      <span className={block("heading")}>
        Предварительный учет индивидуальных достижений
      </span>
      {achievements?.length ? (
        <>
        <div className={block("cards")}>
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.name} name={achievement.name} reward={achievement.reward} />
          ))}
        </div>
        <span>Предварительная сумма баллов: {Math.min(achievements.reduce((acc, curr) => acc + curr.reward, 0), 10)}</span>
        </>
      ) : (
        <span>Нет заполненных индивидуальных достижений.</span>
      )}
      <div className={block("actions")}>
        <Link to="/achievements/category">
          <Button variant="contained" color="primary">
            Добавить достижение
          </Button>
        </Link>
        {/* <Button
          variant="outlined"
          color="primary"
          disabled={!achievements?.length}
        >
          Оценить индивидуальные достижения
        </Button> */}
      </div>
    </div>
  );
}
