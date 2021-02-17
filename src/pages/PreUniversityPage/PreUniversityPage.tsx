import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState, useCallback } from "react";
import { cn } from "../../services/helpers/classname";
import { ProgramCard } from "./components/ProgramCard";
import { useToasts } from "react-toast-notifications";

import "./styles.scss";

import { mainPrograms, IPreUniversityProgram } from "./data";
import { AnimatePresence, motion } from "framer-motion";
import { useOvermind } from "../../store";

const block = cn("pre-university-page");

const categories = [
  "Детский университет (3-14 лет)",
  "Малая академия (15-18 лет)",
  "Академия абитуриентов (15-20 лет)",
  "Родительский университет (20+)",
  "Академия третьего возраста (55+)",
];

const childUniSubcategories = ["3-7 лет", "1-4 класс", "5-8 класс"];

export function PreUniversityPage() {
  const { actions } = useOvermind();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  const [childSubcategory, setChildSubcategory] = useState<number | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const childReady = currentProject === 0 && childSubcategory !== null;

  const [currentSubcategory, setCurrentSubcategory] = useState<number | null>(
    null
  );

  const { addToast } = useToasts();

  const currentPrograms: IPreUniversityProgram[] =
    mainPrograms.filter((program) =>
      currentProject! > 0
        ? program.project === currentProject!
        : currentProject === 0 && program.subcategory === childSubcategory
    ) || [];

  useEffect(() => {
    setSelectedProgram(null);
    setChildSubcategory(null);
  }, [currentProject]);

  useEffect(() => {
    setSelectedProgram(null);
  }, [childSubcategory]);

  const load = useCallback(async () => {
    if (currentProject !== null && selectedProgram) {
      setIsLoading(true);
      await actions.preuniversity.preuniversityRequest({
        category: categories[currentProject],
        subcategory:
          childSubcategory && currentProject === 0
            ? childUniSubcategories[childSubcategory]
            : null,
        program: selectedProgram,
      });

      setIsLoading(false);
      setCurrentProject(null);

      addToast(`Заявка успешно отправлена`, {
        appearance: "success",
        autoDismiss: true,
      });
    }
  }, [
    actions.preuniversity,
    addToast,
    childSubcategory,
    currentProject,
    selectedProgram,
  ]);

  return (
    <div className={block()}>
      <span className={block("heading")}>Довузовская подготовка</span>
      <div className={block("choose-project")}>
        <div className={block("form")}>
          <FormControl component="fieldset">
            <FormLabel
              className={block("form-label").toString()}
              component="legend"
            >
              Выберите проект
            </FormLabel>
            <RadioGroup
              value={currentProject}
              onChange={(_, value) => setCurrentProject(Number(value))}
            >
              <FormControlLabel
                className={block("radio").toString()}
                control={<Radio className={block("radio-icon").toString()} />}
                label="Детский университет (3-14 лет)"
                value={0}
              />
              <FormControlLabel
                className={block("radio").toString()}
                control={<Radio className={block("radio-icon").toString()} />}
                label="Малая академия (15-18 лет)"
                value={1}
              />
              <FormControlLabel
                className={block("radio").toString()}
                control={<Radio className={block("radio-icon").toString()} />}
                label="Академия абитуриентов (15-20 лет)"
                value={2}
              />
              <FormControlLabel
                className={block("radio").toString()}
                control={<Radio className={block("radio-icon").toString()} />}
                label="Родительский университет (20+)"
                value={3}
              />
              <FormControlLabel
                className={block("radio").toString()}
                control={<Radio className={block("radio-icon").toString()} />}
                label="Академия третьего возраста (55+)"
                value={4}
              />
            </RadioGroup>
          </FormControl>
          {currentProject === 0 && (
            <FormControl component="fieldset">
              <FormLabel
                className={block("form-label").toString()}
                component="legend"
              >
                Детский университет
              </FormLabel>
              <RadioGroup
                value={childSubcategory}
                onChange={(_, value) => setChildSubcategory(Number(value))}
              >
                <FormControlLabel
                  className={block("radio").toString()}
                  control={<Radio className={block("radio-icon").toString()} />}
                  label="3-7 лет"
                  value={0}
                />
                <FormControlLabel
                  className={block("radio").toString()}
                  control={<Radio className={block("radio-icon").toString()} />}
                  label="1-4 класс"
                  value={1}
                />
                <FormControlLabel
                  className={block("radio").toString()}
                  control={<Radio className={block("radio-icon").toString()} />}
                  label="5-8 класс"
                  value={2}
                />
              </RadioGroup>
            </FormControl>
          )}
        </div>
      </div>
      {((currentProject || 0) > 0 || childReady) && (
        <motion.div
          className={block("result")}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
        >
          <div className={block("result-actions")}>
            <span className={block("result-heading")}>Выберите программу</span>
            <AnimatePresence>
              {selectedProgram && (
                <motion.div
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -4 }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={!selectedProgram || isLoading}
                    onClick={() => load()}
                  >
                    {isLoading ? "Отправка..." : "Отправить заявку"}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <AnimatePresence>
            {currentPrograms.length > 0 ? (
              <AnimatePresence>
                {currentPrograms.map((program, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <ProgramCard
                      title={program.title}
                      description={program.description}
                      selectedProgram={selectedProgram}
                      onSelect={(title) => setSelectedProgram(title)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              <motion.span
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
              >
                Нет подходящих программ
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
