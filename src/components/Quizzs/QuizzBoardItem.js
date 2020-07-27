import React from 'react';
import { Grid, useMediaQuery } from '@material-ui/core';
// Components
import QuizzBoardItemCard from './QuizzBoardItemCard';
import QuizzBoardItemRow from './QuizzBoardItemRow';

/*
  - Eco (default): lg(1280) 4 - 12 || md(960) 3 || sm (600) 2
  - Cozy: lg(1280) 3 - 24 || sm(600) 2 - 24
  - Roomy: lg(1280) 3 - 12 || sm(600) 2 - 12
*/
const getGridSpace = (space) => {
  const uMQ = useMediaQuery;
  const gridSpace = {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 4,
  };

  if (space === 'eco') {
    const isLg = uMQ((theme) => theme.breakpoints.up('lg'));
    const isMd = uMQ((theme) => theme.breakpoints.up('md'));
    if (isLg) {
      gridSpace.lg = 3;
    } else if (isMd) {
      gridSpace.md = 4;
    }
  }

  return gridSpace;
};

function QuizzBoardItem(props) {
  const {
    isHasCardGrid = true,
    quizz,
    options: { view, space },
  } = props;

  const gridSpace = getGridSpace(space);
  const { xs, sm, md, lg } = gridSpace;

  if (view === 'card' && isHasCardGrid) {
    return (
      <Grid item xs={xs} sm={sm} md={md} lg={lg}>
        <QuizzBoardItemCard quizz={quizz} />
      </Grid>
    );
  }
  if (view === 'row') return <QuizzBoardItemRow quizz={quizz} />;
  return <QuizzBoardItemCard quizz={quizz} />;
}

export default QuizzBoardItem;
