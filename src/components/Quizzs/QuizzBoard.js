import React from 'react';
import { Grid } from '@material-ui/core';
import QuizzBoardItem from './QuizzBoardItem';

function QuizzBoard({ quizzs }) {
  return (
    <div className="quizz-board">
      <Grid container spacing={3}>
        {quizzs.map((quizz) => (
          <Grid item xs={12} sm={6} lg={4} key={quizz.id}>
            <QuizzBoardItem {...quizz} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default QuizzBoard;
