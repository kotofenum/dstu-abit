import React, { ReactNode } from "react";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";
import { TagRelationType } from "../../store/graphql-global-types";
import { EducationType } from "../../types/EducationType";

import "./styles.scss";

const block = cn("education-summary");

interface IEducationSummaryProps {
  uid: string;
  title: string;
  type: EducationType;
  relations: ReactNode;
}

const pluralTypes = {
  major: "majors",
  specialty: "specialties",
  program: "programs",
};

function EducationSummary({
  uid,
  title,
  type,
  relations,
}: IEducationSummaryProps) {
  const key = Object.keys(EducationType).find(
    // TODO: get rid of it
    (key) => EducationType[key as keyof typeof EducationType] === type
  );

  const { state, actions } = useOvermind();

  const hasTag = state.tags.tags
    ? Object.keys(state.tags.tags).some((index) => {
        if (key === "major") {
          return state.tags.tags?.majors.some((tag) => tag.uid === uid);
        }
        if (key === "specialty") {
          return state.tags.tags?.specialties.some((tag) => tag.uid === uid);
        }
        if (key === "program") {
          return state.tags.tags?.programs.some((tag) => tag.uid === uid);
        }
      })
    : false;

  return (
    <div className={block()}>
      {!hasTag ? (
        <div
          className={block("button")}
          onClick={async () => {
            await actions.tags.addTag({
              relationId: uid,
              relationType: key as TagRelationType,
            });
            await actions.tags.getMyTags();
          }}
        >
          + Добавить к тегам
        </div>
      ) : (
        <div
          className={block("button", { red: true })}
          onClick={async () => {
            await actions.tags.removeTag({
              relationId: uid,
              relationType: key as TagRelationType,
            });
            await actions.tags.getMyTags();
          }}
        >
          Убрать из тегов
        </div>
      )}
      {/* <span>{hasTag ? "Добавлено" : "Не добавлено"}</span> */}
      <div className={block("summary")}>
        <div className={block("title")}>{title}</div>
        <div className={block("info")}>
          <div className={block("type", { ...(key && { [key]: true }) })}>
            {type}
          </div>
          <div className={block("relations")}>{relations}</div>
        </div>
      </div>
    </div>
  );
}

EducationSummary.type = EducationType;
export const EducationSummarySmart = EducationSummary;
