import React, { useReducer } from 'react';

export const GlobalContext = React.createContext({});

const reducer = (state, { type, payload }) =>
  ({
    setMessage: { ...state, message: payload },
    setProfile: { ...state, profile: payload },
    setActiveContent: { ...state, activeContent: payload }
  }[type] || state);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    message: String(),
    profile: { firstName: 'Jonathan', lastName: 'Rose' },
    activeContent: window.location.pathname.split('/')[1] || 'dashboard'
  });
  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};
