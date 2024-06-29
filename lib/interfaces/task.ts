export interface Task {
  id: string;
  title: string;
  status: "low" | "medium" | "high";
  dueDate: Date;
}
