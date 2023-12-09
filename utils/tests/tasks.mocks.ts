import { TaskType } from "../../app/types/Task";

export const tasks: TaskType[] = [
  {
    _id: "1",
    title: "task 1",
    description: "task 1 description",
    image: "../../../public/portrait-perfection.png",
    completed: false,
    more: "task 1 bigger description",
    added: true,
  },
  {
    _id: "2",
    title: "task 2",
    description: "task 2 description",
    image: "../../../public/balancing-act.png",
    completed: true,
    more: "task 2 bigger description",
    added: true,
  },
  {
    _id: "3",
    title: "task 3",
    description: "task 3 description",
    image: "../../../public/backward-dialogue.png",
    completed: false,
    more: "task 3 bigger description",
    added: true,
  },
];

export const completedTasks: TaskType[] = [
  {
    _id: "1",
    title: "task 1",
    description: "task 1 description",
    image: "../../../public/portrait-perfection.png",
    completed: true,
    more: "task 1 bigger description",
    added: true,
  },
  {
    _id: "2",
    title: "task 2",
    description: "task 2 description",
    image: "../../../public/balancing-act.png",
    completed: true,
    more: "task 2 bigger description",
    added: true,
  },
];
