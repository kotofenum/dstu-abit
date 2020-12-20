import React, { useEffect, useState } from "react";
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

const block = cn("login-page");

enum AccountType {
  enrolee = "enrolee",
  parent = "parent",
  teacher = "teacher",
}

export function LoginPage() {
  const [phone, setPhone] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>();
  const truncatedPhone = (phone || "").replace(/\D/g, "");

  const { actions, state } = useOvermind();

  const history = useHistory()


  useEffect(( ) => {
    actions.auth.logout()
  }, [])
  /* <pre>{JSON.stringify({lastName, firstName, patronym, country, location, birthdate, school, email, password, repeatedPassword, acceptTerms})}</pre> */

  return (
    <div className={block()}>
      <span className={block("welcome")}>Вход</span>
      <div style={{ display: "flex", flexDirection: "column", width: "360px" }}>
        <TextField
          label="Телефон"
          // value={firstName}
          InputProps={{ inputComponent: TextMaskCustom }}
          onChange={(e) => setPhone(e.target.value)}
        />
        {/* <Gap size={2} /> */}
        <Brick size={1} />
        <TextField
          label="Пароль"
          // value={patronym}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Brick size={1} plusHalf />
        <Button
          onClick={async () => {
            await actions.auth.login({
              phone: truncatedPhone!,
              password: password!,
            });
            if (state.auth.token) {
              history.push("/");
            }
          }}
          variant="outlined"
          color="primary"
        >
          Войти
        </Button>
      </div>
      <Brick size={2} />
      <span>
        Еще нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link>
      </span>
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
