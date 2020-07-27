import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Card,
  CardContent,
  Typography,
  Link,
  IconButton,
} from '@material-ui/core';
import {
  AccountBoxRounded as AccountBoxRoundedIcon,
  Favorite as FavoriteIcon,
} from '@material-ui/icons';
import { OUT_SOURCE } from '../../constants/outSource';

import { quizzBoardItemRow } from './styled';
// Components
import Tooltip from '../Tooltip';

function QuizzBoardItemRow({ quizz }) {
  const {
    title,
    public_time: publicTime,
    root_source: rootSource,
    source,
  } = quizz;
  const classes = quizzBoardItemRow();

  const getSourceName = (rootS, ss) => {
    const s = rootS || ss;
    if (s) {
      const sources = Object.keys(OUT_SOURCE);
      const curSource = sources.find((item) => s.includes(item));
      if (curSource) return OUT_SOURCE[curSource];
      return 'Unknow';
    }
    return 'Unknow';
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.typoWrapp}>
          <Typography variant="subtitle1">{title}</Typography>
        </div>

        <div
          className={clsx(
            classes.reveal,
            classes.subTitleWrapp,
            classes.currentItem
          )}
        >
          <Typography variant="subtitle2">{publicTime}</Typography>
        </div>

        {source ? (
          <div className={clsx(classes.reveal, classes.currentItem)}>
            <Link
              underline="none"
              component={RouteLink}
              to={{ pathname: source }}
              target="_blank"
            >
              <Tooltip
                title={getSourceName(rootSource, source)}
                placement="top"
                enterDelay={500}
                leaveDelay={200}
                arrow
              >
                <IconButton color="default" size="small">
                  <AccountBoxRoundedIcon />
                </IconButton>
              </Tooltip>
            </Link>
          </div>
        ) : null}
      </CardContent>

      {/* Like Icon Group */}
      <div className={clsx(classes.loveWrapp, classes.reveal)}>
        <IconButton
          color="default"
          size="small"
          className={classes.iconWrapp}
          title="Add Favorite"
        >
          <FavoriteIcon fontSize="small" />
        </IconButton>
      </div>
    </Card>
  );
}

function areEqual(prevProps, nextProps) {
  const prevQuizz = prevProps.quizz;
  const nextQuizz = nextProps.quizz;
  const prevImg = prevQuizz.questions[0].img.url;
  const nextImg = nextQuizz.questions[0].img.url;
  if (
    prevImg !== nextImg &&
    prevQuizz.title !== nextQuizz.title &&
    prevQuizz.author !== nextQuizz.author
  )
    return false;
  return true;
}

export default React.memo(QuizzBoardItemRow, areEqual);
