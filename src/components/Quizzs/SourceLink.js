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

function SourceLink(props) {
  const { source, rootSource, color, size, fontSize, ...other } = props;
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
        <IconButton color={color} size={size} {...other}>
          <AccountCircleIcon fontSize={fontSize} />
        </IconButton>
      </Tooltip>
    </LinkWrapper>
  );
}

SourceLink.defaultProps = {
  source: OUT_SOURCE.unknow,
  rootSource: OUT_SOURCE.unknow,
  color: 'default', // 'default'| 'inherit'| 'primary'| 'secondary'
  size: 'medium', // 'small' | 'medium'
  fontSize: 'default', // 'default'| 'inherit' | 'large' | 'small'
};

SourceLink.propTypes = {
  source: PropTypes.string,
  rootSource: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  fontSize: PropTypes.string,
};

export default SourceLink;
