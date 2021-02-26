import { Button } from "@material-ui/core";
import React from "react";
import { cn } from "../../services/helpers/classname";

import "./styles.scss";

const block = cn("achievement-approval-page");

export function AchievementApprovalPage() {
  return (
    <div className={block()}>
      <span className={block("heading")}>Подтвверждение достижения</span>
      <span className={block("option")}>
        <span className={block("option-name")}>Заявитель:</span>
        <span className={block("option-value")}>
          Христо Александр Александрович
        </span>
      </span>
      <span className={block("option")}>
        <span className={block("option-name")}>Категория:</span>
        <span className={block("option-value")}>
          Победители и призеры физкультурных мероприятий и конкурсов
          военно-патриотической направленности 2017-2021 годов
        </span>
      </span>
      <span className={block("option")}>
        <span className={block("option-name")}>Статус:</span>
        <span className={block("option-value")}>Заполнено</span>
      </span>
      <div className={block("content")}>
        <span className={block("subheading")}>Содержание</span>
        <span className={block("content-option")}>
          <span className={block("content-option-name")}>Этап олимпиады</span>
          <span className={block("content-option-value")}>
            Республиканский (федеральный) этап
          </span>
        </span>
        <span className={block("content-option")}>
          <span className={block("content-option-name")}>Результат</span>
          <span className={block("content-option-value")}>II место</span>
        </span>
        <span className={block("content-option")}>
          <span className={block("content-option-name")}>Документ</span>
          <a href="yandex.ru">
            <span className={block("content-option-value")}>Грамота.pdf</span>
          </a>
        </span>
      </div>
      <div className={block("actions")}>
        <Button variant="contained" color="primary">
          Подтвердить подлинность
        </Button>
        <Button variant="outlined" color="secondary">
          Отклонить
        </Button>
      </div>
    </div>
  );
}
