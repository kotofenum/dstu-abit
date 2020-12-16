import React, { useState } from "react";
import { cn } from "../../services/helpers/classname";
import OptionBlock from "./components/OptionBlock";

import { ReactComponent as StudentIcon } from "../../assets/svg/student.svg";
import { ReactComponent as ParentIcon } from "../../assets/svg/parent.svg";
import { ReactComponent as TeacherIcon } from "../../assets/svg/teacher.svg";

import "./styles.scss";
import { Brick } from "../../components/utility/Brick";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MaskedInput from "react-text-mask";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Gap } from "../../components/utility/Gap";
import { Checkbox } from "@material-ui/core";

const block = cn("register-page");

export function RegisterPage() {
  const [awaitingCode, setAwaitingCode] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [birthdate, setBirthdate] = useState(null);

  return (
    <div className={block()}>
      <span className={block("welcome")}>Регистрация</span>
      <Brick size={0} plusHalf />
      {showForm ? (
        <>
          <span className={block("introduction")}>
            Заполните анкету, чтобы завершить регистрацию
          </span>
          <Brick />
          <div
            style={{
              padding: "4px",
              background: "#eca448",
              color: "#ffffff",
              borderRadius: "4px",
              alignSelf: "flex-start",
            }}
          >
            Абитуриент
          </div>
          <Brick />
          <form
            className={block("form-data")}
            noValidate
            autoComplete="off"
            onSubmit={(e) => e.preventDefault()}
          >
            <Brick size={1} />
            <div
              style={{
                display: "grid",
                gridAutoFlow: "column",
                justifyContent: "space-between",
              }}
            >
              <TextField label="Фамилия" />
              {/* <Gap size={2} /> */}
              <TextField label="Имя" />
              {/* <Gap size={2} /> */}
              <TextField label="Отчество" />
            </div>
            <div
              style={{
                display: "grid",
                gridAutoFlow: "column",
                gap: "49px",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              {/* <Brick size={1} /> */}
              <div style={{ marginBottom: "8px" }}>
                <TextField label="Страна" />
              </div>
              {/* <Brick size={1} /> */}
              <div style={{ marginBottom: "8px" }}>
                <TextField label="Населенный пункт" />
              </div>
              {/* <Brick size={2} /> */}
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Дата рождения"
                  value={birthdate}
                  onChange={(v: any) => setBirthdate(v)}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div>
              <TextField
                style={{ width: "100%" }}
                label="Образовательное учреждение"
              />
            </div>

            <Brick />
            <div
              style={{
                display: "grid",
                gridAutoFlow: "column",
                justifyContent: "space-between",
              }}
            >
              <Brick />
              <TextField style={{ marginRight: "49px" }} label="E-mail" />
              {/* <Gap size={2} /> */}
              <TextField style={{ marginRight: "49px" }} label="Пароль" />
              {/* <Gap size={2} /> */}
              <TextField label="Повторите пароль" />
              <div />
            </div>
            <Brick size={4} />
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  color="primary"
                  // inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              }
              label="Я даю согласие на обработку персональных данных"
            />

            <Brick />
            <Button
              onClick={() => setShowForm(true)}
              variant="outlined"
              color="primary"
            >
              Зарегистрироваться
            </Button>
          </form>
        </>
      ) : (
        <>
          <span className={block("introduction")}>
            Создайте учетную запись на платформе, чтобы получить больше
            доступных функций.
          </span>
          <Brick size={2} />
          <span className={block("account-type")}>Тип аккаунта:</span>
          <Brick size={1} plusHalf />
          <div className={block("options")}>
            <Link to="/education/majors" style={{ textDecoration: "none" }}>
              <OptionBlock
                name="Абитуриент"
                icon={<StudentIcon />}
                color={OptionBlock.color.orange}
              />
            </Link>
            <Link
              to="/education/specialties"
              style={{ textDecoration: "none", opacity: 0.25 }}
            >
              <OptionBlock
                name="Родитель"
                icon={<ParentIcon />}
                color={OptionBlock.color.purple}
              />
            </Link>
            <Link
              to="/education/programs"
              style={{ textDecoration: "none", opacity: 0.25 }}
            >
              <OptionBlock
                name="Педагог"
                icon={<TeacherIcon />}
                color={OptionBlock.color.blue}
              />
            </Link>
          </div>
          <Brick size={3} />
          <span className={block("introduction")}>
            Для регистрации и входа на платформу используется мобильный телефон.
            Введите номер телефона и мы отправим на него СМС с кодом
            подтверждения.
          </span>
          <Brick size={1} />
          {awaitingCode ? (
            <form
              className={block("form")}
              noValidate
              autoComplete="off"
              onSubmit={(e) => e.preventDefault()}
            >
              <TextField
                label="Код подтверждения"
                InputProps={{ inputComponent: CodeMaskCustom }}
              />
              <Gap size={1} />
              <Button onClick={() => setShowForm(true)}>Подтвердить</Button>
            </form>
          ) : (
            <form
              className={block("form")}
              noValidate
              autoComplete="off"
              onSubmit={(e) => e.preventDefault()}
            >
              <TextField
                label="Номер телефона"
                InputProps={{ inputComponent: TextMaskCustom }}
              />
              <Gap size={1} />
              <Button onClick={() => setAwaitingCode(true)}>Отправить</Button>
            </form>
          )}
        </>
      )}
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
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

function CodeMaskCustom(props: any) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      guide={false}
      mask={[/\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}
