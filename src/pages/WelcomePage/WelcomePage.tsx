import React from "react";
import { cn } from "../../services/helpers/classname";
import OptionBlock from "./components/OptionBlock";

import { ReactComponent as UgnIcon } from "../../assets/svg/ugn.svg";
import { ReactComponent as DirectionIcon } from "../../assets/svg/direction.svg";
import { ReactComponent as ProgramIcon } from "../../assets/svg/program.svg";

import "./styles.scss";
import { Brick } from "../../components/utility/Brick";
import { Link } from "react-router-dom";

const block = cn("welcome-page");

export function WelcomePage() {
  return (
    <div className={block()}>
      <span className={block("welcome")}>День открытых дверей ДГТУ</span>
      <Brick size={0} plusHalf />
      <span className={block("date")}>20 декабря 2020 года</span>
      <Brick size={3} />
      <div className={block("grid")}>
        <div className={block("cell", {one: true})}>
          <span className={block("cell-header")}>ДГТУ-ОНЛАЙН</span>
          <span className={block("cell-row")}>
            Прямая трансляция с руководством вуза
          </span>
          <span className={block("cell-row")}>
            Круглые столы с деканами факультетов ДГТУ
          </span>
          <span className={block("cell-row")}>Интерактивная лекция</span>
        </div>
        <div className={block("cell", {two: true})}>
          <span className={block("cell-header")}>ТАЛАНТЫ</span>
          <span className={block("cell-row")}>
            Информация о проведении на базе ДГТУ интеллектуальных соревнований
            для школьников
          </span>
          <span className={block("cell-row")}>
            Круглый стол с победителями и призерами интеллектуальных
            соревнований. Советы психолога как преодолеть стресс и тревожность
            во время участия в интеллектуальных соревнованиях
          </span>
        </div>
        <div className={block("cell", {three: true})}>
          <span className={block("cell-header")}>ДОВУЗОВСКАЯ ПОДГОТОВКА</span>
          <span className={block("cell-row")}>
          Презентации колледжей, лицея, гимназии ДГТУ и Кадетского корпуса
          </span>
          <span className={block("cell-row")}>
          Информация о подготовительных курсах и развивающих программах для детей и взрослых
          </span>
        </div>
        <div className={block("cell", {four: true})}>
          <span className={block("cell-header")}>ПРИЕМНАЯ КОМИССИЯ</span>
          <span className={block("cell-row")}>
            Информация о проведении на базе ДГТУ интеллектуальных соревнований
            для школьников
          </span>
          <span className={block("cell-row")}>
            Круглый стол с победителями и призерами интеллектуальных
            соревнований. Советы психолога как преодолеть стресс и тревожность
            во время участия в интеллектуальных соревнованиях
          </span>
        </div>
        <div className={block("cell", {five: true})}>
          <span className={block("cell-header")}>ВМЕСТЕ С ДГТУ</span>
          <span className={block("cell-row")}>
            Информация о проведении на базе ДГТУ интеллектуальных соревнований
            для школьников
          </span>
          <span className={block("cell-row")}>
            Круглый стол с победителями и призерами интеллектуальных
            соревнований. Советы психолога как преодолеть стресс и тревожность
            во время участия в интеллектуальных соревнованиях
          </span>
        </div>
        <div className={block("cell", {six: true})}>
          <span className={block("cell-header")}>ПРИВЕТ, ФАКУЛЬТЕТ!</span>
          <span className={block("cell-row")}>
            Информация о проведении на базе ДГТУ интеллектуальных соревнований
            для школьников
          </span>
          <span className={block("cell-row")}>
            Круглый стол с победителями и призерами интеллектуальных
            соревнований. Советы психолога как преодолеть стресс и тревожность
            во время участия в интеллектуальных соревнованиях
          </span>
        </div>
        <div className={block("cell", {seven: true})}>
          <span className={block("cell-header")}>ЭКСКУРСИИ В БУДУЩЕЕ</span>
          <span className={block("cell-row")}>
            Информация о проведении на базе ДГТУ интеллектуальных соревнований
            для школьников
          </span>
          <span className={block("cell-row")}>
            Круглый стол с победителями и призерами интеллектуальных
            соревнований. Советы психолога как преодолеть стресс и тревожность
            во время участия в интеллектуальных соревнованиях
          </span>
        </div>
        <div className={block("cell", {eight: true})}>
          <span className={block("cell-header")}>СПОРТ, ДОСУГ И НЕ ТОЛЬКО…</span>
          <span className={block("cell-row")}>
            Информация о проведении на базе ДГТУ интеллектуальных соревнований
            для школьников
          </span>
          <span className={block("cell-row")}>
            Круглый стол с победителями и призерами интеллектуальных
            соревнований. Советы психолога как преодолеть стресс и тревожность
            во время участия в интеллектуальных соревнованиях
          </span>
        </div>
      </div>
      <Brick size={4} />
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

      <Brick size={12} />
    </div>
  );
}
