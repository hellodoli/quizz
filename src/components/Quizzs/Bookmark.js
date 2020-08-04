import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, makeStyles } from '@material-ui/core';
import { Bookmark as BookmarkIcon } from '@material-ui/icons';

// classes
const boomarkCustom = makeStyles(() => ({
  root: {
    borderRadius: ({ squareFocus }) => (squareFocus ? '.25rem' : '50%'),
    padding: ({ squareFocus }) => squareFocus && '2px',
    '&:hover': {},
  },
}));

const Bookmark = (props) => {
  const { active, iconButtonProps, iconProps, squareFocus, ...other } = props;
  const classes = boomarkCustom({ squareFocus });
  return (
    <IconButton
      color={active ? 'primary' : 'default'}
      title="Add Favorite"
      classes={classes}
      className="quizz-board-item-bookmark"
      {...iconButtonProps}
      {...other} // onClick ...
    >
      <BookmarkIcon {...iconProps} />
    </IconButton>
  );
};

Bookmark.defaultProps = {
  iconButtonProps: {},
  iconProps: {},
  squareFocus: false,
};

Bookmark.propTypes = {
  active: PropTypes.bool.isRequired,
  iconButtonProps: PropTypes.shape({}),
  iconProps: PropTypes.shape({}),
  squareFocus: PropTypes.bool,
};

export default Bookmark;
