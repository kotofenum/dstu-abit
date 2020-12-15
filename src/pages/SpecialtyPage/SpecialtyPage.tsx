import React, { useEffect } from "react";
import { cn } from "../../services/helpers/classname";
import { EducationProperties } from "../../components/EducationProperties";
import { EducationRelation } from "../../components/EducationRelation";
import { EducationSummary } from "../../components/EducationSummary";

import "./styles.scss";
import { Brick } from "../../components/utility/Brick";
import { EducationCode } from "../../components/EducationCode";
import { useOvermind } from "../../store";
import { useRouteMatch } from "react-router-dom";
import { specialty } from "../../store/specialties/effects/gql/queries";

const block = cn("specialty-page");

export function SpecialtyPage() {
  const { state, actions } = useOvermind();

  const { params } = useRouteMatch();
  const specialtyId = (params as any)["id"] as string;

  useEffect(() => {
    actions.specialties.getSpecialty(specialtyId);
  }, [actions.specialties, specialtyId]);

  const specialty = state.specialties.currentSpecialty;

  return specialty ? (
    <div className={block()}>
      <EducationSummary
        title={specialty.title}
        type={EducationSummary.type.specialty}
        relations={
          <EducationRelation
            id={specialty.major.uid}
            type={EducationSummary.type.major}
            code={specialty.major.code}
            name={specialty.major.title}
          />
        }
      />
      <EducationProperties list={[{ name: "Код", value: specialty.code }]} />
      <Brick size={4} />
      <span className={block("programs-description")}>
        К данному направлению относятся следующие образовательные программы
      </span>
      <Brick size={2} />
      <span className={block("program")}>
        Web-ориентированные информационно-аналитические системы
      </span>
      <span className={block("program")}>
        Интеллектуальные информационные системы в технике и технологиях
      </span>
      <span className={block("program")}>
        Информационные системы и технологии
      </span>
      <span className={block("program")}>
        Информационные системы и технологии (заочная)
      </span>
      <span className={block("program")}>
        Искусственный интеллект и математическое моделирование в информационных
        системах
      </span>
      <span className={block("program")}>
        Интеллектуальные информационные системы в технике и технологиях
      </span>
      <Brick size={4} />
      <span className={block("specialties-description")}>
        Другие направления, относящиеся к УГН «Информатика и вычислительная
        техника»
      </span>
      <Brick size={2} />
      <div className={block("specialty")}>
        <EducationCode code="09.03.01" />
        <span className={block("specialty-name")}>
          Информатика и вычислительная техника
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
