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
      <div className={block("logo")}>
        <img alt="Логотип" src="/logo.png" />
      </div>
      <div className={block("user-panel")}>
        {/* <div className={block("notifications")}>
          <BellIcon />
        </div> */}
        {state.auth.token ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <span className={block("username")}>Христо Александр</span>
            {/* <div className={block("userpic")} /> */}
            <Gap size={2} />
            <Link to="/logout" className={block("exit")}>
              Выйти
            </Link>
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
