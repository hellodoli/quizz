import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Link,
  IconButton,
} from '@material-ui/core';
import { AccountCircle as AccountCircleIcon } from '@material-ui/icons';
import { OUT_SOURCE } from '../../constants/outSource';
// Styles
import { quizzBoardItemCard, quizzBoardItemActions } from './styled';
// Components
import Tooltip from '../Tooltip';
import LazyImage from './LazyImage';

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

function QuizzBoardItemCard({ quizz }) {
  const classes = quizzBoardItemCard();
  const aClass = quizzBoardItemActions();
  const {
    id,
    title,
    questions,
    public_time: publicTime,
    root_source: rootSource,
    source,
  } = quizz;
  const toDetailUrl = `/quizzs/${id}`;
  return (
    <Card classes={classes}>
      <Link
        underline="none"
        component={RouteLink}
        to={toDetailUrl}
        color="textPrimary"
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
      {/* Actions group (not stable) */}
      <CardActions>
        <div className={aClass.containWrapp}>
          <Tooltip
            title="Hello Dolli"
            placement="top"
            enterDelay={500}
            leaveDelay={200}
            arrow
          >
            <IconButton color="default">
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
          <Typography variant="subtitle2">{publicTime}</Typography>
        </div>
        {/* <Avatar
          alt="zing-icon"
          src={`${staticImgPath}/zing_48x48.png`}
          className={gClass.avatar}
        /> */}
      </CardActions>
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

export default React.memo(QuizzBoardItemCard, areEqual);
