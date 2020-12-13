import React from "react";
import { cn } from "../../services/helpers/classname";
import { EducationProperties } from "../../components/EducationProperties";
import { EducationRelation } from "../../components/EducationRelation";
import { EducationSummary } from "../../components/EducationSummary";

import "./styles.scss";

const block = cn("program-page");

export function ProgramPage() {
  return (
    <div className={block()}>
      <EducationSummary
        title="Применение математических методов к решению инженерных и экономических задач"
        type={EducationSummary.type.program}
        relations={
          <>
            <EducationRelation
              type={EducationSummary.type.specialty}
              code="01.03.04"
              name="Прикладная математика"
            />
            <EducationRelation
              type={EducationSummary.type.major}
              code="01.00.00"
              name="Математика и механика"
            />
          </>
        }
      />
      <EducationProperties
        list={[
          { name: "Форма обучения", value: "очная" },
          { name: "Уровень образования", value: "бакалавриат" },
          { name: "Срок обучения", value: "4 года" },
          { name: "Языки обучения", value: "русский" },
        ]}
      />
      <div className={block("text-block")}>
        <span className={block("text-block-title")}>Описание программы</span>
        <span className={block("text-block-content")}>
          ОПОП предназначена для подготовки квалифицированных бакалавров,
          обладающих универсальными, общепрофессиональными компетенциями,
          предусмотренными ФГОС ВО для данного направления и профессиональными
          компетенциями, предусмотренными настоящей ОПОП. Объем освоения
          обучающимся ОПОП составляет 240 зачетных единиц за весь период
          обучения в соответствии с ФГОС ВО по данному направлению подготовки и
          включает все виды аудиторной и самостоятельной работы, практики и
          время, отводимое на контроль качества освоения обучающимся ОПОП. Тип
          задач профессиональной деятельности, к которой готовятся выпускники ˗
          научно исследовательский. Сфера профессиональной деятельности
          выпускников, освоивших программу бакалавриата, включает разработку,
          применение и развитие математических методов и моделей для решения
          исследовательских и проектных задач во всех сферах производственной,
          хозяйственной, экономической, социальной, управленческой деятельности,
          в науке, технике, медицине, образовании. Выпускники, освоившие
          программу, решать задачи в области научно-исследовательских и
          опытно-конструкторских разработок, проведения анализа и выработки
          решений в конкретных предметных областях профессиональной деятельности
          с применением современных математических методов, современных
          прикладных программных средств и современных технологий
          программирования. ОПОП данного направления подготовки бакалавров
          создана в 2011 году преподавателями кафедры Прикладная математика ДГТУ
          в соответствии с потребностями регионального рынка труда в области
          применения математических методов к решению инженерных и экономических
          задач. ОПОП предусматривает овладение фундаментальными знаниями в
          области математики и ествественно˗научными дисциплинами, освоение
          прикладных математических методов. В достаточно большом объеме
          изучаются дисциплины: Линейная алгебра и аналитическая геометрия,
          Дискретная математика, Математический анализ, Теория вероятностей и
          математическая статистика, Дифференциальные уравнения, Уравнения
          математической физики, Исследование операций и теория игр, Численные
          методы, Методы оптимизации, Математическое моделирование,
          Математические методы анализа и синтеза систем и др. Программа
          предусматривает овладение современными программными средствами для
          решения прикладных задач, что реализуется следующими дисциплинами:
          Стандартные пакеты прикладной математики, Анализ временных рядов,
          Интегрированные среды вычислительной математики, Программные
          технологии математического моделирования. Наряду с освоением
          прикладных программ, предусматривается приобретение практических
          навыков программирования, для этого последовательно изучаются
          дисциплины Основы программирования, Алгоритмические языки, системы и
          сети, Объектно˗ориентированное программирование. При успешном освоении
          ОПОП ВО выпускнику присваивается квалификация «бакалавр» по
          направлению подготовки 01.03.04 «Прикладная математика». Выпускники
          могут осуществлять профессиональную деятельность в
          научно˗исследовательских институтах, производственных предприятиях,
          учреждениях и организациях различного профиля в сфере разработки и
          применения математических методов решения исследовательских и
          проектных задач.
        </span>
      </div>
      <div className={block("text-block")}>
        <span className={block("text-block-title")}>
          Преимущества программы
        </span>
        <span className={block("text-block-content")}>
          Важной особенностью программы является сочетание изучения
          фундаментальных математических и естественно˗научных дисциплин с
          овладением умениями и навыками применения математических методов,
          наукоемкого программного обеспечения и современных технологий
          программирования для решения прикладных задач. Программа нацелена на
          решение важной задачи ˗ формирование способности применять полученные
          знания для решения конкретных задач, что в настоящее время актуально
          на рынке труда. Содержание преподаваемых дисциплин, тематика дипломных
          работ и научно˗исследовательской работы обучающихся неразрывно связаны
          с решением актуальных практических задач. Изучение целого ряды
          дисциплин, таких как Математические модели в науке, технике и
          экономике, Оптимизационное задачи в технических и экономических
          приложениях, Системный анализ и теория принятия решений, Основы
          проектной деятельности, Модельно˗ориентированное проектирование,
          Технологии научных исследований, Лучшие зарубежные практики и др.
          подкрепляется практиками, среди которых важное место занимают
          научно˗исследовательская работа и проектно˗технологиченская практика.{" "}
        </span>
      </div>
      <div className={block("text-block")}>
        <span className={block("text-block-title")}>Организации-партнеры</span>
        <span className={block("text-block-content")}>
          — Научно-исследовательский институт механики и прикладной математика
          им. И.И. Воровича, Южный федеральный университет; — Акционерное
          общество Всероссийский научно˗исследователький институт «Градиент»; —
          Федеральное государственное унитарное предприятие «ростовский-на-дону
          научно-исследовательский институт радиосвязи».
        </span>
      </div>
      <div className={block("text-block")}>
        <span className={block("text-block-title")}>Проекты и практики</span>
        <span className={block("text-block-content")}>
          Важными приоритетами программы являются разработка математических
          моделей процессов и систем, математическое обеспечение проектной
          деятельности и разработка проектов. Перечислим некоторые из проектов,
          подготовленные обучающимися: проектирование системы комфортного дома,
          проектирование синергетического управления для системы «Валовой
          продукт – трудовые ресурсы», проектирование экспертной системы для
          оценки качества знаний. Изучение практических приложений
          математических методов проводится, как в рамках освоения
          соответствующих дисциплин, так и в ходе практик. Типы учебных практик:
          ознакомительная и научно исследовательская работа, реализуются во 2˗м
          и 4˗м семестрах обучения соответственно. Типы производственной
          практики: проектно˗технологическая и научно˗исследовательская работа
          (6 семестр) и преддипломная практика (8 семестр). Для проведения
          проектно˗технологической практики выбираются предприятия и учреждения,
          в которых обучающиеся приобретают опыт практического применения
          математических методов и моделей при решении исследовательских и
          проектных задач в конкретных областях. Среди баз практик, например,
          Акционерное общество Всероссийский научно˗исследователький институт
          «Градиент», Федеральное государственное унитарное предприятие
          «ростовский-на-дону научно-исследовательский институт радиосвязи».
          Научно˗исследовательская работа ведется под руководством ведущих
          преподавателей кафедры, начиная со второго года обучения, и
          предполагает подготовку научных публикаций, участие в работе
          конференций и выставок, участие в конкурсах научных работ. Одно из
          актуальных направлений исследований ˗ это модели механики контакта и
          разрушения, рассматриваются контактные и смешанные задачи теории
          упругости для объектов, моделирующих реальные сооружения, конструкции,
          детали. Спектр направлений научной деятельности достаточно широк,
          помимо упомянутых выше задач, исследования охватывают следующие
          области ˗ теория управления динамическими системами, интеллектуальные
          системы, математическое моделирование и оптимизационные задачи в
          научной, производственной, экономической, социальной, управленческой
          сферах, а также в области медицины, здоровьесбережения, безопасности
          жизнедеятельности, экологии, техники, образования.{" "}
        </span>
      </div>
      <div className={block("text-block")}>
        <span className={block("text-block-title")}>
          Преподаватели-флагманы
        </span>
        <span className={block("text-block-content")}>
          Научный руководитель программы заведующий кафедрой Прикладная
          математика ДГТУ, доктор физико˗математических наук, профессор
          Пожарский Дмитрий Александрович
          (https://donstu.ru/structure/cadre/pozhars
          kiy-dmitriy-aleksandrovich), имеет 10˗летний опыт профессиональной
          деятельности по направлению программы, за это время руководил
          подготовкой 15 выпускных квалификационных работ бакалавров.
          Научно˗педагогическую деятельность по данному направлению осуществляет
          в течение 30 лет. Одной из основных черт профессиональной деятельности
          Пожарского Д.А. по реализации данной программы является неразрывная
          связь преподаваемых дисциплин, тематики дипломных работ и
          научно˗исследовательской работы обучающихся с решением актуальных
          прикладных задач механики контакта и разрушения. В данной области
          Пожарский Д.А. является признанным в мире специалистом, большое
          количество его работ опубликованы в известных журналах, индексируемых
          в Scopus и WoS, ведет активную деятельность по выполнению научных
          грантов, в настоящее время является руководителем двух грантов РФФИ
          «Контактные и смешанные задачи теории упругости для неоднородных
          цилиндрических, клиновидных и слоистых тел», «Периодические контактные
          и смешанные задачи теории упругости». Профессор кафедры Прикладная
          математика, доктор физико˗математических наук, профессор Братищев
          Александр Васильевич
          (https://donstu.ru/structure/cadre/bratishchev-aleksandr-vasilevich),
          имеет 10˗летний опыт профессиональной деятельности по направлению
          программы, а научно˗педагогическую деятельность по данному направлению
          осуществляет в течение 25 лет, награжден знаком «Почетный работник
          высшего профессионального образования Российской Федерации». В
          реализации данной программы преподает дисциплины Стандартные пакеты
          прикладной математики, Анализ временных рядов, Математические методы
          анализа и синтеза систем, Модельно˗ориентированное проектирование,
          направленных на освоение наукоемких прикладных программ и их
          использования в моделировании и проектировании. Руководит выполнением
          выпускных квалификационных работ и научно˗исследовательской работой
          бакалавров, одно из актуальных направлений этой работы ˗
          синергетическое управление динамическими системами. Доцент кафедры
          Прикладная математика, кандидат физико˗математических наук, доцент
          Рябых Галина Юрьевна
          (https://donstu.ru/structure/cadre/ryabykh-galina-yurevna), имеет
          10˗летний опыт профессиональной деятельности по направлению программы,
          а научно˗педагогическую деятельность по данному направлению
          осуществляет в течение 35 лет, награждена знаком «Почетный работник
          высшего профессионального образования Российской Федерации». В
          реализации данной программы преподает дисциплины, обеспечивающие
          фундаментальную подготовку бакалавров ˗ Математический анализ, Теория
          функций комплексного переменного, Теория вероятностей и математическая
          статистика. Руководит выполнением выпускных квалификационных работ и
          научно˗исследовательской работой бакалавров с широкой научной
          тематикой в области экстремальных задач в пространствах аналитических
          функций и моделирования в экологии, медицине, здравоохранении.
        </span>
      </div>
      <div className={block("text-block")}>
        <span className={block("text-block-title")}>
          Известные выпускники программы{" "}
        </span>
        <span className={block("text-block-content")}>
          Харахашьян Артем Михайлович ˗ кандидат технических наук, научный
          сотрудник Лаборатории космических исследований НИИ физики ЮФУ,
          является исполнителем гранта РФФИ «Космическая погода и характеристики
          распространения радиоволн в нижней и верхней ионосфере: получение и
          обработка экспериментальных данных, интерпретация, моделирование».
          Гукасян Лусинэ Суреновна ˗ старший преподаватель кафедры Прикладная
          математика ДГТУ, заместитель декана факультета Информатика и
          вычислительная техника ДГТУ.
        </span>
      </div>
      <div className={block("text-block")}>
        <span className={block("text-block-title")}>
          Структурное подразделение
        </span>
        <span className={block("text-block-content")}>
          Кафедра Прикладная математика ДГТУ
        </span>
      </div>
      <div className={block("text-block")}>
        <span className={block("text-block-title")}>
          Руководитель программы
        </span>
        <span className={block("text-block-content")}>
          Заведующий кафедрой Прикладная математика ДГТУ, доктор
          физико˗математических наук, профессор Пожарский Д.А.{" "}
        </span>
      </div>
    </div>
  );
}
