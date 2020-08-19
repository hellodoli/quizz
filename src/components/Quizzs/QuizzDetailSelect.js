import React, { useEffect, useCallback, useState } from 'react';
import { List, ListSubheader, IconButton, Collapse } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import { quizzDetailSelect } from './styled';
// Components
import QuizzDetailSelectItem from './QuizzDetailSelectItem';

function QuizzDetailSelect({ questions, containerRef }) {
  console.log('re-render QuizzDetailSelect');
  const classes = quizzDetailSelect();
  const [isOpenBookmark, setIsOpenBookmark] = useState(false);

  const removeAllActive = useCallback(() => {
    questions.forEach((quest) => {
      const spy = quest.spyRef.current;
      if (spy) spy.classList.remove('active');
    });
  }, [questions]);

  const handleScrollSpy = useCallback(() => {
    for (let i = 0; i < questions.length; i++) {
      const spy = questions[i].spyRef.current;
      const item = questions[i].questRef.current;
      if (item.offsetTop <= window.pageYOffset) {
        removeAllActive();
        spy.classList.add('active');
      }
    }
  }, [questions, removeAllActive]);

  const scrollToView = useCallback(
    (index) => {
      const container = containerRef.current;
      const questItem = questions[index].questRef.current;
      if (questItem) questItem.scrollIntoView();
    },
    [containerRef, questions]
  );

  useEffect(() => {
    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [handleScrollSpy]);

  const handleOpenBoomark = () => {
    setIsOpenBookmark(!isOpenBookmark);
  };

  return (
    <div className={classes.root}>
      <IconButton onClick={handleOpenBoomark}>
        <MenuIcon />
      </IconButton>

      <Collapse in={isOpenBookmark}>
        <List
          subheader={
            <ListSubheader component="div" disableSticky>
              Questions
            </ListSubheader>
          }
        >
          {questions.map((quest, index) => {
            const key = `${quest.num}${quest.correctAns}`;
            return (
              <QuizzDetailSelectItem
                key={key}
                {...quest}
                index={index}
                scrollToView={scrollToView}
              />
            );
          })}
        </List>
      </Collapse>
    </div>
  );
}

export default QuizzDetailSelect;
