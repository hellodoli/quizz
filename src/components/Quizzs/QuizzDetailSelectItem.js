import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { quizzDetailSelect } from './styled';

function QuizzDetailSelectItem({
  question,
  spyRef,
  isAns,
  index,
  scrollToView,
}) {
  const classes = quizzDetailSelect({ isRight: isAns });
  return (
    <ListItem
      button
      innerRef={spyRef}
      onClick={() => scrollToView(index)}
      className={classes.menuItem}
    >
      <ListItemText primary={question} />
    </ListItem>
  );
}

export default React.memo(QuizzDetailSelectItem);
