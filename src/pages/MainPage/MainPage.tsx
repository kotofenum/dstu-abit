import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../services/helpers/classname";

import "./styles.scss";

const block = cn("main-page");

export function MainPage() {
  return (
    <div className={block()}>
      <div className={block("grid")}>
        <a
          href="https://online.donstu.ru"
          target="_blank"
          rel="noreferrer"
          className={block("cell", { six: true, wide: true })}
        >
          ПОДАТЬ ЗАЯВЛЕНИЕ
        </a>
        <Link to={`/education`} className={block("cell", { one: true })}>
          ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ
        </Link>
        <a
          href="https://donstu.ru/priemnaya-kampaniya"
          target="_blank"
          rel="noreferrer"
          className={block("cell", { two: true })}
        >
          ПРАВИЛА ПРИЕМА
        </a>
        <Link to={`/guidance`} className={block("cell", { three: true })}>
          ДНИ ОТКРЫТЫХ ДВЕРЕЙ И ПРОФМЕРОПРИЯТИЯ
        </Link>
        <Link to={`/competitions`} className={block("cell", { four: true })}>
          КОНКУРСЫ И ОЛИМПИАДЫ
        </Link>
        <Link to={`/pre-university`} className={block("cell", { five: true })}>
          ДОВУЗОВСКАЯ ПОДГОТОВКА
        </Link>
        <a
          href="https://abiturient.donstu.ru/proforientaczionnoe-testirovanie/"
          target="_blank"
          rel="noreferrer"
          className={block("cell", { six: true })}
        >
          ПРОФТЕСТИРОВАНИЕ
        </a>
        <a
          href="https://test.skif.donstu.ru/course/view.php?id=502"
          target="_blank"
          rel="noreferrer"
          className={block("cell", { seven: true })}
        >
          ПРЕДМЕТНОЕ ТЕСТИРОВАНИЕ
        </a>
        <Link to={`/calculator`} className={block("cell", { eight: true })}>
          КАЛЬКУЛЯТОР ЕГЭ
        </Link>
        {/* <Link to={`/achievements`} className={block("cell", { nine: true })}>
          ПРЕДВАРИТЕЛЬНЫЙ УЧЕТ ИНДИВИДУАЛЬНЫХ ДОСТИЖЕНИЙ
        </Link> */}
      </div>
    </div>
  );
}
