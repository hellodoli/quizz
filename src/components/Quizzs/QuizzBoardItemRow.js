import React from 'react';
import clsx from 'clsx';
import { Link as RouteLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Link,
  CardActionArea,
} from '@material-ui/core';
import { quizzBoardItemRow } from './styled';
// Components
import SourceLink from './SourceLink';
import Bookmark from './Bookmark';

function QuizzBoardItemRow({
  id,
  title,
  public_time: publicTime,
  root_source: rootSource,
  source,
  bookmark,
}) {
  const classes = quizzBoardItemRow();
  const toDetailUrl = `/quizzs/${id}`;
  return (
    <Card className={classes.root}>
      <Link
        underline="none"
        component={RouteLink}
        to={toDetailUrl}
        color="textPrimary"
        className="quizz-board-item-link"
      >
        <CardActionArea>
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
                <SourceLink
                  rootSource={rootSource}
                  source={source}
                  iconButtonProps={{ size: 'small' }}
                />
              </div>
            ) : null}
          </CardContent>
        </CardActionArea>
      </Link>
      {/* Bookmark */}
      <div className={clsx(classes.loveWrapp, classes.reveal)}>
        <Bookmark
          id={id}
          active={bookmark}
          squareFocus
          isTooltip={false}
          className={classes.iconWrapp}
          iconProps={{
            fontSize: 'small',
          }}
          iconButtonProps={{
            size: 'small',
            disableFocusRipple: true,
            disableRipple: true,
          }}
        />
      </div>
    </Card>
  );
}

function areEqual(prevProps, nextProps) {
  const prevImg = prevProps.questions[0].img.url;
  const nextImg = nextProps.questions[0].img.url;
  if (
    prevImg !== nextImg ||
    prevProps.title !== nextProps.title ||
    prevProps.author !== nextProps.author ||
    prevProps.bookmark !== nextProps.bookmark
  )
    return false;
  return true;
}

export default React.memo(QuizzBoardItemRow, areEqual);
