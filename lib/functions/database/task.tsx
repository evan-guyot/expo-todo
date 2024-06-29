import { Task } from "@/lib/interfaces/task";
import * as SQLite from "expo-sqlite";

interface TaskDatabase {
  id: number;
  title: string;
  status: "low" | "medium" | "high";
  dueDate: string;
}

export async function getAllTasks(db: SQLite.SQLiteDatabase): Promise<Task[]> {
  const allRows = (await db.getAllAsync(
    "SELECT * FROM task"
  )) as TaskDatabase[];

  return allRows.map(
    (row) =>
      ({
        id: row.id.toString(),
        title: row.title,
        status: row.status,
        dueDate: new Date(row.dueDate),
      } as Task)
  );
}
