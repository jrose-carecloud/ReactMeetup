import React from "react";
import { SnackBar } from "./snack-bar";
import { Content } from "./content";
import classes from "./App.module.scss";
import { GlobalContextProvider } from "./context";

const whyDidYouRender = require("@welldone-software/why-did-you-render");
whyDidYouRender(React);

const App = _ => (
  <GlobalContextProvider>
    <SnackBar />
    <div className={classes.app}>
      <Content />
    </div>
  </GlobalContextProvider>
);

export default App;
App.whyDidYouRender = true;
