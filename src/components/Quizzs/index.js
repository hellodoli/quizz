import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@material-ui/core';

import { getListQuizz } from '../../actions/quizz';
// Selectors
import { getNewestQuizz } from '../../selector/quizz';
import { getOptions } from '../../selector/options';
// Styles
import { quizzGeneral } from './styled';
// Components
import { ModalLoading } from '../Loading';
import QuizzBoard from './QuizzBoard';

/**
 * Wrapper QuizzBoard
 */
function QuizzBoardContain() {
  const dispath = useDispatch();

  const quizzs = useSelector(getNewestQuizz(3));
  const options = useSelector(getOptions);
  const classes = quizzGeneral();
  const { space } = options;
  const maxWithContainer = space && space === 'eco' ? false : 'lg';

  useEffect(() => {
    dispath(getListQuizz());
  }, [dispath]);

  if (!quizzs || quizzs.length === 0) return <ModalLoading />;

  /*
    - Eco (default): lg(1280) 4 || md(960) 3 || sm (600) 2
    - Cozy: lg(1280) 3 - 24 || sm(600) 2
    - Roomy: lg(1280) 3 - 12 || sm(600) 2
  */

  return (
    <div className={clsx(classes.wrapperMain, classes.wrapperMainVar)}>
      <Container maxWidth={maxWithContainer}>
        <div className={classes.wrapperInner}>
          {quizzs && quizzs.length > 0 && <QuizzBoard quizzs={quizzs} />}
        </div>
      </Container>
    </div>
  );
}

export default QuizzBoardContain;
