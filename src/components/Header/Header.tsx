import React from "react";
import { cn } from "../../services/helpers/classname";

import { ReactComponent as BellIcon } from "../../assets/svg/bell.svg";
import { ReactComponent as AdminIcon } from "../../assets/svg/admin.svg";

import "./styles.scss";
import { Link } from "react-router-dom";
import { Gap } from "../utility/Gap";
import { useOvermind } from "../../store";
import { Button } from "@material-ui/core";

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
        {state.auth.token && state.auth.isAdmin && (
          <div className={block("admin")}>
            <Link to="/admin/users">
              <AdminIcon />
            </Link>
          </div>
        )}
        {state.auth.token && (
          <div className={block("notifications")}>
            <BellIcon
              onClick={() =>
                actions.ui.toggleNotifications(!state.ui.notificationsOpened)
              }
            />
          </div>
        )}
        {state.auth.token ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="/profile" className={block("username")}>
              {state.auth.username}
            </Link>
            {/* <div className={block("userpic")} /> */}
            <Gap size={2} />
            <Button
              variant="outlined"
              color="primary"
              onClick={() => actions.auth.logout()}
            >
              Выйти
            </Button>
          </div>
        ) : (
          <>
            <Link to="/register">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => actions.auth.logout()}
              >
                Регистрация
              </Button>
            </Link>
            <Gap size={1} />
            <Link to="/login">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => actions.auth.logout()}
              >
                Вход
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
