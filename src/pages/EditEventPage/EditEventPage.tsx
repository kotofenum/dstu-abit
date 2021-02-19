import React, { useCallback, useEffect, useState } from "react";
import { cn } from "../../services/helpers/classname";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DateTimePicker,
} from "@material-ui/pickers";
import { ru } from "date-fns/locale";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import "./styles.scss";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import moment from "moment";
import { EventType, ModuleType } from "../../store/graphql-global-types";
import { eventTypes } from "../../types/eventTypes";
import { moduleTypeLocal } from "../../types/ModuleType";
import { useOvermind } from "../../store";
import { useHistory, useRouteMatch } from "react-router-dom";

const block = cn("add-event-page");

const moduleLocales = {
  admissionsCampaign: "Приемная комиссия",
  dstuOnline: "ДГТУ-Онлайн",
  futureTour: "Экскурсии в будущее",
  helloFaculty: "Привет, факультет!",
  preUniversity: "Довуз",
  sportLeisureMore: "Спорт, досуг и не только...",
  talents: "Таланты",
};

export function EditEventPage() {
  const { state, actions } = useOvermind();
  const history = useHistory();

  const { params } = useRouteMatch();
  const eventId = (params as any)["id"] as string;

  const [title, setTitle] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [type, setType] = useState<EventType | null>(EventType.consultation);
  const [module, setModule] = useState<ModuleType | null>(ModuleType.admissionsCampaign);
  const [reward, setReward] = useState<number | null>(null);
  const [places, setPlaces] = useState<number | null>(null);
  const [link, setLink] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  useEffect(() => {
    actions.events.getEvent(eventId);
  }, [actions.events, eventId]);

  useEffect(() => {
    const event = state.events.currentEvent;
    if (event) {
      if (event.title) {
        setTitle(event.title);
      }
      if (event.startsAt) {
        setStartDate(event.startsAt);
      }
      if (event.endsAt) {
        setEndDate(event.endsAt);
      }
      if (event.type) {
        setType(event.type);
      }
      if (event.module) {
        setModule(event.module);
      }
      if (event.reward) {
        setReward(event.reward);
      }
      if (event.limit) {
        setPlaces(event.limit);
      }
      if (event.link) {
        setLink(event.link);
      }
      if (event.description) {
        setDescription(event.description);
      }
    }
  }, [state.events.currentEvent]);

  useEffect(() => {
    if (startDate) {
      setEndDate(moment(startDate).add(1, "hour").toDate());
    }
  }, [startDate]);

  const editEvent = useCallback(async () => {
    const event = await actions.events.editEvent({
      eventId: eventId!,
      title: title!,
      description: description,
      type: type!,
      module: module!,
      link: link,
      reward: reward,
      limit: places,
      startsAt: startDate,
      endsAt: endDate,
    });

    history.push(`/events/${event.uid}`);
  }, [actions.events, description, endDate, eventId, history, link, module, places, reward, startDate, title, type]);

  return (
    <div className={block()}>
      <span className={block("heading")}>Редактирование события</span>
      {state.events.currentEvent ? (
        <div className={block("form")}>
          <TextField
            label="Название мероприятия"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <MuiPickersUtilsProvider locale={ru} utils={DateFnsUtils}>
            <DateTimePicker
              ampm={false}
              format="dd.MM.yyyy, HH:mm"
              label="Время начала"
              value={startDate}
              onChange={(v: any) => setStartDate(v)}
            />
          </MuiPickersUtilsProvider>
          <MuiPickersUtilsProvider locale={ru} utils={DateFnsUtils}>
            <DateTimePicker
              ampm={false}
              format="dd.MM.yyyy, HH:mm"
              label="Время окончания"
              value={endDate}
              onChange={(v: any) => setEndDate(v)}
            />
          </MuiPickersUtilsProvider>
          <FormControl>
            <InputLabel>Тип мероприятия</InputLabel>
            <Select
              value={type}
              onChange={(e) => setType(e.target.value as EventType)}
            >
              {Object.values(EventType).map((type) => (
                <MenuItem value={EventType[type]}>
                  {(eventTypes as any)[type]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Модуль</InputLabel>
            <Select
              value={module}
              onChange={(e) => setModule(e.target.value as ModuleType)}
            >
              {Object.values(ModuleType).map((module) => (
                <MenuItem value={ModuleType[module]}>
                  {(moduleLocales as any)[module]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Баллы"
            type="number"
            value={reward}
            onChange={(e) => setReward(Number(e.target.value))}
          />
          <TextField
            label="Количество мест"
            type="number"
            value={places}
            onChange={(e) => setPlaces(Number(e.target.value))}
          />
          <TextField
            label="Ссылка"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <TextField
            style={{ marginTop: "16px" }}
            id="outlined-basic"
            label="Описание"
            variant="outlined"
            value={description}
            multiline
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button variant="outlined" color="primary" onClick={editEvent}>
            Сохранить
          </Button>
        </div>
      ) : null}
    </div>
  );
}
