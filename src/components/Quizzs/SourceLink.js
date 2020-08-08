import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouteLink } from 'react-router-dom';
import { Link, IconButton } from '@material-ui/core';
import { AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import { OUT_SOURCE } from '../../constants/outSource';
// Components
import Tooltip from '../Tooltip';

const getSourceName = (rootS, ss) => {
  const s = rootS || ss;
  if (s) {
    const sources = Object.keys(OUT_SOURCE);
    const curSource = sources.find((item) => s.includes(item));
    if (curSource) return OUT_SOURCE[curSource];
    return OUT_SOURCE.unknow;
  }
  return OUT_SOURCE.unknow;
};

function SourceLink({
  source,
  rootSource,
  // for IconButton
  iconButtonProps,
  iconProps,
  ...other
}) {
  const sourceName = getSourceName(rootSource, source);
  const LinkWrapper = ({ children }) => {
    if (sourceName === OUT_SOURCE.unknow) return <>{children}</>;
    return (
      <Link
        underline="none"
        component={RouteLink}
        to={{ pathname: source }}
        target="_blank"
      >
        {children}
      </Link>
    );
  };

  return (
    <LinkWrapper>
      <Tooltip
        title={sourceName}
        placement="top"
        enterDelay={500}
        leaveDelay={200}
        arrow
      >
        <IconButton {...iconButtonProps}>
          <AccountCircleIcon {...iconProps} {...other} />
        </IconButton>
      </Tooltip>
    </LinkWrapper>
  );
}

SourceLink.defaultProps = {
  source: OUT_SOURCE.unknow,
  rootSource: OUT_SOURCE.unknow,
  iconButtonProps: {},
  iconProps: {},
};

SourceLink.propTypes = {
  source: PropTypes.string,
  rootSource: PropTypes.string,
  iconButtonProps: PropTypes.shape({}),
  iconProps: PropTypes.shape({}),
};

export default SourceLink;
