import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  LinearProgress,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { cn } from "../../services/helpers/classname";

import "./styles.scss";

const block = cn("achievement-form-page");

const UpdateStep = (props: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  useEffect(() => {
    props.setStep(props.step);
  }, [props, props.step]);

  return null;
};

export function AchievementFormPage() {
  const { path } = useRouteMatch();

  const [competitionCategory, setCompetitionCategory] = useState<number | null>(
    null
  );
  const [competitionSubject, setCompetitionSubject] = useState<number | null>(
    null
  );
  const [competitionStage, setCompetitionStage] = useState<number | null>(null);
  const [competitionResult, setCompetitionResult] = useState<number | null>(
    null
  );

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [filename, setFilename] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const totalSteps = 5;

  const subjects = [
    "Информатика",
    "Математика",
    "Английский язык",
    "Астрономия",
    "Биология",
    "География",
    "История",
    "Китайский язык",
    "Литература",
    "Немецкий язык",
    "Немецкий язык",
    "Обществознание",
    "Право",
    "Русский язык",
    "Физика",
    "Французский язык",
    "Химия",
    "Экология",
    "Экономика",
  ];

  const stages = [
    "Школьный этап",
    "Районный (муниципальный) этап",
    "Региональный этап",
    "Заключительный этап",
  ];

  const result = ["участник", "I место", "II место", "III место"];

  return (
    <div className={block()}>
      <span className={block("heading")}>
        Добавление индивидуального достижения
      </span>
      <span>
        Шаг {currentStep} из {totalSteps}
      </span>
      <LinearProgress
        variant="determinate"
        value={(currentStep / totalSteps) * 100}
      />
      <div className={block("content")}>
        <Switch>
          <Route exact path={`${path}/file`}>
            <div className={block("file")}>
              <input
                className={block("file-input")}
                ref={inputRef}
                type="file"
                onChange={(e: ChangeEvent) => {
                  const target = e.target as HTMLInputElement;

                  const files = target.files;
                  if (files?.length) {
                    const file = files[0];
                    setFilename(file?.name);
                  } else {
                    return null;
                  }
                }}
              />
              <div
                className={block("file-card")}
                onClick={() => inputRef.current?.click()}
              >
                {filename ||
                  "Загрузите скан или фотографию подтверждающего документа (JPG, PNG, PDF), максимальный размер файла – 10 МБ».)"}
              </div>
            </div>
          </Route>
          <Route exact path={`${path}/step/1`}>
            <FormControl component="fieldset">
              <UpdateStep step={1} setStep={setCurrentStep} />
              <FormLabel
                className={block("form-label").toString()}
                component="legend"
              >
                Выберите тип олимпиады
              </FormLabel>
              <RadioGroup
                value={competitionCategory}
                onChange={(_, value) => setCompetitionCategory(Number(value))}
              >
                <FormControlLabel
                  className={block("radio").toString()}
                  control={<Radio className={block("radio-icon").toString()} />}
                  label="Всероссийская олимпиада школьников 2017– 2021 гг."
                  value={1}
                />
                <FormControlLabel
                  className={block("radio").toString()}
                  control={<Radio className={block("radio-icon").toString()} />}
                  label="Олимпиада из перечня Министерства науки и высшего образования 2017– 2021 гг."
                  value={2}
                />
              </RadioGroup>
              {/* <FormHelperText></FormHelperText> */}
            </FormControl>
          </Route>
          <Route exact path={`${path}/step/2`}>
            <FormControl component="fieldset">
              <UpdateStep step={2} setStep={setCurrentStep} />
              <FormLabel
                className={block("form-label").toString()}
                component="legend"
              >
                Выберите предмет
              </FormLabel>
              <RadioGroup
                value={competitionSubject}
                onChange={(_, value) => setCompetitionSubject(Number(value))}
              >
                {subjects.map((subject, idx) => (
                  <FormControlLabel
                    className={block("radio").toString()}
                    control={
                      <Radio className={block("radio-icon").toString()} />
                    }
                    label={subject}
                    value={idx + 1}
                  />
                ))}
              </RadioGroup>
              {/* <FormHelperText></FormHelperText> */}
            </FormControl>
          </Route>
          <Route exact path={`${path}/step/3`}>
            <FormControl component="fieldset">
              <UpdateStep step={3} setStep={setCurrentStep} />
              <FormLabel
                className={block("form-label").toString()}
                component="legend"
              >
                Выберите этап олимпиады
              </FormLabel>
              <RadioGroup
                value={competitionStage}
                onChange={(_, value) => setCompetitionStage(Number(value))}
              >
                {stages.map((stage, idx) => (
                  <FormControlLabel
                    className={block("radio").toString()}
                    control={
                      <Radio className={block("radio-icon").toString()} />
                    }
                    label={stage}
                    value={idx + 1}
                  />
                ))}
              </RadioGroup>
              {/* <FormHelperText></FormHelperText> */}
            </FormControl>
          </Route>
          <Route exact path={`${path}/step/4`}>
            <FormControl component="fieldset">
              <UpdateStep step={4} setStep={setCurrentStep} />
              <FormLabel
                className={block("form-label").toString()}
                component="legend"
              >
                Выберите результат
              </FormLabel>
              <RadioGroup
                value={competitionResult}
                onChange={(_, value) => setCompetitionResult(Number(value))}
              >
                {result.map((res, idx) => (
                  <FormControlLabel
                    className={block("radio").toString()}
                    control={
                      <Radio className={block("radio-icon").toString()} />
                    }
                    label={res}
                    value={idx + 1}
                  />
                ))}
              </RadioGroup>
              {/* <FormHelperText></FormHelperText> */}
            </FormControl>
          </Route>
          <Route exact path={`${path}/step/5`}>
            <UpdateStep step={5} setStep={setCurrentStep} />
            <div className={block("file")}>
              <input
                className={block("file-input")}
                ref={inputRef}
                type="file"
                onChange={(e: ChangeEvent) => {
                  const target = e.target as HTMLInputElement;

                  const files = target.files;
                  if (files?.length) {
                    const file = files[0];
                    setFilename(file?.name);
                  } else {
                    return null;
                  }
                }}
              />
              <div
                className={block("file-card")}
                onClick={() => inputRef.current?.click()}
              >
                {filename ||
                  "Загрузите скан или фотографию подтверждающего документа (JPG, PNG, PDF), максимальный размер файла – 10 МБ».)"}
              </div>
            </div>
          </Route>
          <Redirect
            exact
            path="/achievements/category/:id/form"
            to={`${path}/step/1`}
          />
        </Switch>
      </div>
      <div className={block("actions")}>
        <Link
          to={`${
            currentStep < totalSteps ? currentStep + 1 : "/achievements/intro"
          }`}
        >
          <Button
            variant="contained"
            color="primary"
            // disabled={!achievementCategory}
          >
            {currentStep < totalSteps ? "Далее" : "Сохранить"}
          </Button>
        </Link>
        {/* <Link to="/achievements/intro">
          <Button variant="outlined" color="primary">
            Вернуться к заполненным достижениям
          </Button>
        </Link> */}
      </div>
    </div>
  );
}
