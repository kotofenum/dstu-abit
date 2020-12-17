import React, { useEffect, useState } from "react";
import { cn } from "../../services/helpers/classname";
import { EducationProperties } from "../../components/EducationProperties";
import { EducationRelation } from "../../components/EducationRelation";
import { EducationSummary } from "../../components/EducationSummary";

import "./styles.scss";
import { Brick } from "../../components/utility/Brick";
import { EducationCode } from "../../components/EducationCode";
import { useOvermind } from "../../store";
import { Link, useRouteMatch } from "react-router-dom";
import { specialty } from "../../store/specialties/effects/gql/queries";

const block = cn("specialty-page");

export function SpecialtyPage() {
  const { state, actions } = useOvermind();

  const { params } = useRouteMatch();
  const specialtyId = (params as any)["id"] as string;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const job = async () => {
      setLoading(true);
      await actions.specialties.getSpecialty(specialtyId);
      await actions.programs.getProgramsOfSpecialty(specialtyId);
      setLoading(false);
    };

    job();
  }, [actions.specialties, specialtyId]);

  useEffect(() => {
    if (state.specialties.currentSpecialty) {
      actions.specialties.getSpecialtiesOfMajor(
        state.specialties.currentSpecialty.major.uid
      );
    }
  }, [state.specialties.currentSpecialty]);

  const specialty = state.specialties.currentSpecialty;

  const otherSpecialties = state.specialties.listOfMajor.filter(
    (specialty) => specialty.uid !== specialtyId
  );

  return !loading && specialty ? (
    <div className={block()}>
      <EducationSummary
        uid={specialty.uid}
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
      {state.programs.listOfSpecialty.map((program) => (
        <Link
          to={`/education/programs/${program.uid}`}
          key={program.uid}
          className={block("program")}
        >
          {program.title}
        </Link>
      ))}
      {!!otherSpecialties?.length && (
        <>
          <Brick size={4} />
          <span className={block("specialties-description")}>
            Другие направления, относящиеся к УГН «Информатика и вычислительная
            техника»
          </span>
          <Brick size={2} />
          {otherSpecialties.map((specialty) => (
            <Link
              to={`/education/specialties/${specialty.uid}`}
              key={specialty.uid}
              className={block("specialty")}
            >
              <EducationCode code={specialty.code} />
              <span className={block("specialty-name")}>{specialty.title}</span>
            </Link>
          ))}
        </>
      )}
    </div>
  ) : null;
}
