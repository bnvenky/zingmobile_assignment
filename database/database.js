const sqlite3 = require('sqlite3').verbose();

// Connect to the database
const db = new sqlite3.Database('./database/colleges_database.db');

const getAllStudents = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM Students', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const getStudentById = (id) => {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM Students WHERE id = ?', [id], (err, row) => {
      if (err) {
        reject(err);
      } else {
        resolve(row);
      }
    });
  });
};

const createStudent = (student) => {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO Students (user_id, name) VALUES (?, ?)',
      [student.user_id, student.name],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      }
    );
  });
};

const updateStudent = (id, student) => {
  return new Promise((resolve, reject) => {
    db.run(
      'UPDATE Students SET user_id = ?, name = ? WHERE id = ?',
      [student.user_id, student.name, id],
      function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ changes: this.changes });
        }
      }
    );
  });
};

const deleteStudent = (id) => {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM Students WHERE id = ?', [id], function (err) {
      if (err) {
        reject(err);
      } else {
        resolve({ changes: this.changes });
      }
    });
  });
};

module.exports = { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent };
