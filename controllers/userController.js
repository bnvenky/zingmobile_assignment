const getRoleForCollege = async (userId) => {
    // Assuming predefined roles for simplicity
    const predefinedRoles = {
      1: 'SuperAdmin',
      2: 'Admin',
      3: 'Teacher',
      4: 'Student'
    };
  
    // Check if the user ID exists in the predefined roles
    if (userId in predefinedRoles) {
      return predefinedRoles[userId];
    } else {
      return 'Student';
    }
  };
  
  module.exports = { getRoleForCollege };
  