import React, { useEffect } from "react";
import { cn } from "../../services/helpers/classname";
import { EducationProperties } from "../../components/EducationProperties";
import { EducationRelation } from "../../components/EducationRelation";
import { EducationSummary } from "../../components/EducationSummary";

import { Brick } from "../../components/utility/Brick";
import { EducationCode } from "../../components/EducationCode";

import "./styles.scss";
import { useOvermind } from "../../store";
import { useRouteMatch } from "react-router-dom";

const block = cn("major-page");

export function MajorPage() {
  const { state, actions } = useOvermind();

  const { params } = useRouteMatch();
  const majorId = (params as any)["id"] as string;

  useEffect(() => {
    actions.majors.getMajor(majorId);
  }, [actions.majors, majorId]);

  const major = state.majors.currentMajor;

  return major ? (
    <div className={block()}>
      <EducationSummary
        title={major.title}
        type={EducationSummary.type.major}
        relations={
          <span>
            Количество бюджетных мест: {major.fundedPlaces}
          </span>
        }
      />
      <EducationProperties
        list={[{ name: "Код", value: major.code }]}
      />
      <Brick size={4} />
      <span className={block("specialties-description")}>
        К данной укрупненной группе направлений подготовки относятся следующие
        направления
      </span>
      <Brick size={2} />
      <div className={block("specialty")}>
        <EducationCode code="09.03.01" />
        <span className={block("specialty-name")}>
          Информатика и вычислительная техника
        </span>
      </div>
      <div className={block("specialty")}>
        <EducationCode code="09.03.02" />
        <span className={block("specialty-name")}>
          Информационные системы и технологии
        </span>
      </div>
      <div className={block("specialty")}>
        <EducationCode code="09.03.03" />
        <span className={block("specialty-name")}>Прикладная информатика</span>
      </div>
      <div className={block("specialty")}>
        <EducationCode code="09.03.04" />
        <span className={block("specialty-name")}>Программная инженерия</span>
      </div>
    </div>
  ) : null;
}
