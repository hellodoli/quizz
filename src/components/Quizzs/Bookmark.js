import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { makeStyles, IconButton } from '@material-ui/core';
import { Bookmark as BookmarkIcon } from '@material-ui/icons';
import { toggleBookmark } from '../../actions/bookmark';
// Components
import Tooltip from '../Tooltip';

const boomarkCustom = makeStyles(() => ({
  root: {
    borderRadius: ({ squareFocus }) => (squareFocus ? '.25rem' : '50%'),
    padding: ({ squareFocus }) => squareFocus && '2px',
    '&:hover': {},
  },
})); // Classes

const Bookmark = ({
  id,
  active,
  squareFocus,
  isTooltip,
  // for IconButton
  iconButtonProps,
  iconProps,
  ...other
}) => {
  const dispatch = useDispatch();
  const classes = boomarkCustom({ squareFocus });
  const titleTooltip = active ? 'Remove bookmark' : 'Bookmark';

  const toggle = () => {
    const status = active ? 'OFF' : 'ON';
    dispatch(toggleBookmark(status, { id }));
  };

  const renderBookmarkContent = () => (
    <IconButton
      classes={classes}
      color={active ? 'primary' : 'default'}
      onClick={toggle}
      {...iconButtonProps}
      {...other}
    >
      <BookmarkIcon {...iconProps} />
    </IconButton>
  );

  if (!isTooltip) return renderBookmarkContent();
  return (
    <Tooltip
      title={titleTooltip}
      placement="top"
      enterDelay={500}
      leaveDelay={200}
      arrow
    >
      {renderBookmarkContent()}
    </Tooltip>
  );
};

Bookmark.defaultProps = {
  squareFocus: false,
  iconButtonProps: {},
  iconProps: {},
  isTooltip: true,
};

Bookmark.propTypes = {
  id: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
  isTooltip: PropTypes.bool,
  squareFocus: PropTypes.bool,
  iconButtonProps: PropTypes.shape({}),
  iconProps: PropTypes.shape({}),
};

export default Bookmark;
