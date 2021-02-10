import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { cn } from "../../services/helpers/classname";
import { ProgramCard } from "./components/ProgramCard";

import "./styles.scss";

import { mainPrograms, IPreUniversityProgram } from "./data";
import { AnimatePresence, motion } from "framer-motion";

const block = cn("pre-university-page");

export function PreUniversityPage() {
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const currentPrograms: IPreUniversityProgram[] =
    mainPrograms.filter((program) => program.project === currentProject!) || [];

  useEffect(() => {
    setSelectedProgram(null);
  }, [currentProject]);

  return (
    <div className={block()}>
      <span className={block("heading")}>Довузовская подготовка</span>
      <div className={block("choose-project")}>
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
      </div>
      {currentProject !== null && (
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
                    disabled={!selectedProgram}
                  >
                    Отправить заявку
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
