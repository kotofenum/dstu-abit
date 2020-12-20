import React, { useEffect, useState } from "react";
import { cn } from "../../services/helpers/classname";
import { EducationProperties } from "../../components/EducationProperties";
import { EducationRelation } from "../../components/EducationRelation";
import { EducationSummary } from "../../components/EducationSummary";

import "./styles.scss";
import { useOvermind } from "../../store";
import { useRouteMatch } from "react-router-dom";

export const programDegree = {
  // TODO: нужно как-то по-другому решить
  bachelor: "бакалавриат",
  certified: "специалитет",
  master: "магистратура",
};

const block = cn("program-page");

export function ProgramPage() {
  const { state, actions } = useOvermind();

  const { params } = useRouteMatch();
  const programId = (params as any)["id"] as string;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const job = async () => {
      setLoading(true);
      await actions.programs.getProgram(programId);
      setLoading(false);
    };

    job();
  }, [actions.programs, programId]);

  const program = state.programs.currentProgram;

  useEffect(() => {
    if (program) {
      document.title = `${program.title} | Абитуриент ДГТУ`;
    }
  }, [program]);

  const form = (() => {
    const forms = [];

    if (program?.fullTimeForm) {
      forms.push("очная");
    }

    if (program?.mixedForm) {
      forms.push("очно-заочная");
    }

    if (program?.extramuralForm) {
      forms.push("заочная");
    }
    return forms.join(", ");
  })();

  return !loading && program ? (
    <div className={block()}>
      <EducationSummary
        uid={program.uid}
        title={program.title}
        type={EducationSummary.type.program}
        relations={
          <>
            <EducationRelation
              id={program.specialty.uid}
              type={EducationSummary.type.specialty}
              code={program.specialty.code}
              name={program.specialty.title}
            />
            <EducationRelation
              id={program.specialty.major.uid}
              type={EducationSummary.type.major}
              code={program.specialty.major.code}
              name={program.specialty.major.title}
            />
          </>
        }
      />
      <EducationProperties
        list={[
          {
            name: "Форма обучения",
            value: form,
          },
          { name: "Уровень образования", value: programDegree[program.degree] },
          { name: "Срок обучения", value: program.studyPeriod },
          { name: "Языки обучения", value: program.languages },
        ]}
      />
      {program.description && (
        <div className={block("text-block")}>
          <span className={block("text-block-title")}>Описание программы</span>
          <span
            className={block("text-block-content")}
            dangerouslySetInnerHTML={{ __html: program.description }}
          />
        </div>
      )}
      {program.advantages && (
        <div className={block("text-block")}>
          <span className={block("text-block-title")}>
            Преимущества программы
          </span>
          <span
            className={block("text-block-content")}
            dangerouslySetInnerHTML={{ __html: program.advantages }}
          ></span>
        </div>
      )}
      {program.partners && (
        <div className={block("text-block")}>
          <span className={block("text-block-title")}>
            Организации-партнеры
          </span>
          <span
            className={block("text-block-content")}
            dangerouslySetInnerHTML={{ __html: program.partners }}
          ></span>
        </div>
      )}
      {program.projectsAndPractices && (
        <div className={block("text-block")}>
          <span className={block("text-block-title")}>Проекты и практики</span>
          <span
            className={block("text-block-content")}
            dangerouslySetInnerHTML={{ __html: program.projectsAndPractices }}
          ></span>
        </div>
      )}
      {program.leadProfessors && (
        <div className={block("text-block")}>
          <span className={block("text-block-title")}>
            Преподаватели-флагманы
          </span>
          <span
            className={block("text-block-content")}
            dangerouslySetInnerHTML={{ __html: program.leadProfessors }}
          ></span>
        </div>
      )}
      {program.graduates && (
        <div className={block("text-block")}>
          <span className={block("text-block-title")}>
            Известные выпускники программы
          </span>
          <span
            className={block("text-block-content")}
            dangerouslySetInnerHTML={{ __html: program.graduates }}
          ></span>
        </div>
      )}
      {program.unit && (
        <div className={block("text-block")}>
          <span className={block("text-block-title")}>
            Структурное подразделение
          </span>
          <span
            className={block("text-block-content")}
            dangerouslySetInnerHTML={{ __html: program.unit }}
          ></span>
        </div>
      )}
      {program.supervisor && (
        <div className={block("text-block")}>
          <span className={block("text-block-title")}>
            Руководитель программы
          </span>
          <span
            className={block("text-block-content")}
            dangerouslySetInnerHTML={{ __html: program.supervisor }}
          ></span>
        </div>
      )}
    </div>
  ) : null;
}
