import React, { useContext, memo } from "react";
import classes from "./Content.module.scss";
import { SideNav } from "./side-nav";
import { Form } from "./form";
import { Settings } from "./settings";
import { GlobalContext } from "../context";

export const Content = memo(_ => {
  const {
    state: { activeContent },
  } = useContext(GlobalContext);
  return (
    <div className={classes.content}>
      <div className={classes.sideNavWrapper}>
        <SideNav />
      </div>
      <div className={classes.formWrapper}>
        {
          {
            dashboard: <div>Dashboard</div>,
            financials: <div>Financials</div>,
            profile: <div>Profile</div>,
            settings: <Settings />,
            form: <Form />,
          }[activeContent]
        }
      </div>
    </div>
  );
});

Content.whyDidYouRender = true;
