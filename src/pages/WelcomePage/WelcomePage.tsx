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
          День открытых дверей ДГТУ в онлайн-формате <br />
          28 февраля 2021 года <br />с 9.00 до 15.00
        </span>
        <Brick size={0} plusHalf />
        <span className={block("introduction")}>
          Привет, абитуриент! ДГТУ ждет тебя на виртуальном дне открытых дверей!
          Ты сможешь узнать все о поступлении в вуз, пообщаться с
          преподавателями и студентами факультетов, поучаствовать в
          мастер-классах, экскурсиях, тренингах и лекциях, а также познакомиться
          с бизнес-партнерами университета.
        </span>
        <Brick size={3} />
        <span className={block("regular")}>
          Для участия в мероприятии достаточно кликнуть на его название и
          выбрать кнопку «Подключиться». Кстати, перед переходом на вкладку
          мероприятия, не забудь <Link to="/register">зарегистрироваться</Link>,
          если хочешь:
          <ul>
            <li>
              получить за участие в дне открытых дверей баллы, которые можно
              будет использовать после зачисления в вуз;
            </li>
            <li>поучаствовать в конкурсе «Один день с ректором»;</li>
            <li>
              предварительно оценить свои индивидуальные достижения и
              потренироваться в заполнении заявления.
            </li>
          </ul>
        </span>
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
            <span className={block("cell-header")}>ДОВУЗ</span>
            <span className={block("cell-row")}>
              Презентация колледжей ДГТУ, гимназии ДГТУ, МБОУ «Лицея № 50 при
              ДГТУ», кадетского корпуса
            </span>
            <span className={block("cell-row")}>
              Мастер-классы от преподавателей Дома научной коллаборации и
              Регионального комплекса для одаренных детей и молодежи ДГТУ,
              информация о подготовительных курсах
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
          <Link to={`/future-tour`} className={block("cell", { seven: true })}>
            <span className={block("cell-header")}>ЭКСКУРСИИ В БУДУЩЕЕ</span>
            <span className={block("cell-row")}>
              Первый опорный многопрофильный вуз Ростовской области приглашает
              детей и родителей на экскурсии по университету. У вас есть
              уникальная возможность заглянуть в лаборатории вуза и
              познакомиться с бизнес-партнерами университета.
            </span>
            <span className={block("cell-row")}>
              Хотите больше узнать о своей будущей профессии, посетить
              лаборатории и специализированные аудитории? Тогда модуль
              «ЭКСКУРСИИ В БУДУЩЕЕ» для вас!
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
          Если Вы пройдете <Link to="/register">регистрацию</Link>, то получите
          возможность принять участие в конкурсах, викторинах и получить баллы
          за участие в мероприятиях.
        </span>

        <Brick size={12} />
      </div>
    </div>
  );
}
