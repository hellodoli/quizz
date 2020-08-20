import React, { useState } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, IconButton, Link } from '@material-ui/core';
import {
  Dashboard as DashboardIcon,
  GitHub as GitHubIcon,
  Bookmark as BookmarkIcon,
  Home as HomeIcon,
} from '@material-ui/icons';
import { changeTypePreferences } from '../../actions/options';
import { getPreferencesBookmark } from '../../selector/options';
import { header as headerClass } from './styled';
// Components
import SettingView from '../SettingView';
import Tooltip from '../Tooltip';
import SwitchView from '../Switch';

const WrapperSettingView = React.memo(({ isOpenSetting }) => {
  if (!isOpenSetting) return null;
  return <SettingView />;
});

function Header() {
  console.log('Header re-render');
  const dispatch = useDispatch();
  const bookmark = useSelector(getPreferencesBookmark);
  const { value } = bookmark;
  const classes = headerClass();
  const [isOpenSetting, setIsOpenSetting] = useState(false);

  const toggleSettingView = () => {
    setIsOpenSetting(!isOpenSetting);
  };

  const toggleBookmarkView = () => {
    const pre = { key: 'bookmark', value: !value };
    dispatch(changeTypePreferences(pre));
  };

  return (
    <div>
      <div className={classes.headerRoot}>
        <Container maxWidth={false}>
          <div className={classes.wrapp}>
            <div>
              <Link
                component={RouteLink}
                underline="none"
                color="textPrimary"
                to="/quizzs"
              >
                <IconButton edge="start" color="primary">
                  <HomeIcon fontSize="small" />
                </IconButton>
              </Link>
              <IconButton onClick={toggleSettingView}>
                <DashboardIcon fontSize="small" />
              </IconButton>
            </div>

            {/* Boomark Switch */}
            <Tooltip
              title="Show your bookmarks"
              placement="bottom"
              enterDelay={500}
              leaveDelay={200}
              arrow
            >
              <div>
                <SwitchView
                  isActive={value}
                  width={48}
                  height={24}
                  barIcon={() => <BookmarkIcon fontSize="small" />}
                  onClick={toggleBookmarkView}
                />
              </div>
            </Tooltip>

            {/* Personal Link */}
            <div>
              <Link
                component={RouteLink}
                underline="none"
                color="textPrimary"
                to={{ pathname: 'https://github.com/hellodoli/quizz' }}
                target="_blank"
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
      <WrapperSettingView isOpenSetting={isOpenSetting} />
    </div>
  );
}

export default Header;
