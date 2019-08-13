import React from "react";
import { SnackBar } from "./snack-bar";
import { Content } from "./content";
import classes from "./App.module.scss";
import { GlobalContextProvider } from "./context";

const whyDidYouRender = require("@welldone-software/why-did-you-render");
whyDidYouRender(React);
const App = _ => {
  console.log(`Rendering: App. \nTotal renders: ${++window.totalRenders}`);
  const reducer = (state, { type, payload }) =>
    ({
      setMessage: { ...state, message: payload },
      setProfile: { ...state, profile: payload },
      setActiveContent: { ...state, activeContent: payload }
    }[type] || state);
  const [state, dispatch] = useReducer(reducer, {
    message: String(),
    profile: { firstName: "Dan", lastName: "Abramov" },
    activeContent: window.location.pathname.split("/")[1] || "dashboard"
  });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <SnackBar />
      <div className={classes.app}>
        <Content />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
App.whyDidYouRender = true;
