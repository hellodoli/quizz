import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { settingView as settingViewClass } from './styled';
// Components
import SwitchLayoutReView from './SwitchLayoutReView';
import LayoutReview from './LayoutReview';
import SpaceLayout from './SpaceLayout';
import PreferencesLayout from './PreferencesLayout';

function SettingView() {
  console.log('SettingView - rerender');
  const classes = settingViewClass();
  const isSM = useMediaQuery((theme) => theme.breakpoints.up('sm'));
  const isMD = useMediaQuery((theme) => theme.breakpoints.up('md'));
  return (
    <div className={classes.root}>
      {/* Layout */}
      {isSM && (
        <div className={classes.item}>
          <LayoutReview />
        </div>
      )}
      {isMD && <span className="separator" />}
      {/* Switch Layout */}
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
