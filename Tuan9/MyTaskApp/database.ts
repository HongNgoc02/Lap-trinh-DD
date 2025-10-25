import * as SQLite from 'expo-sqlite';

// Định nghĩa kiểu dữ liệu cho User
export type Task = {
  id: number;
  title: string;
  done: 0|1;
};
export type User = {
  id: number;
  name: string;
};
// Mở (hoặc tạo) cơ sở dữ liệu
// Dùng API mới (Promise-based)
const db = SQLite.openDatabaseSync('tasks.db');

// Hàm khởi tạo bang
export const initDB = async() => {
    await db.execAsync(`
    PRAGMA journal_mode=WAL;
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      done INTEGER DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS user (
      id INTEGER PRIMARY KEY DEFAULT 1,
      name TEXT 
    );
  `);

};
// --- Các hàm CRUD (Create, Read, Update, Delete) ---

// Lấy tất cả công việc
export const getTasks = async (): Promise<Task[]> => {
  return await db.getAllAsync<Task>('SELECT * FROM tasks;');
};

// Thêm công việc
export const addTask = async (title: string) => {
  await db.runAsync('INSERT INTO tasks (title) VALUES (?);', title);
};

// Cập nhật trạng thái 'done'
export const updateTaskDone = async (id: number, done: 0 | 1) => {
  await db.runAsync('UPDATE tasks SET done = ? WHERE id = ?;', done, id);
};

// Lưu tên người dùng
export const saveUser = async (name: string) => {
  // Dùng "REPLACE" để ghi đè nếu đã tồn tại id=1
  await db.runAsync('REPLACE INTO user (id, name) VALUES (1, ?);', name);
};

// Lấy tên người dùng
export const getUser = async (): Promise<User | null> => {
  return await db.getFirstAsync<User>('SELECT * FROM user WHERE id = 1;');
};