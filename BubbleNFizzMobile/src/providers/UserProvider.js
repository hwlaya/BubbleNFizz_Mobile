import React, { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  const [userPoll, setUserPoll] = useState([]);
  return (
    <UserContext.Provider
      value={{
        user,
        userProfile,
        userPoll,
        setUser,
        setUserProfile,
        setUserPoll,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
