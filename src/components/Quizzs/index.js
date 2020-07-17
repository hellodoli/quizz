import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { getListQuizz } from '../../actions/quizz';

import { getAllQuizz, getNewestQuizz } from '../../selector/quizz';
import { getView } from '../../selector/layoutView';

import { quizzWrapp } from './styled';

// Components
import { ModalLoading } from '../Loading';
import QuizzBoard from './QuizzBoard';

/**
 * Wrapper QuizzBoard
 */
function QuizzBoardContain() {
  console.log('re-render');
  const classes = quizzWrapp();
  const quizzs = useSelector(getNewestQuizz(10));
  const view = useSelector(getView);
  const dispath = useDispatch();
  console.log('quizzs: ', quizzs);

  useEffect(() => {
    dispath(getListQuizz());
  }, [dispath]);

  if (!quizzs || quizzs.length === 0) return <ModalLoading />;
  return (
    <div className={classes.wrapperMain}>
      <Container>
        <div className={classes.wrapperInner}>
          {quizzs && quizzs.length > 0 && (
            <QuizzBoard quizzs={quizzs} view={view} />
          )}
        </div>
      </Container>
    </div>
  );
}

export { QuizzBoardContain };
