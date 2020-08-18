import React, { useEffect, useCallback } from 'react';
import { MenuList, MenuItem, Typography } from '@material-ui/core';
import { quizzDetailSelect } from './styled';

function QuizzDetailSelect({ questions, containerRef }) {
  const classes = quizzDetailSelect();
  const removeAllActive = useCallback(() => {
    questions.forEach((quest) => {
      const spy = quest.spyRef.current;
      if (spy) spy.classList.remove('active');
    });
  }, [questions]);

  useEffect(() => {
    const handleScrollSpy = () => {
      for (let i = 0; i < questions.length; i++) {
        const spy = questions[i].spyRef.current;
        const item = questions[i].questRef.current;
        if (item.offsetTop <= window.pageYOffset) {
          removeAllActive();
          spy.classList.add('active');
        }
      }
    };
    handleScrollSpy();
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [questions, removeAllActive]);

  const scrollToView = (index) => {
    const container = containerRef.current;
    window.scrollTo(
      0,
      questions[index].questRef.current.offsetTop + container.offsetTop
    );
  };

  return (
    <div>
      <Typography>Questions</Typography>
      <MenuList>
        {questions.map(
          ({ question, correct_answer: correctAns, num, spyRef }, index) => (
            <MenuItem
              key={`${num}${correctAns}`}
              innerRef={spyRef}
              className={classes.wrappItem}
              onClick={() => scrollToView(index)}
            >
              <span className={classes.contentItem}>{question}</span>
            </MenuItem>
          )
        )}
      </MenuList>
    </div>
  );
}

export default QuizzDetailSelect;
