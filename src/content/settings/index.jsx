import React, { useContext } from 'react';
import classes from './Settings.module.scss';
import { GlobalContext } from '../../context';

export const Settings = _ => {
  const {
    state: { profile },
    dispatch
  } = useContext(GlobalContext);
  const handleProfileChange = field => e =>
    dispatch({ type: 'setProfile', payload: { ...profile, [field]: e.target.value } });
  return (
    <div className={classes.root}>
      <div className={classes.header}>Settings</div>
      <div className={classes.divider} />
      <div className={classes.contentArea}>
        <div className={classes.settingHeader}>Settings</div>
        <div className={classes.formItem}>
          <label>First Name</label>
          <input type="text" value={profile.firstName} onChange={handleProfileChange('firstName')} />
        </div>
        <div className={classes.formItem}>
          <label>Last Name</label>
          <input type="text" value={profile.lastName} onChange={handleProfileChange('lastName')} />
        </div>
      </div>
    </div>
  );
};
