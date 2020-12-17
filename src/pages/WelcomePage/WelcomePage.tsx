import React, { useEffect } from "react";
import { cn } from "../../services/helpers/classname";
import OptionBlock from "./components/OptionBlock";

import { ReactComponent as UgnIcon } from "../../assets/svg/ugn.svg";
import { ReactComponent as DirectionIcon } from "../../assets/svg/direction.svg";
import { ReactComponent as ProgramIcon } from "../../assets/svg/program.svg";
import { ReactComponent as EventsIcon } from "../../assets/svg/events.svg";

import "./styles.scss";
import { Brick } from "../../components/utility/Brick";
import { Link } from "react-router-dom";

import { useViewportScroll, useTransform, motion } from "framer-motion";

const block = cn("welcome-page");

export function WelcomePage() {
  useEffect(() => {
    document.title =
      "Интерактивная модульная карта Дня открытых дверей | Абитуриент ДГТУ";
  }, []);

  const { scrollY } = useViewportScroll();
  const maxedY = useTransform(scrollY, (value) =>
    value > 292 + 20 ? 292 + 20 : value
  );

  const opacty = useTransform(maxedY, [50, 292 + 20], [1, 0], {
    // ease: easingFunction,
  });
  const translate = useTransform(maxedY, [50, 292 + 20], [0, 80 + 20], {
    // ease: easingFunction,
  });

  const sc = useTransform(maxedY, [30, 292 + 20], [1, 0.8], {
    // ease: easingFunction,
  });

  const opc = useTransform(maxedY, [0, 112 + 20], [1, 0], {
    // ease: easingFunction,
    // ease: (v) => v * v,
  });
  return (
    <div className={block()}>
      <motion.div
        className={block("sticky-top")}
        style={{ opacity: opacty, y: translate, scale: sc }}
      >
        <span className={block("welcome")}>
          20 ДЕКАБРЯ 2020 ГОДА ДГТУ ПРОВОДИТ ДЕНЬ ОТКРЫТЫХ ДВЕРЕЙ В
          ОНЛАЙН-ФОРМАТЕ
        </span>
        <Brick size={0} plusHalf />
        <span className={block("introduction")}>
          Приглашаем всех желающих принять участие в мероприятии! Для
          школьников, абитуриентов, родителей и педагогов подготовлена
          интерактивная карта, где они смогут выбрать те модули, которые
          интересны именно им.
        </span>
        <Brick size={3} />
        <span className={block("regular")}>
          Вы можете принять участие в Дне открытых дверей без регистрации. Для
          этого выберите интересующий Вас модуль на интерактивной карте и
          мероприятие в нем.
        </span>
        <Brick size={1} />
        <span className={block("regular")}>
          Вы можете увидеть полную карту всех мероприятий, кликнув на кнопку{" "}
          <Link to="/events">
            <EventsIcon
              style={{
                height: "32px",
                margin: "0 8px",
                cursor: "pointer",
                color: "inherit",
              }}
            />
          </Link>{" "}
          в меню.
        </span>
        <Brick size={2} />
        <span className={block("regular")}>
          Если Вы пройдете регистрацию, то получите возможность принять участие
          в конкурсах, викторинах и получить баллы за участие в мероприятиях.
        </span>
        <Brick size={3} />
      </motion.div>
      <div className={block("content")}>
        <div className={block("grid")}>
          <Link
            to={`/events?module=online`}
            className={block("cell", { one: true })}
          >
            <span className={block("cell-header")}>ДГТУ-ОНЛАЙН</span>
            <span className={block("cell-row")}>
              Прямая трансляция с руководством вуза
            </span>
            <span className={block("cell-row")}>
              Круглые столы с деканами факультетов ДГТУ
            </span>
            <span className={block("cell-row")}>
              Дискуссия о трансформации высшего образования и особенностях
              Приемной кампании 2021 года
            </span>
          </Link>
          <Link
            to={`/events?module=talents`}
            className={block("cell", { two: true })}
          >
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
          </Link>
          <Link
            to={`/events?module=preUniversity`}
            className={block("cell", { three: true })}
          >
            <span className={block("cell-header")}>ДОВУЗОВСКАЯ ПОДГОТОВКА</span>
            <span className={block("cell-row")}>
              Презентация колледжей ДГТУ, гимназии ДГТУ, МБОУ «Лицея № 50 при
              ДГТУ», кадетского корпуса
            </span>
            <span className={block("cell-row")}>
              Мастер-классы от преподавателей Дома научной коллаборации и
              Регионального комплекса для одаренных детей и молодежи ДГТУ
            </span>
          </Link>
          <Link
            to={`/events?module=admissions`}
            className={block("cell", { four: true })}
          >
            <span className={block("cell-header")}>ПРИЕМНАЯ КОМИССИЯ</span>
            <span className={block("cell-row")}>
              Ответы на вопросы о поступлении в ДГТУ
            </span>
          </Link>
          <Link
            to={`/events?module=helloFaculty`}
            className={block("cell", { six: true })}
            style={{ gridColumnStart: 1, gridColumnEnd: 3 }}
          >
            <span className={block("cell-header")}>ПРИВЕТ, ФАКУЛЬТЕТ!</span>
            <span className={block("cell-row")}>
              Презентации, мастер-классы, экскурсии, тренинги и лекции от
              факультетов и структурных подразделений ДГТУ
            </span>
            <span className={block("cell-row")}>
              Презентация проекта по индивидуальному сопровождению абитуриентов
            </span>
            <span className={block("cell-row")}>
              Знакомство школьников с тьюторами и наставниками
            </span>
          </Link>
          <Link
            to={`/events?module=futureTour`}
            className={block("cell", { seven: true })}
          >
            <span className={block("cell-header")}>ЭКСКУРСИИ В БУДУЩЕЕ</span>
            <span className={block("cell-row")}>
              Уникальная возможность заглянуть в лаборатории вуза и
              познакомиться с бизнес-партнёрами университета
            </span>
          </Link>
          <Link
            to={`/events?module=leisure`}
            className={block("cell", { eight: true })}
          >
            <span className={block("cell-header")}>
              СПОРТ, ДОСУГ И НЕ ТОЛЬКО…
            </span>
            <span className={block("cell-row")}>
              Чем занимаются студенты ДГТУ, кроме учебы? Студенческий профком,
              спортивные секции, театральная студия и не только…
            </span>
          </Link>
        </div>
        <Brick size={4} />
        <span className={block("introduction")}>
          Здесь Вы можете узнать об образовательных программах, направлениях
          подготовки, которые реализуются в ДГТУ
        </span>
        <Brick size={3} />
        <div className={block("options")}>
          <Link to="/education/programs" style={{ textDecoration: "none" }}>
            <OptionBlock
              name="ОБРАЗОВАНИЕ В ДГТУ"
              icon={<UgnIcon />}
              color={OptionBlock.color.blue}
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

        <span className={block("regular")}>
          Вы можете принять участие в Дне открытых дверей без регистрации. Для
          этого выберите интересующий Вас модуль на интерактивной карте и
          мероприятие в нем.
        </span>
        <Brick size={1} />
        <span className={block("regular")}>
          Вы можете увидеть полную карту всех мероприятий, кликнув на кнопку{" "}
          <Link to="/events">
            <EventsIcon
              style={{
                height: "32px",
                margin: "0 8px",
                cursor: "pointer",
                color: "inherit",
              }}
            />
          </Link>{" "}
          в меню.
        </span>
        <Brick size={2} />
        <span className={block("regular")}>
          Если Вы пройдете регистрацию, то получите возможность принять участие
          в конкурсах, викторинах и получить баллы за участие в мероприятиях.
        </span>

        <Brick size={12} />
      </div>
    </div>
  );
}
