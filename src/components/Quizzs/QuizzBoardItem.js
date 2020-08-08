import React from 'react';
import PropTypes from 'prop-types';
import { Grid, useMediaQuery } from '@material-ui/core';
// Components
import ItemCard from './QuizzBoardItemCard';
import ItemRow from './QuizzBoardItemRow';

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

function QuizzBoardItem({ isHasCardGrid, quizz, options: { view, space } }) {
  const gridSpace = getGridSpace(space);
  const { xs, sm, md, lg } = gridSpace;

  if (view === 'card' && isHasCardGrid) {
    return (
      <Grid item xs={xs} sm={sm} md={md} lg={lg}>
        <ItemCard {...quizz} />
      </Grid>
    );
  }
  if (view === 'row') return <ItemRow {...quizz} />;
  return <ItemCard {...quizz} />;
}

QuizzBoardItem.defaultProps = {
  isHasCardGrid: true,
};

QuizzBoardItem.propTypes = {
  isHasCardGrid: PropTypes.bool,
  quizz: PropTypes.shape({}).isRequired,
  options: PropTypes.shape({
    view: PropTypes.string.isRequired,
    space: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuizzBoardItem;
