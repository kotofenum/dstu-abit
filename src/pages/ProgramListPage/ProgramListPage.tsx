import React, { useEffect } from "react";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";

import { Brick } from "../../components/utility/Brick";
import { EducationCode } from "../../components/EducationCode";

import "./styles.scss";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";

const block = cn("program-list-page");

export function ProgramListPage() {
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.programs.getPrograms();
  }, []);

  useEffect(() => {
    document.title = `Образовательные программы | Абитуриент ДГТУ`;
  }, []);

  const sortedPrograms = [...state.programs.list].sort((a, b) => {
    const aPairs = a.specialty.code.split(".");
    const bPairs = b.specialty.code.split(".");

    if (aPairs[0] > bPairs[0]) {
      return 1;
    } else if (aPairs[0] < bPairs[0]) {
      return -1;
    } else if (aPairs[0] === bPairs[0]) {
      if (aPairs[1] > bPairs[1]) {
        return 1;
      } else if (aPairs[1] < bPairs[1]) {
        return -1;
      } else if (aPairs[1] === bPairs[1]) {
        if (aPairs[2] > bPairs[2]) {
          return 1;
        } else if (aPairs[2] < bPairs[2]) {
          return -1;
        }
      }
    }

    return 0;
  });

  return (
    <div className={block()}>
      <SearchBar />
      <span className={block("heading")}>
        <span className={block("underline")}>Образовательные программы</span>
      </span>
      <Brick size={4} />
      <div className={block("items")}>
        {sortedPrograms.map((program) => (
          <Link
            to={`/education/programs/${program.uid}`}
            key={program.uid}
            className={block("item")}
          >
            <span className={block("item-title")}>{program.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
