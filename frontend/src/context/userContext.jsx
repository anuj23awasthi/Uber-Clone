import React, { createContext, useState } from 'react';

// Create the context
export const UserDataContext = createContext();

// Define the UserContext component
const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    fullName: {
      firstName: '',
      lastName: ''
    }
  });

  return (
    <UserDataContext.Provider value={[user, setUser]}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
