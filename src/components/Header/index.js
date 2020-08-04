import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { Container, IconButton, Link } from '@material-ui/core';
import {
  Dashboard as DashboardIcon,
  GitHub as GitHubIcon,
} from '@material-ui/icons';
import { header as headerClass } from './styled';
// Components
import SettingView from '../SettingView';
import Tooltip from '../Tooltip';
import SwitchView from '../Switch';

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

            <SwitchView width={64} height={32} />
            <div>
              <Link
                underline="none"
                component={RouteLink}
                color="textPrimary"
                to="/"
              >
                <Tooltip
                  title="Check out my respository"
                  placement="right"
                  enterDelay={500}
                  leaveDelay={200}
                  arrow
                >
                  <IconButton color="primary">
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      {/* Setting View */}
      {isOpenSetting && <SettingView />}
    </div>
  );
}

export default Header;
