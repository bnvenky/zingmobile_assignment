const express = require('express');
const bodyParser = require('body-parser');
const authenticateJWT = require('./middleware/auth');
const { canAccessStudent, validateRoleForCollege } = require('./middleware/authorization');
const { getAllStudentsController, getStudentByIdController, createStudentController, updateStudentController, deleteStudentController } = require('./controllers/studentController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Authentication middleware
app.use(authenticateJWT);

// Routes
app.get('/students', getAllStudentsController);
app.get('/students/:id', canAccessStudent, getStudentByIdController);
app.post('/students', validateRoleForCollege, createStudentController);
app.put('/students/:id', canAccessStudent, updateStudentController);
app.delete('/students/:id', canAccessStudent, deleteStudentController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
