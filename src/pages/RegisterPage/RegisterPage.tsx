import React, { useState } from "react";
import { cn } from "../../services/helpers/classname";
import OptionBlock from "./components/OptionBlock";

import { ReactComponent as StudentIcon } from "../../assets/svg/student.svg";
import { ReactComponent as ParentIcon } from "../../assets/svg/parent.svg";
import { ReactComponent as TeacherIcon } from "../../assets/svg/teacher.svg";

import "./styles.scss";
import { Brick } from "../../components/utility/Brick";
import { Link, useHistory } from "react-router-dom";

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

import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Gap } from "../../components/utility/Gap";
import { Checkbox } from "@material-ui/core";
import { useOvermind } from "../../store";

const block = cn("register-page");

enum AccountType {
  enrolee = "enrolee",
  parent = "parent",
  teacher = "teacher",
}

export function RegisterPage() {
  const [awaitingCode, setAwaitingCode] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);

  const [accountType, setAccountType] = useState<AccountType | null>(null);

  const [phone, setPhone] = useState<string | null>(null);
  const truncatedPhone = (phone || "").replace(/\D/g, "");

  const [code, setCode] = useState<string | null>(null);

  const [lastName, setLastName] = useState<string | null>();
  const [firstName, setFirstName] = useState<string | null>();
  const [patronym, setPatronym] = useState<string | null>();
  const [country, setCountry] = useState<string | null>();
  const [location, setLocation] = useState<string | null>();
  const [birthdate, setBirthdate] = useState(null);
  const [school, setSchool] = useState<string | null>();
  const [email, setEmail] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();
  const [repeatedPassword, setRepeatedPassword] = useState<string | null>();
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

  const [position, setPosition] = useState<string | null>(null);
  const [child, setChild] = useState<string | null>(null);

  const { actions, state } = useOvermind();

  const history = useHistory();

  const baseValidation =
    lastName &&
    firstName &&
    patronym &&
    country &&
    location &&
    birthdate &&
    school &&
    email &&
    password &&
    repeatedPassword &&
    acceptTerms;

  const validation =
    accountType === AccountType.parent
      ? baseValidation && child
      : accountType === AccountType.teacher
      ? baseValidation && position
      : baseValidation;

  /* <pre>{JSON.stringify({lastName, firstName, patronym, country, location, birthdate, school, email, password, repeatedPassword, acceptTerms})}</pre> */

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
              background:
                accountType === AccountType.enrolee
                  ? "#eca448"
                  : accountType === AccountType.parent
                  ? "#7e64ed"
                  : "#4b92cb",
              color: "#ffffff",
              borderRadius: "4px",
              alignSelf: "flex-start",
            }}
          >
            {accountType === AccountType.enrolee && <>Абитуриент</>}
            {accountType === AccountType.parent && <>Родитель</>}
            {accountType === AccountType.teacher && <>Педагог</>}
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
              <TextField
                label="Фамилия"
                // value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {/* <Gap size={2} /> */}
              <TextField
                label="Имя"
                // value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {/* <Gap size={2} /> */}
              <TextField
                label="Отчество"
                // value={patronym}
                onChange={(e) => setPatronym(e.target.value)}
              />
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
                <TextField
                  label="Страна"
                  // value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              {/* <Brick size={1} /> */}
              <div style={{ marginBottom: "8px" }}>
                <TextField
                  label="Населенный пункт"
                  // value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
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
            {accountType !== AccountType.parent ? (
              <div>
                <TextField
                  style={{ width: "100%" }}
                  label="Образовательное учреждение"
                  // value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
              </div>
            ) : (
              <div>
                <TextField
                  style={{ width: "100%" }}
                  label="ФИО ребенка"
                  // value={school}
                  onChange={(e) => setChild(e.target.value)}
                />
              </div>
            )}
            {accountType === AccountType.teacher && (
              <div>
                <TextField
                  style={{ width: "100%" }}
                  label="Должность"
                  // value={school}
                  onChange={(e) => setPosition(e.target.value)}
                />
              </div>
            )}

            <Brick />
            <div
              style={{
                display: "grid",
                gridAutoFlow: "column",
                justifyContent: "space-between",
              }}
            >
              <Brick />
              <TextField
                style={{ marginRight: "49px" }}
                label="E-mail"
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <Gap size={2} /> */}
              <TextField
                style={{ marginRight: "49px" }}
                label="Пароль"
                // value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <Gap size={2} /> */}
              <TextField
                label="Повторите пароль"
                // value={repeatedPassword}
                onChange={(e) => setRepeatedPassword(e.target.value)}
              />
              <div />
            </div>
            <Brick size={4} />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  value={acceptTerms}
                  // inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              }
              label="Я даю согласие на обработку персональных данных"
              onChange={(e, checked) => setAcceptTerms(checked)}
            />

            <Brick />
            <Button
              onClick={async () => {
                await actions.auth.updateUser({
                  firstName: firstName!,
                  lastName: lastName!,
                  patronym: patronym!,
                  birthDate: birthdate!,
                  country: country!,
                  locality: location!,
                  email: email!,
                  pwd: password!,
                  school: school,
                  child: child,
                });
                history.push("/");
                setShowForm(true);
              }}
              disabled={!validation}
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
            <div
              style={{
                textDecoration: "none",
                opacity:
                  !accountType || accountType === AccountType.enrolee
                    ? 1
                    : 0.25,
                transition: "0.3s",
              }}
              onClick={() => setAccountType(AccountType.enrolee)}
            >
              <OptionBlock
                name="Абитуриент"
                icon={<StudentIcon />}
                color={OptionBlock.color.orange}
              />
            </div>
            <div
              style={{
                textDecoration: "none",
                opacity:
                  !accountType || accountType === AccountType.parent ? 1 : 0.25,
                transition: "0.3s",
              }}
              onClick={() => setAccountType(AccountType.parent)}
            >
              <OptionBlock
                name="Родитель"
                icon={<ParentIcon />}
                color={OptionBlock.color.purple}
              />
            </div>
            <div
              style={{
                textDecoration: "none",
                opacity:
                  !accountType || accountType === AccountType.teacher
                    ? 1
                    : 0.25,
                transition: "0.3s",
              }}
              onClick={() => setAccountType(AccountType.teacher)}
            >
              <OptionBlock
                name="Педагог"
                icon={<TeacherIcon />}
                color={OptionBlock.color.blue}
              />
            </div>
          </div>
          {!!accountType && (
            <>
              <Brick size={3} />
              <span className={block("introduction")}>
                Для регистрации и входа на платформу используется мобильный
                телефон. Введите номер телефона и мы отправим на него СМС с
                кодом подтверждения.
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
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                  <Gap size={1} />
                  <Button
                    onClick={async () => {
                      await actions.auth.confirmCode({
                        phone: truncatedPhone,
                        code: code!,
                      });
                      if (state.auth.token) {
                        setShowForm(true);
                      }
                    }}
                  >
                    Подтвердить
                  </Button>
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Gap size={1} />
                  <Button
                    onClick={() => {
                      actions.auth.sendCode({
                        phone: truncatedPhone,
                        type: accountType,
                      });
                      setAwaitingCode(true);
                    }}
                  >
                    Отправить
                  </Button>
                </form>
              )}
            </>
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
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}
