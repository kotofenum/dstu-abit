import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../services/helpers/classname";

import "./styles.scss";

const block = cn("main-page");

export function MainPage() {
  return (
    <div className={block()}>
      <div className={block("grid")}>
        <Link to={`/education`} className={block("cell", { one: true })}>
          ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ
        </Link>
        <a
          href="https://donstu.ru/priemnaya-kampaniya"
          className={block("cell", { two: true })}
        >
          ПРАВИЛА ПРИЕМА
        </a>
        <Link to={`/events`} className={block("cell", { three: true })}>
          ДНИ ОТКРЫТЫХ ДВЕРЕЙ И ПРОФМЕРОПРИЯТИЯ
        </Link>
        <a
          href="http://donstu-talant.ru"
          className={block("cell", { four: true })}
        >
          КОНКУРСЫ И ОЛИМПИАДЫ
        </a>
        <Link to={`/`} className={block("cell", { five: true })}>
          ДОВУЗОВСКАЯ ПОДГОТОВКА
        </Link>
        <Link to={`/`} className={block("cell", { six: true })}>
          ПРОФТЕСТИРОВАНИЕ
        </Link>
        <a
          href="https://test.skif.donstu.ru/course/view.php?id=502"
          className={block("cell", { seven: true })}
        >
          ПРЕДМЕТНОЕ ТЕСТИРОВАНИЕ
        </a>
        <Link to={`/calculator`} className={block("cell", { eight: true })}>
          КАЛЬКУЛЯТОР ЕГЭ
        </Link>
        <Link to={`/achievements`} className={block("cell", { nine: true })}>
          ПРЕДВАРИТЕЛЬНЫЙ УЧЕТ ИНДИВИДУАЛЬНЫХ ДОСТИЖЕНИЙ
        </Link>
      </div>
    </div>
  );
}
