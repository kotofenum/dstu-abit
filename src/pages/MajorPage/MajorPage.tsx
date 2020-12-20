import React, { useEffect, useState } from "react";
import { cn } from "../../services/helpers/classname";
import { EducationProperties } from "../../components/EducationProperties";
import { EducationRelation } from "../../components/EducationRelation";
import { EducationSummary } from "../../components/EducationSummary";

import { Brick } from "../../components/utility/Brick";
import { EducationCode } from "../../components/EducationCode";

import "./styles.scss";
import { useOvermind } from "../../store";
import { Link, useRouteMatch } from "react-router-dom";

const block = cn("major-page");

export function MajorPage() {
  const { state, actions } = useOvermind();

  const { params } = useRouteMatch();
  const majorId = (params as any)["id"] as string;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const job = async () => {
      if (majorId) {
        setLoading(true);
        await actions.majors.getMajor(majorId);
        await actions.specialties.getSpecialtiesOfMajor(majorId);
        setLoading(false);
      }
    };

    job();
  }, [actions.majors, actions.specialties, majorId]);

  const major = state.majors.currentMajor;

  useEffect(() => {
    if (major) {
      document.title = `${major.title} | Абитуриент ДГТУ`;
    }
  }, [major]);

  return !loading && major ? (
    <div className={block()}>
      <EducationSummary
        uid={major.uid}
        title={major.title}
        type={EducationSummary.type.major}
        // relations={<span>Количество бюджетных мест: {major.fundedPlaces}</span>}
        relations={<span></span>}
      />
      <EducationProperties list={[{ name: "Код", value: major.code }]} />
      <Brick size={4} />
      <span className={block("specialties-description")}>
        К данной укрупненной группе направлений подготовки относятся следующие
        направления
      </span>
      <Brick size={2} />
      {state.specialties.listOfMajor.map((specialty) => (
        <Link
          to={`/education/specialties/${specialty.uid}`}
          key={specialty.uid}
          className={block("specialty")}
        >
          <EducationCode code={specialty.code} />
          <span className={block("specialty-name")}>{specialty.title}</span>
        </Link>
      ))}
    </div>
  ) : null;
}
