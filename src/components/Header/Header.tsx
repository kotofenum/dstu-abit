import React from "react";
import { cn } from "../../services/helpers/classname";

import { ReactComponent as BellIcon } from "../../assets/svg/bell.svg";

import "./styles.scss";
import { Link } from "react-router-dom";
import { Gap } from "../utility/Gap";
import { useOvermind } from "../../store";

const block = cn("header");

interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const { actions, state } = useOvermind();

  return (
    <div className={block()}>
      <Link to="/" className={block("logo")}>
        <img alt="Логотип" src="/logo.png" />
      </Link>
      <div className={block("user-panel")}>
        <div className={block("notifications")}>
          <BellIcon />
        </div>
        {state.auth.token ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/profile" className={block("username")}>{state.auth.username}</Link>
            {/* <div className={block("userpic")} /> */}
            <Gap size={2} />
            <span
              onClick={() => actions.auth.logout()}
              className={block("exit")}
            >
              Выйти
            </span>
          </div>
        ) : (
          <>
            <Link to="/register" className={block("register")}>
              Регистрация
            </Link>
            <Gap size={2} />
            <Link to="/login" className={block("login")}>
              Вход
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
