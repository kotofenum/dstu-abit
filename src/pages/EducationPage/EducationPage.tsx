import React from "react";
import { cn } from "../../services/helpers/classname";
import OptionBlock from "./components/OptionBlock";

import { ReactComponent as UgnIcon } from "../../assets/svg/ugn.svg";
import { ReactComponent as DirectionIcon } from "../../assets/svg/direction.svg";
import { ReactComponent as ProgramIcon } from "../../assets/svg/program.svg";

import "./styles.scss";
import { Brick } from "../../components/utility/Brick";
import { Link } from "react-router-dom";

const block = cn("education-page");

export function EducationPage() {
  return (
    <div className={block()}>
      <span className={block("welcome")}>Добро пожаловать!</span>
      <Brick size={0} plusHalf />
      <span className={block("introduction")}>
        Хотите узнать больше об образовании в ДГТУ? Перейдите в раздел Обучение,
        чтобы изучить доступные{" "}
        <span className={block("marked", { orange: true })}>
          укрупненные группы направлений
        </span>
        , отдельные{" "}
        <span className={block("marked", { purple: true })}>направления</span> и{" "}
        <span className={block("marked", { blue: true })}>
          образовательные программы
        </span>
        , либо посетите{" "}
        <Link style={{ color: "inherit", fontWeight: 500 }} to="/events">
          полный список мероприятий
        </Link>
        , приуроченных к Дню открытых дверей ДГТУ.
      </span>
      <Brick size={3} />
      <div className={block("options")}>
        <Link to="/education/majors" style={{ textDecoration: "none" }}>
          <OptionBlock
            name="Обучение"
            icon={<UgnIcon />}
            color={OptionBlock.color.orange}
          />
        </Link>
        {/* <Link to="/education/specialties" style={{ textDecoration: "none" }}>
          <OptionBlock
            name="Направление"
            icon={<DirectionIcon />}
            color={OptionBlock.color.purple}
          />
        </Link>
        <Link to="/education/programs" style={{ textDecoration: "none" }}>
          <OptionBlock
            name="Образовательная программа"
            icon={<ProgramIcon />}
            color={OptionBlock.color.blue}
          />
        </Link> */}
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
