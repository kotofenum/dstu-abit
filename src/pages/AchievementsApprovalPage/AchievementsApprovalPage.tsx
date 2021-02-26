import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { AchievementCard } from "../AchievementsIntroPage/components/AchievementCard";

import "./styles.scss";

const block = cn("achievements-approval-page");

export function AchievementsApprovalPage() {
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
            {achievements.map((achievement, id) => (
              <Link to={`/achievements/approval/${id}`}>
                <AchievementCard
                  key={achievement.name}
                  name={achievement.name}
                  reward={achievement.reward}
                />
              </Link>
            ))}
          </div>
        </>
      ) : (
        <span>Нет заполненных индивидуальных достижений.</span>
      )}
    </div>
  );
}
