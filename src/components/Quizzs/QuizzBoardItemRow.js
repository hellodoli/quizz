import React from 'react';
import clsx from 'clsx';
import { Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { Bookmark as BookmarkIcon } from '@material-ui/icons';
import { quizzBoardItemRow } from './styled';
// Components
import SourceLink from './SourceLink';

function QuizzBoardItemRow({ quizz }) {
  const {
    title,
    public_time: publicTime,
    root_source: rootSource,
    source,
  } = quizz;
  const classes = quizzBoardItemRow();

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

        {/* Link to Source */}
        {source ? (
          <div className={clsx(classes.reveal, classes.currentItem)}>
            <SourceLink rootSource={rootSource} source={source} size="small" />
          </div>
        ) : null}
      </CardContent>
      {/* Bookmark */}
      <div className={clsx(classes.loveWrapp, classes.reveal)}>
        <IconButton
          color="secondary"
          size="small"
          className={classes.iconWrapp}
          title="Add Favorite"
        >
          <BookmarkIcon fontSize="small" />
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
