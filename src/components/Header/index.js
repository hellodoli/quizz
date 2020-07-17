import React, { useState } from 'react';
import { Container, IconButton } from '@material-ui/core';
import { Dashboard as DashboardIcon } from '@material-ui/icons';
import { header as headerClass } from './styled';
// Components
import SettingView from '../SettingView';

function Header() {
  const classes = headerClass();
  const [isOpenSetting, setIsOpenSetting] = useState(true);

  const toggleSettingView = () => {
    setIsOpenSetting(!isOpenSetting);
  };

  return (
    <div>
      <div className={classes.headerRoot}>
        <Container>
          <div className={classes.wrapp}>
            <IconButton edge="start" onClick={toggleSettingView}>
              <DashboardIcon fontSize="small" />
            </IconButton>
          </div>
        </Container>
      </div>
      {isOpenSetting && <SettingView />}
    </div>
  );
}

export default Header;
