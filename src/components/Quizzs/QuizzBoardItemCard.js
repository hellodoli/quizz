import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Link,
} from '@material-ui/core';
// Styles
import { quizzBoardItemCard, quizzBoardItemActions } from './styled';
// Components
import SourceLink from './SourceLink';
import Bookmark from './Bookmark';
import LazyImage from './LazyImage';

function QuizzBoardItemCard({
  id,
  title,
  questions,
  public_time: publicTime,
  root_source: rootSource,
  source,
  bookmark,
}) {
  console.log('reload QuizzBoardItemCard');
  const classes = quizzBoardItemCard();
  const aClass = quizzBoardItemActions();

  const toDetailUrl = `/quizzs/${id}`;
  return (
    <Card classes={classes} className="quizz-board-item">
      <Link
        underline="none"
        component={RouteLink}
        to={toDetailUrl}
        color="textPrimary"
        className="quizz-board-item-link"
      >
        <CardActionArea>
          <LazyImage
            image={questions[0].img.url}
            alt={questions[0].img.alt}
            title={questions[0].img.title}
          />
          <CardContent>
            <Typography variant="subtitle1">{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      {/* Actions group */}
      <CardActions>
        <div className={aClass.containWrapp}>
          <SourceLink rootSource={rootSource} source={source} />
          <Typography variant="subtitle2">{publicTime}</Typography>
        </div>
        <div className={aClass.containWrapp}>
          <Bookmark
            id={id}
            active={bookmark}
            squareFocus
            iconProps={{ fontSize: 'small' }}
            iconButtonProps={{
              size: 'small',
              disableFocusRipple: true,
              disableRipple: true,
              className: 'quizz-board-item-bookmark',
            }}
          />
        </div>
      </CardActions>
    </Card>
  );
}

function areEqual(prevProps, nextProps) {
  const prevImg = prevProps.questions[0].img.url;
  const nextImg = prevProps.questions[0].img.url;
  if (
    prevImg !== nextImg ||
    prevProps.title !== nextProps.title ||
    prevProps.author !== nextProps.author ||
    prevProps.bookmark !== nextProps.bookmark
  )
    return false;
  return true;
}

export default React.memo(QuizzBoardItemCard, areEqual);
