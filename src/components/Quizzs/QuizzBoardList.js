import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';
import { getListQuizzScroll } from '../../actions/quizz';
// Components
import { CircleLoading, ModalLoading } from '../Loading';
import QuizzBoardItem from './QuizzBoardItem';
// Styles
import { quizzGeneral } from './styled';

const getSpacing = (view, space) => {
  let spacing = 0; // default is for CardRow
  if (view === 'card') {
    if (space === 'roomy') spacing = 6;
    else spacing = 3;
  }
  return spacing;
};

function QuizzBoardList({ loading, options, rootQuizzs, quizzs }) {
  const {
    view,
    space,
    preferences: { cardAnimation, bookmark },
  } = options;
  const dispatch = useDispatch();
  const bookmarkView = !!bookmark.value;
  const isHasCardAnimation = !!cardAnimation.value;

  const filterQuizz = bookmarkView
    ? rootQuizzs.filter((quizz) => quizz.bookmark === true)
    : quizzs;

  const classes = quizzGeneral();
  const spacing = getSpacing(view, space);

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
          dispatch(getListQuizzScroll());
        }
      }
    };
    window.addEventListener('scroll', getMoreQuizzs);
    return () => window.removeEventListener('scroll', getMoreQuizzs);
  }, [bookmarkView, dispatch, quizzs.length, rootQuizzs.length]);

  if (bookmarkView && filterQuizz.length === 0)
    return <div>Bookmark Empty</div>;
  if (filterQuizz.length === 0) return <ModalLoading />;
  return (
    <div
      className={clsx('quizz-board', {
        [classes.hasCardAnimation]: isHasCardAnimation,
      })}
    >
      {/* Quizzs List */}
      <div className={`quizz-board-list quizz-board-list--${view}`}>
        <Grid container spacing={spacing}>
          {filterQuizz.map((quizz) => (
            <QuizzBoardItem key={quizz.id} quizz={quizz} options={options} />
          ))}
        </Grid>
      </div>
      {/* Loadmore Loading */}
      {loading && <CircleLoading />}
    </div>
  );
}

export default React.memo(QuizzBoardList);
