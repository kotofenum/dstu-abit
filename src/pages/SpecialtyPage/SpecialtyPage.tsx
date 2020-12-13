import React from "react";
import { cn } from "../../services/helpers/classname";
import { EducationProperties } from "../../components/EducationProperties";
import { EducationRelation } from "../../components/EducationRelation";
import { EducationSummary } from "../../components/EducationSummary";

import "./styles.scss";
import { Brick } from "../../components/utility/Brick";
import { EducationCode } from "../../components/EducationCode";

const block = cn("specialty-page");

export function SpecialtyPage() {
  return (
    <div className={block()}>
      <EducationSummary
        title="Информационные системы и технологии"
        type={EducationSummary.type.specialty}
        relations={
          <EducationRelation
            type={EducationSummary.type.major}
            code="09.00.00"
            name="Информатика и вычислительная техника"
          />
        }
      />
      <EducationProperties list={[{ name: "Код", value: "09.03.02" }]} />
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
  );
}
