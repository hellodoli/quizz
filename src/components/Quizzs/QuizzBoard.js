import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Container } from '@material-ui/core';

import { getListQuizz, getListQuizzScroll } from '../../actions/quizz';
import {
  getAllQuizz,
  getAllQuizzRoot,
  getLoadingQuizz,
} from '../../selector/quizz';
import { getOptions } from '../../selector/options';
// Styles
import { quizzGeneral } from './styled';
// Components
import { ModalLoading, CircleLoading } from '../Loading';
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
    <div className={`quizz-board-list quizz-board-list--${view}`}>
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
  const dispatch = useDispatch();
  const rootQuizzs = useSelector(getAllQuizzRoot);
  const quizzs = useSelector(getAllQuizz);
  const loading = useSelector(getLoadingQuizz);
  const options = useSelector(getOptions);
  const {
    space,
    preferences: { cardAnimation },
  } = options;

  const classes = quizzGeneral();
  const maxWithContainer = space && space === 'eco' ? false : 'lg';

  useEffect(() => {
    dispatch(getListQuizz());
  }, [dispatch]);

  useEffect(() => {
    const getMoreQuizzs = () => {
      // scrollTop + clientHeight >= scrollHeight
      const scrollTop = window.pageYOffset;
      const clientHeight = window.innerHeight;
      if (
        scrollTop + clientHeight >=
          document.documentElement.scrollHeight - 50 &&
        quizzs.length < rootQuizzs.length
      ) {
        dispatch(getListQuizzScroll());
      }
    };
    window.addEventListener('scroll', getMoreQuizzs);
    return () => window.removeEventListener('scroll', getMoreQuizzs);
  }, [dispatch, quizzs.length, rootQuizzs.length]);

  const renderQuizzBoardList = () => {
    const isHasCardAnimation = cardAnimation.value;
    if (quizzs && quizzs.length > 0) {
      return (
        <div
          className={clsx('quizz-board', {
            [classes.hasCardAnimation]: isHasCardAnimation,
          })}
        >
          <QuizzBoardList quizzs={quizzs} options={options} />
          {loading && <CircleLoading />}
        </div>
      );
    }
    return null;
  };

  if (!rootQuizzs || rootQuizzs.length === 0)
    return <ModalLoading color="primary" />;
  return (
    <div className={classes.main}>
      <Container maxWidth={maxWithContainer}>
        <div className={classes.inner}>{renderQuizzBoardList()}</div>
      </Container>
    </div>
  );
}

export default React.memo(QuizzBoard);
