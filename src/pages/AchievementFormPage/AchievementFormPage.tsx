import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  LinearProgress,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { FileBlock } from "./blocks/FileBlock";
import { ListBlock } from "./blocks/ListBlock";
import { PlaceBlock } from "./blocks/PlaceBlock";
import { StageBlock } from "./blocks/StageBlock";
import { SubjectBlock } from "./blocks/SubjectBlock";

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

enum FormType {
  fileOnly = "fileOnly",
  fullForm = "fullForm",
  listStageResult = "listStageResult",
  stageResult = "stageResult",
  listResult = "listResult",
}

export function AchievementFormPage() {
  const { path, params } = useRouteMatch();

  const categoryId = Number((params as { id: Number }).id);

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

  const [formType, setFormType] = useState<FormType>(FormType.fileOnly);

  const [currentStep, setCurrentStep] = useState<number>(1);

  const [totalSteps, setTotalSteps] = useState<number>(1);

  useEffect(() => {
    if (
      (categoryId >= 1 && categoryId <= 4) ||
      (categoryId >= 8 && categoryId <= 9)
    ) {
      setFormType(FormType.fileOnly);
    } else if (categoryId === 5) {
      setFormType(FormType.fullForm);
    } else if (categoryId === 6) {
      setFormType(FormType.listStageResult);
    } else if (categoryId === 7) {
      setFormType(FormType.stageResult);
    }
  }, [categoryId]);

  useEffect(() => {
    switch (formType) {
      case FormType.fileOnly: {
        setTotalSteps(1);
        break;
      }
      case FormType.fullForm: {
        setTotalSteps(5);
        break;
      }
      case FormType.listStageResult: {
        setTotalSteps(4);
        break;
      }
      case FormType.stageResult: {
        setTotalSteps(3);
        break;
      }
    }
  }, [formType]);

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
            <FileBlock />
          </Route>
          <Route exact path={`${path}/step/1`}>
            <UpdateStep step={1} setStep={setCurrentStep} />
            {formType === FormType.fileOnly ? (
              <FileBlock />
            ) : formType === FormType.listResult ||
              formType === FormType.listStageResult ? (
              <FormControl component="fieldset">
                <ListBlock />
              </FormControl>
            ) : formType === FormType.stageResult ? (
              <FormControl component="fieldset">
                <StageBlock type={1} />
              </FormControl>
            ) : (
              <FormControl component="fieldset">
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
                    control={
                      <Radio className={block("radio-icon").toString()} />
                    }
                    label="Всероссийская олимпиада школьников 2017– 2021 гг."
                    value={1}
                  />
                  <FormControlLabel
                    className={block("radio").toString()}
                    control={
                      <Radio className={block("radio-icon").toString()} />
                    }
                    label="Олимпиада из перечня Министерства науки и высшего образования 2017– 2021 гг."
                    value={2}
                  />
                </RadioGroup>
              </FormControl>
            )}
          </Route>
          <Route exact path={`${path}/step/2`}>
            <FormControl component="fieldset">
              <UpdateStep step={2} setStep={setCurrentStep} />
              {formType === FormType.fullForm ? (
                competitionCategory === 1 ? (
                  <SubjectBlock />
                ) : (
                  <ListBlock />
                )
              ) : formType === FormType.stageResult ? (
                <PlaceBlock />
              ) : (
                <StageBlock type={1} />
              )}
            </FormControl>
          </Route>
          <Route exact path={`${path}/step/3`}>
            <FormControl component="fieldset">
              <UpdateStep step={3} setStep={setCurrentStep} />
              {formType === FormType.fullForm ? (
                <StageBlock type={competitionCategory === 1 ? 0 : 1} />
              ) : formType === FormType.stageResult ? (
                <FileBlock />
              ) : (
                <PlaceBlock />
              )}
            </FormControl>
          </Route>
          <Route exact path={`${path}/step/4`}>
            <FormControl component="fieldset">
              <UpdateStep step={4} setStep={setCurrentStep} />
              {formType === FormType.fullForm ? <PlaceBlock /> : <FileBlock />}
            </FormControl>
          </Route>
          <Route exact path={`${path}/step/5`}>
            <UpdateStep step={5} setStep={setCurrentStep} />
            <FileBlock />
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
