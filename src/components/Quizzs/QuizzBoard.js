import React from 'react';
import { Grid } from '@material-ui/core';
import { v1 as uuidv1 } from 'uuid';
// Components
import QuizzBoardItem from './QuizzBoardItem';

function QuizzBoard({ quizzs, view, ...rest }) {
  return (
    <div className={`quizz-board quizz-board--${view}`}>
      <Grid container spacing={view === 'card' ? 3 : 0}>
        {quizzs.map((quizz) => (
          <QuizzBoardItem type={view} key={uuidv1()} quizz={quizz} {...rest} />
        ))}
      </Grid>
    </div>
  );
}

export default QuizzBoard;
