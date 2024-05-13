const { getAllStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('./database/colleges_database.db');

const getAllStudentsController = async (req, res) => {
  try {
    const students = await getAllStudents();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getStudentByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await getStudentById(id);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error('Error fetching student by id:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createStudentController = async (req, res) => {
  const studentData = req.body;
  try {
    const result = await createStudent(studentData);
    res.status(201).json({ id: result.id, message: 'Student created successfully' });
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateStudentController = async (req, res) => {
  const { id } = req.params;
  const studentData = req.body;
  try {
    const result = await updateStudent(id, studentData);
    if (result.changes > 0) {
      res.json({ message: `Student with id ${id} updated successfully` });
    } else {
      res.status(404).json({ error: `Student with id ${id} not found` });
    }
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteStudentController = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteStudent(id);
    if (result.changes > 0) {
      res.json({ message: `Student with id ${id} deleted successfully` });
    } else {
      res.status(404).json({ error: `Student with id ${id} not found` });
    }
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAllStudentsController, getStudentByIdController, createStudentController, updateStudentController, deleteStudentController };
