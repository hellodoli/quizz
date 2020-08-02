import React from 'react';
import { settingView as settingViewClass } from './styled';
// Components
import SwitchLayoutReView from './SwitchLayoutReView';
import LayoutReview from './LayoutReview';
import SpaceLayout from './SpaceLayout';
import PreferencesLayout from './PreferencesLayout';

function SettingView() {
  console.log('SettingView - rerender');
  const classes = settingViewClass();
  return (
    <div className={classes.root}>
      <LayoutReview />
      <div className="separator" />
      {/* Layout */}
      <div className={classes.item}>
        <div className={classes.itemTitle}>LAYOUT</div>
        <div className={classes.itemBody}>
          <SwitchLayoutReView />
        </div>
      </div>
      {/* Spaciness */}
      <div className={classes.item}>
        <div className={classes.itemTitle}>SPACINESS</div>
        <div className={classes.itemBody}>
          <SpaceLayout />
        </div>
      </div>
      {/* Preferences */}
      <div className={classes.item}>
        <div className={classes.itemTitle}>Preferences</div>
        <div className={classes.itemBody}>
          <PreferencesLayout />
        </div>
      </div>
    </div>
  );
}

export default SettingView;
