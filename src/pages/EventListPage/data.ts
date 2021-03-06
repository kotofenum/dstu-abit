import { IEventCardProps } from "./components/EventCard/EventCard";

const data = [
  {
    title: "Встреча с руководством",
    description:
      "Приоткроем закулисье работы в современных медиа, познакомим с возможностями стажировки в компаниях-партнерах ДГТУ, в игровой форме проведем ваш первый репортаж; обучение на МКиМТ — это современные методологии, талантливые единомышленники и обширные ресурсы ВУЗа для раскрытия вашего творческого потенциала",
    date: new Date(),
    timeRange: "10:00 — 11:00",
    type: "Презентация",
    placesLeft: 14,
    reward: 5,
    tags: ["МКМТ"],
  },
  {
    title: "Мастер-класс по веб-разработке",
    description:
      "Свой сайт с нуля? Легко! На мастер-классе ты познакомишься с базовыми технологиями веб-разработки. Приходи и узнай, как вставить видео из YouTube на свой сайт и сделать анимацию своей страницы с помощью CSS.",
    date: new Date(),
    timeRange: "14:00 — 16:00",
    place: "8-й корпус, ауд. 318",
    type: "Мастер-класс",
    placesLeft: 2,
    userIsJoined: true,
    reward: 10,
    tags: ["Разработка"],
  },
] as IEventCardProps[];

export default data;
