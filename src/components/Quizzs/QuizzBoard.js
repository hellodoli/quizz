import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container } from '@material-ui/core';

import { getListQuizz } from '../../actions/quizz';
import { getNewestQuizz } from '../../selector/quizz';
import { getOptions } from '../../selector/options';
// Styles
import { quizzGeneral } from './styled';
// Components
import ModalLoading from '../Loading/Modal';
import QuizzBoardItem from './QuizzBoardItem';

function QuizzBoardList({ options, quizzs }) {
  const { view, space } = options;
  const getSpacing = () => {
    let spacing = 0; // default is for CardRow
    if (view === 'card') {
      if (space === 'roomy') spacing = 6;
      else spacing = 3;
    }
    return spacing;
  };
  return (
    <div className={`quizz-board quizz-board--${view}`}>
      <Grid container spacing={getSpacing()}>
        {quizzs.map((quizz) => (
          <QuizzBoardItem key={quizz.id} quizz={quizz} options={options} />
        ))}
      </Grid>
    </div>
  );
}

function QuizzBoard() {
  console.log('re-render QuizzBoard');
  const classes = quizzGeneral();
  const dispatch = useDispatch();

  const quizzs = useSelector(getNewestQuizz(10));
  const options = useSelector(getOptions);
  const { space } = options;

  const maxWithContainer = space && space === 'eco' ? false : 'lg';

  useEffect(() => {
    dispatch(getListQuizz());
  }, [dispatch]);

  if (!quizzs || quizzs.length === 0) return <ModalLoading />;
  return (
    <div className={clsx(classes.wrapperMain, classes.wrapperMainVar)}>
      <Container maxWidth={maxWithContainer}>
        <div className={classes.wrapperInner}>
          {quizzs && quizzs.length > 0 && (
            <QuizzBoardList quizzs={quizzs} options={options} />
          )}
        </div>
      </Container>
    </div>
  );
}

export default QuizzBoard;
