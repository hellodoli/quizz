import React from 'react';
import { Grid } from '@material-ui/core';
import QuizzDetailItem from './QuizzDetailItem';

function QuizzDetail({ match, rootQuizzsNoArr: rootQuizz }) {
  const id = parseInt(match.params.id, 10);
  const quizz = rootQuizz[id];

  if (!quizz) return <div>...Loading</div>;
  return (
    <div className="quizz-detail">
      <Grid container spacing={3}>
        {quizz.questions.map((quest) => (
          <Grid item xs={12} key={`${quizz.id}${quest.num}`}>
            <QuizzDetailItem {...quest} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default QuizzDetail;
