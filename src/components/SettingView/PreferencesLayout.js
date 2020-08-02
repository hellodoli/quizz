import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import { getOptions } from '../../selector/options';
import { changeTypePreferences } from '../../actions/options';
import { preChangeDLTheme } from '../../actions/theme';

import { preferencesLayout as preferencesLayoutClass } from './styled';
// Components
import SwitchView from '../Switch';

const PreferenceItem = ({ id, value, name, handleChangePre }) => {
  const classes = preferencesLayoutClass();
  return (
    <div className={classes.root}>
      <div className={classes.switch}>
        <SwitchView
          width={35}
          height={16}
          leftIcon={false}
          rightIcon={false}
          isActive={value}
          onClick={() => handleChangePre(id, value)}
        />
      </div>
      <Typography variant="body1">{name}</Typography>
    </div>
  );
};

const PreferencesLayout = (props) => {
  console.log('PreferencesLayout re-render');
  const {
    options: { preferences },
    changeTypePreferences,
    preChangeDLTheme,
  } = props;
  const preferencesArr = Object.values(preferences);

  const handleChangePre = (id, value) => {
    const pre = { key: id, value: !value };
    if (id === 'dlTheme') {
      const dlTheme = !value ? 'light' : 'dark';
      preChangeDLTheme(pre, dlTheme);
    } else {
      changeTypePreferences(pre);
    }
  };

  return (
    <>
      {preferencesArr.map((pre) => (
        <PreferenceItem
          {...pre}
          key={pre.id}
          handleChangePre={handleChangePre}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  options: getOptions(state),
});

const mapDispatchToProps = {
  changeTypePreferences,
  preChangeDLTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesLayout);
