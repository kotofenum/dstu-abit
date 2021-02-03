import React from "react";
import { cn } from "../../services/helpers/classname";

import "./styles.scss";

const block = cn("notifications");

interface NotificationItemProps {
  notification: INotification;
}

export function NotificationItem(props: NotificationItemProps) {
  return (
    <div className={block("item")}>
      <span className={block("date")}>
        {props.notification.date.toLocaleDateString()}
      </span>
      <span className={block("text")}>{props.notification.text}</span>
    </div>
  );
}

interface INotification {
  text: string;
  link?: string;
  date: Date;
}

export function Notifications() {
  const notifications: INotification[] = [
    {
      text: "Добро пожаловать на платформу Абитуриент ДГТУ!",
      date: new Date("2020-04-01"),
    },
    {
      text:
        "Заполните дополнительные поля в профиле, чтобы получить доступ к регистрации на мероприятия.",
      date: new Date("2020-04-01"),
    },
    {
      text:
        "Скоро в ДГТУ День открытых дверей! Приходите, чтобы узнать больше о будущем образовании.",
      date: new Date("2020-04-01"),
    },
  ];

  return (
    <div className={block()}>
      {notifications.reverse().map((notification) => (
        <NotificationItem notification={notification} />
      ))}
    </div>
  );
}
