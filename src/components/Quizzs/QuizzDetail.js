import React from 'react';
import { Grid } from '@material-ui/core';
import clsx from 'clsx';
import QuizzDetailItem from './QuizzDetailItem';
import { quizzGeneral } from './styled';

function QuizzDetail({ match, rootQuizzsNoArr: rootQuizz }) {
  const classes = quizzGeneral();
  const id = parseInt(match.params.id, 10);
  const quizz = rootQuizz[id];

  if (!quizz) return <div>...Loading</div>;
  return (
    <div className={clsx('quizz-detail', classes.detailWrapp)}>
      <Grid container spacing={6}>
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
