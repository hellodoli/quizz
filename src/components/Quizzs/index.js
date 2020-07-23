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
  const classes = quizzGeneral();
  const dispath = useDispatch();

  const quizzs = useSelector(getNewestQuizz(10));
  const options = useSelector(getOptions);
  const { space } = options;

  const allProps = { options, ...props };
  useEffect(() => {
    dispath(getListQuizz());
  }, [dispath]);

  if (!quizzs || quizzs.length === 0) return <ModalLoading />;
  return (
    <div className={classes.wrapperMain}>
      <Container maxWidth={space === 'eco' ? false : 'lg'}>
        <div className={classes.wrapperInner}>
          {quizzs && quizzs.length > 0 && (
            <QuizzBoard quizzs={quizzs} {...allProps} />
          )}
        </div>
      </Container>
    </div>
  );
}

export { QuizzBoardContain };
