import React, { useEffect } from "react";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";

import { Brick } from "../../components/utility/Brick";
import { EducationCode } from "../../components/EducationCode";

import "./styles.scss";
import { Link } from "react-router-dom";

const block = cn("major-list-page");

export function MajorListPage() {
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.majors.getMajors();
  }, []);

  return (
    <div className={block()}>
      <span className={block("heading")}>
        Список{" "}
        <span className={block("underline")}>
          укрупненных групп направлений подготовки
        </span>
      </span>
      <Brick size={8} />
      <div className={block("items")}>
        {state.majors.list.map((major) => (
          <Link to={`/education/majors/${major.uid}`} key={major.uid} className={block("item")}>
            <EducationCode code={major.code} />
            <span className={block("item-title")}>{major.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
