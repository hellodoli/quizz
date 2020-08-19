import React from 'react';
import { ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { Check as CheckIcon, Close as CloseIcon } from '@material-ui/icons';
import { quizzDetailSelectItem } from './styled';

function QuizzDetailSelectItem({
  question,
  spyRef,
  isAns,
  index,
  scrollToView,
}) {
  const isRight = !!isAns;
  const classes = quizzDetailSelectItem({ isRight });
  const renderMarkIcon = (ans) => {
    if (ans === null) return null;
    return (
      <ListItemIcon className={classes.iconMark}>
        {isRight ? <CheckIcon /> : <CloseIcon />}
      </ListItemIcon>
    );
  };
  return (
    <ListItem
      button
      innerRef={spyRef}
      className={classes.root}
      onClick={() => scrollToView(index)}
    >
      {renderMarkIcon(isAns)}
      <ListItemText primary={question} />
    </ListItem>
  );
}

export default React.memo(QuizzDetailSelectItem);
