import React, { useState } from "react";
export const SnackbarContext = React.createContext({});
export const SnackbarContextProvider = ({ children }) => {
  const [message, setMessage] = useState("");
  console.log(
    `Rendering: SnackbarContextProvider. \nTotal renders: ${++window.totalRenders}`
  );
  return (
    <SnackbarContext.Provider value={{ setMessage, message }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const ProfileContext = React.createContext({});
export const ProfileContextProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    firstName: "Dan",
    lastName: "Abramov"
  });
  console.log(
    `Rendering: ProfileContextProvider. \nTotal renders: ${++window.totalRenders}`
  );
  return (
    <ProfileContext.Provider value={{ setProfile, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};
