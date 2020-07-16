import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getAllQuizz } from '../../selector/quizz';
import { getListQuizz } from '../../actions/quizz';
import { quizzWrapp } from './styled';

// Components
import { ModalLoading } from '../Loading';
import QuizzBoard from './QuizzBoard';

/* const Loading = () => <div>Loading...</div>;
const QuizzBoard = Loadable({
  loader: () => import('./QuizzBoard'),
  loading: Loading, 
}); */

/**
 * Wrapper QuizzBoard
 */
const QuizzBoardContain = () => {
  const classes = quizzWrapp();
  const quizzs = useSelector(getAllQuizz);
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getListQuizz());
  }, [dispath]);

  if (!quizzs || quizzs.length === 0) return <ModalLoading />;

  return (
    <div className={classes.wrapperMain}>
      <Container>
        <div className={classes.wrapperInner}>
          {quizzs && quizzs.length > 0 && <QuizzBoard quizzs={quizzs} />}
        </div>
      </Container>
    </div>
  );
};

export { QuizzBoardContain };
