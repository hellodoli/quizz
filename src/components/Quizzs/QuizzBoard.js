import React, { useEffect } from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { Grid, Container } from '@material-ui/core';
import { getListQuizz, getListQuizzScroll } from '../../actions/quizz';
// Selectors
import { getQuizzs, getRootQuizz, getLoadingQuizz } from '../../selector/quizz';
import { getOptions } from '../../selector/options';
import { getBookmark } from '../../selector/bookmark';
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

function QuizzBoard({
  rootQuizzs,
  quizzs,
  loading,
  options,
  // actions
  getListQuizz,
  getListQuizzScroll,
}) {
  console.log('re-render QuizzBoard');
  const {
    space,
    preferences: { cardAnimation, bookmark },
  } = options;

  const bookmarkView = !!bookmark.value;
  const isHasCardAnimation = !!cardAnimation.value;

  const filterQuizz = bookmarkView
    ? rootQuizzs.filter((quizz) => quizz.bookmark === true)
    : quizzs;

  const classes = quizzGeneral();
  const maxWithContainer = space && space === 'eco' ? false : 'lg';

  useEffect(() => {
    getListQuizz();
  }, [getListQuizz]);

  useEffect(() => {
    const getMoreQuizzs = () => {
      if (!bookmarkView) {
        // scrollTop + clientHeight >= scrollHeight
        const scrollTop = window.pageYOffset;
        const clientHeight = window.innerHeight;
        if (
          scrollTop + clientHeight >=
            document.documentElement.scrollHeight - 50 &&
          quizzs.length < rootQuizzs.length
        ) {
          getListQuizzScroll();
        }
      }
    };
    window.addEventListener('scroll', getMoreQuizzs);
    return () => window.removeEventListener('scroll', getMoreQuizzs);
  }, [bookmarkView, getListQuizzScroll, quizzs.length, rootQuizzs.length]);

  const renderQuizzBoardList = () => (
    <div
      className={clsx('quizz-board', {
        [classes.hasCardAnimation]: isHasCardAnimation,
      })}
    >
      <QuizzBoardList quizzs={filterQuizz} options={options} />
      {loading && <CircleLoading />}
    </div>
  );

  if (bookmarkView && filterQuizz.length === 0)
    return <div>Bookmark Empty</div>;
  if (filterQuizz.length === 0) return <ModalLoading color="primary" />;
  return (
    <div className={classes.main}>
      <Container maxWidth={maxWithContainer}>
        <div className={classes.inner}>{renderQuizzBoardList()}</div>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  rootQuizzs: getRootQuizz(state),
  quizzs: getQuizzs(state),
  bm: getBookmark(state),
  loading: getLoadingQuizz(state),
  options: getOptions(state),
});

const mapDispatchToProps = {
  getListQuizz,
  getListQuizzScroll,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizzBoard);
