const { getRoleForCollege } = require('./database/colleges_database.db');

const canAccessStudent = async (req, res, next) => {
  const { userId } = req.user;
  const { id } = req.params;

  try {
    // Fetch the student's college ID from the database
    const student = await getStudentById(id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    const studentCollegeId = student.college_id;

    // Fetch the user's role for the student's college
    const userRole = await getRoleForCollege(userId, studentCollegeId);

    // Check user's role and permissions
    if (userRole === 'super_admin' || userRole === 'admin' || userRole === 'teacher') {
      return next();
    }

    // If the user is not authorized, return forbidden error
    return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error('Error checking access:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const validateRoleForCollege = async (req, res, next) => {
  const { userId, collegeId, role } = req.user;

  try {
    // Fetch the user's role for the specified college
    const userRole = await getRoleForCollege(userId, collegeId);

    // Check user's role and permissions
    // For simplicity, assuming any authenticated user can write data for any college
    if (userRole === 'super_admin' || userRole === 'admin') {
      return next();
    }

    // If the user is not authorized, return forbidden error
    return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error('Error validating role for college:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { canAccessStudent, validateRoleForCollege };
