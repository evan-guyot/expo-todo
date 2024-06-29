import { Task } from "../interfaces/task";

export const tasks: Task[] = [
  {
    id: "1",
    title: "Buy groceries",
    status: "low",
    dueDate: new Date("2024-07-10T08:00:00"),
  },
  {
    id: "2",
    title: "Walk the dog",
    status: "medium",
    dueDate: new Date("2024-07-12T14:30:00"),
  },
  {
    id: "3",
    title: "Complete project",
    status: "high",
    dueDate: new Date("2024-07-15T18:00:00"),
  },
  {
    id: "4",
    title: "Read a book",
    status: "high",
    dueDate: new Date("2024-07-08T10:15:00"),
  },
  {
    id: "5",
    title: "Exercise",
    status: "high",
    dueDate: new Date("2024-07-20T16:45:00"),
  },
];
