import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../services/helpers/classname";

import "./styles.scss";

const block = cn("achievement-category-page");

export function AchievementCategoryPage() {
  const [achievementCategory, setAchievementCategory] = useState<number | null>(
    null
  );
  return (
    <div className={block()}>
      <span className={block("heading")}>
        Добавление индивидуального достижения
      </span>
      <FormControl component="fieldset">
        <FormLabel
          className={block("form-label").toString()}
          component="legend"
        >
          Выберете категорию достижения
        </FormLabel>
        <RadioGroup
          value={achievementCategory}
          onChange={(_, value) => setAchievementCategory(Number(value))}
        >
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label="Наличие статуса чемпиона и призера Олимпийских игр, Паралимпийских игр и Сурдлимпийских игр, чемпиона мира, чемпиона Европы, победителя первенства мира, первенства Европы по видам спорта, включенным в программы Олимпийских игр, Паралимпийских игр и Сурдлимпийских игр"
            value={1}
          />
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label="Наличие золотого значка, полученного за результаты сдачи норм физкультурного комплекса «Готов к труду и обороне» 2020-2021 годах"
            value={2}
          />
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label="Наличие аттестата о среднем общем образовании с отличием или диплома СПО с отличием"
            value={3}
          />
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label="Осуществление волонтерской (добровольческой) деятельности"
            value={4}
          />
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label="Участие и (или) результаты участия в олимпиадах школьников (не используемые для получения
              особых прав и (или) особого преимущества при поступлении на обучение по конкретным условиям
              поступления)"
            value={5}
          />
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label="Участие и (или) результаты участия в мероприятиях, включенных в перечень, утвержденный
            Минпросвещения России в соответствии с п. 4 Правил выявления детей, проявивших выдающиеся способности и сопровождения их дальнейшего развития, утвержденных постановлением Правительства РФ от 17 ноября 2015 г. No 1239"
            value={6}
          />
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label="Победители и призеры физкультурных мероприятий и конкурсов военно-патриотической направленности 2017-2021 годов"
            value={7}
          />
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label="Победители чемпионата по профессиональному мастерству среди инвалидов и лиц с ограниченными возможностями здоровья «Абилимпикс»"
            value={8}
          />
          <FormControlLabel
            className={block("radio").toString()}
            control={<Radio className={block("radio-icon").toString()} />}
            label="Итоговое сочинение выпускников 2021 года"
            value={9}
          />
        </RadioGroup>
        {/* <FormHelperText></FormHelperText> */}
      </FormControl>
      <div className={block("actions")}>
        <Button variant="contained" color="primary" disabled={!achievementCategory}>
          Далее
        </Button>
        <Link to="/achievements/intro">
          <Button variant="outlined" color="primary">
            Вернуться к заполненным достижениям
          </Button>
        </Link>
      </div>
    </div>
  );
}
