import React from 'react';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import { v1 as uuidv1 } from 'uuid';
// Components
import QuizzBoardItem from './QuizzBoardItem';

function QuizzBoard({ quizzs, ...rest }) {
  const { options } = rest;
  const { space, view } = options;

  const theme = useTheme();
  const bp = theme.breakpoints;
  const uMQ = useMediaQuery;
  console.log('re-render QuizzBoard: ', space);
  const getSpacing = () => {
    if (view === 'card') {
      if (space === 'roomy' && uMQ(bp.up('lg'))) {
        return 6;
      }
      if (space === 'eco') return 3;
      return 3;
    }
    return 0;
  };

  return (
    <div className={`quizz-board quizz-board--${view}`}>
      <Grid container spacing={getSpacing()}>
        {quizzs.map((quizz) => (
          <QuizzBoardItem key={uuidv1()} quizz={quizz} {...rest} />
        ))}
      </Grid>
    </div>
  );
}

export default QuizzBoard;
