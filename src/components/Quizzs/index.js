import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { getListQuizz } from '../../actions/quizz';

import { getNewestQuizz } from '../../selector/quizz';
import { getOptions } from '../../selector/options';

import { quizzGeneral } from './styled';

// Components
import { ModalLoading } from '../Loading';
import QuizzBoard from './QuizzBoard';

/**
 * Wrapper QuizzBoard
 */
function QuizzBoardContain(props) {
  console.log('re-render QuizzBoardContain');
  const classes = quizzGeneral();
  const quizzs = useSelector(getNewestQuizz(10));
  const options = useSelector(getOptions);
  const { view } = options;
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getListQuizz());
  }, [dispath]);

  if (!quizzs || quizzs.length === 0) return <ModalLoading />;
  return (
    <div className={classes.wrapperMain}>
      <Container>
        <div className={classes.wrapperInner}>
          {quizzs && quizzs.length > 0 && (
            <QuizzBoard quizzs={quizzs} view={view} {...props} />
          )}
        </div>
      </Container>
    </div>
  );
}

export { QuizzBoardContain };
