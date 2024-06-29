import * as SQLite from "expo-sqlite";

async function createTaskTable(db: SQLite.SQLiteDatabase) {
  await db.execAsync(`
          CREATE TABLE IF NOT EXISTS task (
              id INTEGER PRIMARY KEY NOT NULL, 
              title TEXT NOT NULL, 
              status TEXT NOT NULL, 
              dueDate TEXT NOT NULL
          );
  
          INSERT INTO task (title, status, dueDate) VALUES ('Buy groceries', 'low', '2024-07-10T08:00:00');
          INSERT INTO task (title, status, dueDate) VALUES ('Walk the dog', 'medium', '2024-07-12T14:30:00');
          INSERT INTO task (title, status, dueDate) VALUES ('Complete project', 'high', '2024-07-15T18:00:00');
          INSERT INTO task (title, status, dueDate) VALUES ('Read a book', 'high', '2024-07-08T10:15:00');
          INSERT INTO task (title, status, dueDate) VALUES ('Exercise', 'high', '2024-07-20T16:45:00');
      `);
}

export async function initDatabase(db: SQLite.SQLiteDatabase) {
  await db.execAsync("PRAGMA foreign_keys = ON");
  await createTaskTable(db);
}
