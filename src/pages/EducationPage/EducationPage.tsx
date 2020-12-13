import React from "react";
import { cn } from "../../services/helpers/classname";
import OptionBlock from "./components/OptionBlock";

import { ReactComponent as UgnIcon } from "../../assets/svg/ugn.svg";
import { ReactComponent as DirectionIcon } from "../../assets/svg/direction.svg";
import { ReactComponent as ProgramIcon } from "../../assets/svg/program.svg";

import "./styles.scss";
import { Brick } from "../../components/utility/Brick";

const block = cn("education-page");

export function EducationPage() {
  return (
    <div className={block()}>
      <span className={block("welcome")}>Добро пожаловать!</span>
      <Brick size={0} plusHalf />
      <span className={block("introduction")}>
        Воспользуйтесь нашим быстрым поиском мероприятий по{" "}
        <span className={block("marked", { orange: true })}>УГН</span>,{" "}
        <span className={block("marked", { purple: true })}>направлениям</span>{" "}
        или{" "}
        <span className={block("marked", { blue: true })}>
          образовательным программам
        </span>
        , либо перейдите к полному списку мероприятий.
      </span>
      <Brick size={3} />
      <div className={block("options")}>
        <OptionBlock
          name="УГН"
          icon={<UgnIcon />}
          color={OptionBlock.color.orange}
        />
        <OptionBlock
          name="Направление"
          icon={<DirectionIcon />}
          color={OptionBlock.color.purple}
        />
        <OptionBlock
          name="Образовательная программа"
          icon={<ProgramIcon />}
          color={OptionBlock.color.blue}
        />
      </div>
      <Brick size={3} />
      <span className={block("introduction")}>
        Найдите подходящие УГН/направления/образовательные программы и{" "}
        <span className={block("accent")}>добавьте их к своим тегам</span> —
        список мероприятий будет отображать в первую очередь мероприятия,
        соответствующие вашим предпочтениям.
      </span>
    </div>
  );
}
