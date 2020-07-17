import React from 'react';
import { Grid } from '@material-ui/core';
import { v1 as uuidv1 } from 'uuid';
import { QuizzBoardItem, QuizzBoardItemRow } from './QuizzBoardItem';

function QuizzBoard({ quizzs, view }) {
  const QuizzBoardItemView = (props) => {
    if (view === 'card')
      return (
        <Grid item xs={12} sm={6} lg={4}>
          <QuizzBoardItem {...props} />
        </Grid>
      );
    return <QuizzBoardItemRow {...props} />;
  };

  return (
    <div className="quizz-board">
      <Grid container spacing={view === 'card' ? 3 : 0}>
        {quizzs.map((quizz) => (
          <QuizzBoardItemView key={uuidv1()} quizz={quizz} />
        ))}
      </Grid>
    </div>
  );
}

export default QuizzBoard;
