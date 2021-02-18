import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Checkbox,
  Button,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { cn } from "../../services/helpers/classname";
import { useOvermind } from "../../store";
import { ICity, ICountry, ICountryCities } from "../RegisterPage/RegisterPage";

import countriesJson from "../RegisterPage/countries.json";
import citiesJson from "../RegisterPage/cities.json";

import "./styles.scss";
import MaskedInput from "react-text-mask";
import { Brick } from "../../components/utility/Brick";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { ru } from "date-fns/locale";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import { AchievementCard } from "../AchievementsIntroPage/components/AchievementCard";
import { useHistory } from "react-router-dom";
import { TagRelationType } from "../../store/graphql-global-types";
import { AutocompleteOption } from "../../components/SearchBar/components/AutocompleteOption";

const block = cn("application-draft-page");

const countries: ICountry[] = countriesJson;
const cities: ICountryCities = citiesJson;

interface SearchResultItem {
  uid: string;
  title: string;
  type: TagRelationType;
}

export function ApplicationDraftPage() {
  const { state, actions } = useOvermind();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [results, setResuls] = useState<SearchResultItem[]>([]);

  useEffect(() => {
    const job = async () => {
      setIsLoading(true);
      await actions.programs.getPrograms();
      await actions.specialties.getSpecialties();
      await actions.majors.getMajors();

      const data: SearchResultItem[] = [];
      state.programs.list.forEach((program) =>
        data.push({
          uid: program.uid,
          title: program.title,
          type: TagRelationType.program,
        })
      );
      state.specialties.list.forEach((specialty) =>
        data.push({
          uid: specialty.uid,
          title: specialty.title,
          type: TagRelationType.specialty,
        })
      );
      state.majors.list.forEach((major) =>
        data.push({
          uid: major.uid,
          title: major.title,
          type: TagRelationType.major,
        })
      );
      setResuls(data);
      setIsLoading(false);
    };

    job();
  }, [
    actions.majors,
    actions.programs,
    actions.specialties,
    state.majors.list,
    state.programs.list,
    state.specialties.list,
  ]);

  const routeToItem = (item: SearchResultItem) => {
    // switch (item.type) {
    //   case TagRelationType.program: {
    //     history.push(`/education/programs/${item.uid}`);
    //     break;
    //   }
    //   case TagRelationType.specialty: {
    //     history.push(`/education/specialties/${item.uid}`);
    //     break;
    //   }
    //   case TagRelationType.major: {
    //     history.push(`/education/majors/${item.uid}`);
    //     break;
    //   }
    // }
  };

  const [citizenship, setCitizenship] = useState<ICountry | null>(null);
  const [snils, setSnils] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [foreignLang, setForeignLang] = useState<string | null>(null);
  const [idType, setIdType] = useState<string | null>(null);
  const [idSerial, setIdSerial] = useState<string | null>(null);
  const [idNumber, setIdNumber] = useState<string | null>(null);
  const [idDate, setIdDate] = useState(null);
  const [idIssuer, setIdIssuer] = useState<string | null>(null);
  const [additionalPhone, setAdditionalPhone] = useState<string | null>(null);
  const [zipCode, setZipCode] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [educationForm, setEducationForm] = useState<string | null>(null);
  const [educationDocType, setEducationDocType] = useState<string | null>(null);
  const [educationDocSerial, setEducationDocSerial] = useState<string | null>(
    null
  );
  const [educationDocNumber, setEducationDocNumber] = useState<string | null>(
    null
  );
  const [educationDocDate, setEducationDocDate] = useState(null);
  const [graduationYear, setGraduationYear] = useState<string | null>(null);
  const [educationName, setEducationName] = useState<string | null>(null);
  const [dormNeeded, setDormNeeded] = useState<string | null>(null);
  const [winner, setWinner] = useState<boolean>(false);
  const [sportWinner, setSportWinner] = useState<boolean>(false);
  const [orphan, setOrphan] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [veteran, setVeteran] = useState<boolean>(false);
  const [priorityRight, setPriorityRight] = useState<string | null>(null);
  const [hundredRight, setHundredRight] = useState<string | null>(null);
  const [diplomaRight, setDiplomaRight] = useState<string | null>(null);

  const [first, setFirst] = useState<SearchResultItem | null>(null);
  const [second, setSecond] = useState<SearchResultItem | null>(null);
  const [third, setThird] = useState<SearchResultItem | null>(null);

  const [showSecond, setShowSecond] = useState<boolean>(true);
  const [showThird, setShowThird] = useState<boolean>(true);

  const [total, setTotal] = useState<number>(0);

  // useEffect(() => {
  //   setTotal(0);
  //   if (first) {
  //     setTotal(total + 1);
  //   }
  //   if (second) {
  //     setTotal(total + 1);
  //   }
  //   if (third) {
  //     setTotal(total + 1);
  //   }
  // }, [first, second, third, total]);

  const [achievements, setAchievements] = useState<
    { name: string; reward: number }[]
  >([]);

  useEffect(() => {
    const achievements = localStorage.getItem("ach") || "{}";
    const arr = JSON.parse(achievements) || {};
    const ar = Object.keys(arr).map((key) => ({
      name: arr[key].label,
      reward: arr[key].reward,
    }));
    setAchievements(ar);
  }, []);

  useEffect(() => {
    if (state.auth.user) {
      console.log(state.auth.user);
      const country = countries.find(
        (country) => country.name === state.auth.user?.country
      );
      if (country) {
        setCitizenship(country);
      }
    }
  }, [state.auth.user]);

  const save = useCallback(() => {}, []);

  return (
    <div className={block()}>
      <span className={block("heading")}>
        Черновик заявления в приемную комиссию
      </span>
      <span className={block("subheading")}>Персональные данные</span>
      {state.auth.user && (
        <div className={block("personal")}>
          <TextField
            label="Фамилия"
            value={state.auth.user?.lastName}
            disabled
          />
          <TextField label="Имя" value={state.auth.user?.firstName} disabled />
          <TextField
            label="Отчество"
            value={state.auth.user?.patronym}
            disabled
          />
          <TextField
            label="Дата рождения"
            value={moment(state.auth.user?.birthDate).format("DD.MM.YYYY")}
            disabled
          />
          <Autocomplete
            options={countries}
            value={citizenship}
            getOptionLabel={(option) => option.name}
            onChange={(_, value) => setCitizenship(value)}
            renderInput={(params) => (
              <TextField label="Гражданство" {...params} />
            )}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Пол</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              value={gender}
              onChange={(_, value) => setGender(value)}
              row
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Мужской"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Женский"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            label="СНИЛС"
            InputProps={{ inputComponent: TextMaskCustom }}
            value={snils}
            onChange={(e) => setSnils(e.target.value)}
          />
          <TextField
            label="Изучаемый иностранный язык"
            value={foreignLang}
            onChange={(e) => setForeignLang(e.target.value)}
          />
        </div>
      )}
      <Brick size={2} />
      <span className={block("subheading")}>
        Документ, удостоверяющий личность
      </span>
      <div className={block("identification")}>
        <TextField
          label="Вид документа"
          value={idType}
          onChange={(e) => setIdType(e.target.value)}
        />
        <TextField
          label="Серия"
          value={idSerial}
          onChange={(e) => setIdSerial(e.target.value)}
        />
        <TextField
          label="Номер"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />
        <MuiPickersUtilsProvider locale={ru} utils={DateFnsUtils}>
          <KeyboardDatePicker
            // disableToolbar
            // variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Дата выдачи"
            defaultValue="2000-01-01T00:00"
            value={idDate}
            onChange={(v: any) => setIdDate(v)}
            helperText={null}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          label="Кем выдан"
          value={idIssuer}
          onChange={(e) => setIdIssuer(e.target.value)}
        />
      </div>
      <span className={block("subheading")}>Контактные данные</span>
      <div className={block("contacts")}>
        {state.auth.user && (
          <TextField
            label="Номер телефона"
            InputProps={{ inputComponent: PhoneMask }}
            value={state.auth.user?.phone}
            disabled
          />
        )}
        <TextField
          label="Дополнительный телефон"
          InputProps={{ inputComponent: PhoneMask }}
          value={additionalPhone}
          onChange={(e) => setAdditionalPhone(e.target.value)}
        />
        {state.auth.user && (
          <TextField label="E-mail" disabled value={state.auth.user.email} />
        )}
        <TextField
          label="Индекс"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
        <TextField
          label="Подробный почтовый адрес"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <span className={block("subheading")}>Поступление</span>
      <div className={block("enrolling")}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Форма набора</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="form"
            value={educationForm}
            onChange={(_, value) => setEducationForm(value)}
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Бюджетные места (на общих основаниях)"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Целевое обучение"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Места для лиц, имеющих особое право"
            />
          </RadioGroup>
        </FormControl>
        {/* <span>Заполнено {first && !second &&} из 3 возможных</span> */}
        <Autocomplete
          options={results}
          getOptionLabel={(option) => option.title}
          loading={isLoading}
          noOptionsText="Нет результатов"
          loadingText="Загрузка..."
          renderOption={(option) => (
            <AutocompleteOption
              title={option.title}
              type={option.type}
              searchInput={searchInput || ""}
            />
          )}
          onChange={(_, value) => setFirst(value)}
          renderInput={(params) => (
            <TextField
              label="Выбор образовательной программы/направления/УГН (приоритет)"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              {...params}
            />
          )}
        />
        {showSecond && (
          <Autocomplete
            options={results}
            getOptionLabel={(option) => option.title}
            loading={isLoading}
            noOptionsText="Нет результатов"
            loadingText="Загрузка..."
            renderOption={(option) => (
              <AutocompleteOption
                title={option.title}
                type={option.type}
                searchInput={searchInput || ""}
              />
            )}
            onChange={(_, value) => setSecond(value)}
            renderInput={(params) => (
              <TextField
                label="Выбор образовательной программы/направления/УГН"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                {...params}
              />
            )}
          />
        )}
        {showThird && (
          <Autocomplete
            options={results}
            getOptionLabel={(option) => option.title}
            loading={isLoading}
            noOptionsText="Нет результатов"
            loadingText="Загрузка..."
            renderOption={(option) => (
              <AutocompleteOption
                title={option.title}
                type={option.type}
                searchInput={searchInput || ""}
              />
            )}
            onChange={(_, value) => setThird(value)}
            renderInput={(params) => (
              <TextField
                label="Выбор образовательной программы/направления/УГН"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                {...params}
              />
            )}
          />
        )}
      </div>
      <span className={block("subheading")}>Образование</span>
      <div className={block("enrolling")}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Документ об образовании</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="form"
            value={educationDocType}
            onChange={(_, value) => setEducationDocType(value)}
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Аттестат о среднем общем образовании"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Диплом о начальном профессиональном образовании, подтверждающий получение среднего
              (полного) общего образования), либо диплом, полученный на базе среднего (полного) общего
              образования"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Диплом о среднем профессиональном образовании"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="Диплом о высшем образовании"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Серия"
          value={educationDocSerial}
          onChange={(e) => setEducationDocSerial(e.target.value)}
        />
        <TextField
          label="Номер"
          value={educationDocNumber}
          onChange={(e) => setEducationDocNumber(e.target.value)}
        />
        <MuiPickersUtilsProvider locale={ru} utils={DateFnsUtils}>
          <KeyboardDatePicker
            // disableToolbar
            // variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Дата выдачи"
            defaultValue="2000-01-01T00:00"
            value={educationDocDate}
            onChange={(v: any) => setEducationDocDate(v)}
            helperText={null}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField
          label="Год окончания обучения"
          value={graduationYear}
          onChange={(e) => setGraduationYear(e.target.value)}
        />
        <TextField
          label="Учебное заведение"
          value={educationName}
          onChange={(e) => setEducationName(e.target.value)}
        />
      </div>
      <span className={block("subheading")}>Дополнительно</span>
      <div className={block("other")}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Нуждаемость в общежитии</FormLabel>
          <RadioGroup
            aria-label="dormNeeded"
            name="dormNeeded"
            value={dormNeeded}
            onChange={(_, value) => setDormNeeded(value)}
            row
          >
            <FormControlLabel value="yes" control={<Radio />} label="Да" />
            <FormControlLabel value="no" control={<Radio />} label="Нет" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Право на прием без вступительных испытаний
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={winner}
                onChange={(_, value) => setWinner(value)}
              />
            }
            label="Победители и призеры всероссийской олимпиады"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={sportWinner}
                onChange={(_, value) => setSportWinner(value)}
              />
            }
            label="Чемпионы и призеры в области спорта (для направления 49.03.01 Физическая культура)"
          />
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Право на прием на обучение за счет бюджетных ассигнований в рамках
            контрольных цифр на основании особых прав
          </FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={orphan}
                onChange={(_, value) => setOrphan(value)}
              />
            }
            label="Дети-сироты и дети, оставшиеся без попечения родителей"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={disabled}
                onChange={(_, value) => setDisabled(value)}
              />
            }
            label="Дети-инвалиды, инвалиды 1 и 2 групп, инвалиды с детства"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={veteran}
                onChange={(_, value) => setVeteran(value)}
              />
            }
            label="Ветераны боевых действий"
          />
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Преимущественное право</FormLabel>
          <RadioGroup
            value={priorityRight}
            onChange={(_, value) => setPriorityRight(value)}
            row
          >
            <FormControlLabel value="yes" control={<Radio />} label="Да" />
            <FormControlLabel value="no" control={<Radio />} label="Нет" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">Право на 100 баллов</FormLabel>
          <RadioGroup
            value={hundredRight}
            onChange={(_, value) => setHundredRight(value)}
            row
          >
            <FormControlLabel value="yes" control={<Radio />} label="Да" />
            <FormControlLabel value="no" control={<Radio />} label="Нет" />
          </RadioGroup>
        </FormControl>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            Имею диплом бакалавра, специалиста, магистра
          </FormLabel>
          <RadioGroup
            value={diplomaRight}
            onChange={(_, value) => setDiplomaRight(value)}
            row
          >
            <FormControlLabel value="yes" control={<Radio />} label="Да" />
            <FormControlLabel value="no" control={<Radio />} label="Нет" />
          </RadioGroup>
        </FormControl>
      </div>
      <span className={block("subheading")}>Индивидуальные достижения</span>
      {achievements.map((achievement) => (
        <>
          <AchievementCard
            key={achievement.name}
            name={achievement.name}
            reward={achievement.reward}
          />
          <Brick size={2} />
        </>
      ))}
      <Button variant="outlined" color="primary" onClick={save}>
        Сохранить
      </Button>
    </div>
  );
}

function TextMaskCustom(props: any) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      guide={false}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

function PhoneMask(props: any) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      guide={false}
      mask={[
        "+",
        /\d/,
        " ",
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}
