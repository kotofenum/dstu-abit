import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Slider,
} from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";
import { ProgramsWithSubjects_programsWithSubjects } from "../../store/programs/effects/gql/graphql-types/ProgramsWithSubjects";
import { Subjects_subjects } from "../../store/programs/effects/gql/graphql-types/Subjects";
import { ProgramCard } from "./components/PrrogramCard";
import { IProgramSubject } from "./components/PrrogramCard/ProgramCard";

import "./styles.scss";

const block = cn("calculator-page");

interface ISubject {
  uid: number;
  title: string;
}

const subjects: ISubject[] = [
  {
    uid: 1,
    title: "Математика",
  },
  {
    uid: 2,
    title: "Русский язык",
  },
  {
    uid: 3,
    title: "Физика",
  },
  {
    uid: 4,
    title: "Химия",
  },
  {
    uid: 5,
    title: "Информатика",
  },
  {
    uid: 6,
    title: "Биология",
  },
  {
    uid: 7,
    title: "История",
  },
  {
    uid: 8,
    title: "Обществознание",
  },
  {
    uid: 9,
    title: "Литература",
  },
  {
    uid: 10,
    title: "География",
  },
  {
    uid: 11,
    title: "Иностранный язык",
  },
  {
    uid: 12,
    title: "Физическая культура",
  },
  {
    uid: 13,
    title: "Специальная графика",
  },
  {
    uid: 14,
    title: "Рисунок",
  },
];

interface ISubjectResults {
  [key: string]: number;
}

interface ISelectedSubjects {
  [key: string]: boolean;
}

export function CalculatorPage() {
  const { actions, state } = useOvermind();
  const [educationForm, setEducationForm] = useState<number | null>(null);

  const [selectedSubjects, setSelectedSubjects] = useState<ISelectedSubjects>(
    {}
  );
  const [results, setResults] = useState<ISubjectResults>({});

  const toggleSubject = useCallback(
    (subject: Subjects_subjects, value: boolean) => {
      setFilteredPrograms([]);
      setSelectedSubjects({
        ...selectedSubjects,
        [subject.uid]: value,
      });
      if (!value) {
        const { [subject.uid]: _, ...newResults } = results;
        setResults(newResults);
      }
    },
    [selectedSubjects, results]
  );

  const updateResults = useCallback(
    (subject: Subjects_subjects, value: number) => {
      setFilteredPrograms([]);
      setResults({ ...results, [subject.uid]: value });
    },
    [results]
  );

  useEffect(() => {
    actions.programs.getSubjects();
  });

  useEffect(() => {
    // TODO: стирать результаты поиска при уходе со странице или изменении параметров
  }, []);

  const mapSubjects = useCallback(
    (program: ProgramsWithSubjects_programsWithSubjects) => {
      const requiredMappedSubjects: IProgramSubject[] = program.subjects
        .filter((subject) => subject.required)
        .map((subject) => ({
          title: subject.subject.title,
          minScore: subject.score,
          scored: results[subject.subject.uid] >= subject.score,
        }));

      const optionalMappedSubjects: IProgramSubject[] = program.subjects
        .filter((subject) => !subject.required)
        .map((subject) => ({
          title: subject.subject.title,
          minScore: subject.score,
          scored: results[subject.subject.uid] >= subject.score,
        }));

      return {
        required: requiredMappedSubjects,
        optional: optionalMappedSubjects,
      };
    },
    [results]
  );

  const [filteredPrograms, setFilteredPrograms] = useState<
    ProgramsWithSubjects_programsWithSubjects[]
  >([]);

  const filter = useCallback(() => {
    const filteredPrograms = state.programs.listWithSubjects
      .filter(
        (program) =>
          (educationForm === 0 && program.fullTimeForm) ||
          (educationForm === 1 && program.mixedForm) ||
          (educationForm === 2 && program.extramuralForm)
      )
      .filter((program) =>
        program.subjects
          .filter((subject) => subject.required)
          .every((subject) => results[subject.subject.uid] >= subject.score)
      );
    setFilteredPrograms(filteredPrograms);
  }, [educationForm, results, state.programs.listWithSubjects]);

  // const requiredSubjects: IProgramSubject[] = state.programs.listWithSubjects.map

  useEffect(() => {
    setFilteredPrograms([]);
  }, [educationForm]);

  return (
    <div className={block()}>
      <span className={block("heading")}>Калькулятор ЕГЭ</span>
      <div className={block("education-form-block")}>
        <FormControl component="fieldset">
          <FormLabel
            className={block("form-label").toString()}
            component="legend"
          >
            Выберите форму обучения
          </FormLabel>
          <RadioGroup
            value={educationForm}
            onChange={(_, value) => setEducationForm(Number(value))}
          >
            <FormControlLabel
              className={block("radio").toString()}
              control={<Radio className={block("radio-icon").toString()} />}
              label="Очная"
              value={0}
            />
            <FormControlLabel
              className={block("radio").toString()}
              control={<Radio className={block("radio-icon").toString()} />}
              label="Заочная"
              value={1}
            />
            <FormControlLabel
              className={block("radio").toString()}
              control={<Radio className={block("radio-icon").toString()} />}
              label="Очно-заочная"
              value={2}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <AnimatePresence>
        {educationForm !== null && (
          <motion.div
            className={block("subjects-block")}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            {/* <FormControl component="fieldset"> */}
            <FormLabel
              className={block("form-label").toString()}
              component="legend"
            >
              Укажите баллы по предметам
            </FormLabel>
            <RadioGroup
              value={educationForm}
              onChange={(_, value) => setEducationForm(Number(value))}
            >
              {state.programs.subjects.map((subject) => (
                <div className={block("option-row")} key={subject.uid}>
                  <FormControlLabel
                    className={block("checkbox").toString()}
                    control={<Checkbox />}
                    label={subject.title}
                    value={selectedSubjects[subject.uid]}
                    onChange={(_, value) => toggleSubject(subject, value)}
                  />
                  {selectedSubjects[subject.uid] ? (
                    <Grid
                      className={block("slider").toString()}
                      container
                      spacing={2}
                      alignItems="center"
                    >
                      <Grid item>
                        <Input
                          value={results[subject.uid] || 0}
                          margin="dense"
                          onChange={(e) =>
                            updateResults(subject, Number(e.target.value))
                          }
                          // onBlur={handleBlur}
                          inputProps={{
                            step: 10,
                            min: 0,
                            max: 100,
                            type: "number",
                            "aria-labelledby": "input-slider",
                          }}
                        />
                      </Grid>
                      <Grid item xs>
                        <Slider
                          value={results[subject.uid] || 0}
                          onChange={(_, value) =>
                            updateResults(subject, Number(value))
                          }
                          aria-labelledby="input-slider"
                        />
                      </Grid>
                    </Grid>
                  ) : null}
                </div>
              ))}
            </RadioGroup>
            {/* </FormControl> */}
            <AnimatePresence>
              {!!Object.values(selectedSubjects).some((value) => !!value) && (
                <motion.div
                  className={block("actions")}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={async () => {
                      await actions.programs.getProgramsWithSubjects();
                      filter();
                    }}
                  >
                    Показать образовательные программы
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
      {!!filteredPrograms?.length && (
        <div className={block("results")}>
          <span className={block("results-heading")}>
            Подходящие образовательные программы ({filteredPrograms.length})
          </span>
          {filteredPrograms.map((program) => (
            <Link key={program.uid} to={`/education/programs/${program.uid}`}>
              <ProgramCard
                title={program.title}
                minScore={163}
                requiredSubjects={mapSubjects(program).required}
                optionalSubjects={mapSubjects(program).optional}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
