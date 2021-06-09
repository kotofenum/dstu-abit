import { Button } from "@material-ui/core";
import React from "react";
import { cn } from "../../services/helpers/classname";

import "./styles.scss";

const block = cn("banner");

export function Banner() {
  return (
    <span className={block()}>
      <a
        style={{ color: "inherit", textDecoration: "none" }}
        href="https://online.donstu.ru"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="contained" color="primary">
          Подать заявление
        </Button>
      </a>
    </span>
  );
}
