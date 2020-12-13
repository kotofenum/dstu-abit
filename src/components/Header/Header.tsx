import React from "react";
import { cn } from "../../services/helpers/classname";

import { ReactComponent as BellIcon } from "../../assets/svg/bell.svg";

import "./styles.scss";

const block = cn("header");

interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <div className={block()}>
      <div className={block("logo")}>
        <img alt="Логотип" src="/logo.png" />
      </div>
      <div className={block("user-panel")}>
        <div className={block("notifications")}>
          <BellIcon />
        </div>
        <div className={block("userpic")} />
      </div>
    </div>
  );
}
