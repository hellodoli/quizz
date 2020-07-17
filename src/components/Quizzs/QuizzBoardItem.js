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
  Avatar,
  Tooltip,
  withStyles,
} from '@material-ui/core';
import {
  AccountCircle as AccountCircleIcon,
  AccountBoxRounded as AccountBoxRoundedIcon,
} from '@material-ui/icons';
import { staticImgPath } from '../../config/api';
import {
  quizzBoardItem,
  quizzBoardItemRow,
  quizzBoardItemActions,
} from './styled';
// Components
import LazyImage from './LazyImage';

const ToolTipCustom = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
  arrow: {
    color: theme.palette.common.white,
  },
}))(Tooltip);

function QuizzBoardItem({ quizz }) {
  const classes = quizzBoardItem();
  const aClass = quizzBoardItemActions();
  const { id, title, questions, public_time: publicTime } = quizz;
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
            height="180"
          />
          <CardContent>
            <Typography variant="subtitle1">{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      {/* Actions group (not stable) */}
      <CardActions>
        <div className={aClass.containWrapp}>
          <IconButton color="default">
            <AccountCircleIcon />
          </IconButton>
          <Typography variant="subtitle2">{publicTime}</Typography>
        </div>
        <Avatar
          alt="zing-icon"
          src={`${staticImgPath}/zing_48x48.png`}
          className={aClass.avatar}
        />
      </CardActions>
    </Card>
  );
}

function QuizzBoardItemRow({ quizz }) {
  const { title, author } = quizz;
  const classes = quizzBoardItemRow();
  return (
    <div className={classes.rowWrapp}>
      <div>
        <Typography variant="subtitle1">{title}</Typography>
      </div>
      <div>
        <ToolTipCustom
          title={author}
          placement="top"
          enterDelay={500}
          leaveDelay={200}
          arrow
        >
          <IconButton color="default" size="small">
            <AccountBoxRoundedIcon />
          </IconButton>
        </ToolTipCustom>
      </div>
    </div>
  );
}

export { QuizzBoardItem, QuizzBoardItemRow };
