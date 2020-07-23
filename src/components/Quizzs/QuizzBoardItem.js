import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Link,
  IconButton,
  Avatar,
  Grid,
} from '@material-ui/core';
import {
  AccountCircle as AccountCircleIcon,
  AccountBoxRounded as AccountBoxRoundedIcon,
  Favorite as FavoriteIcon,
} from '@material-ui/icons';
import { OUT_SOURCE } from '../../constants/outSource';
import { staticImgPath } from '../../config/api';
import {
  quizzGeneral,
  quizzBoardItemCard,
  quizzBoardItemRow,
  quizzBoardItemActions,
} from './styled';
// Components
import Tooltip from '../Tooltip';
import LazyImage from './LazyImage';

function QuizzBoardItemCard({ quizz }) {
  const gClass = quizzGeneral();
  const classes = quizzBoardItemCard();
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
          className={gClass.avatar}
        />
      </CardActions>
    </Card>
  );
}

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
      <CardActionArea>
        <div>
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
                <IconButton color="default" size="small">
                  <AccountBoxRoundedIcon />
                </IconButton>
              </Link>
              {/* <Tooltip
                title={getSourceName(rootSource, source)}
                placement="top"
                enterDelay={500}
                leaveDelay={200}
                arrow
              >
                <IconButton color="default" size="small">
                  <AccountBoxRoundedIcon />
                </IconButton>
              </Tooltip> */}
            </div>
          ) : null}
        </div>
      </CardActionArea>

      <CardActions>
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
      </CardActions>
    </Card>
  );
}

function QuizzBoardItem({ isHasCardGrid = true, ...rest }) {
  const { options } = rest;
  const { space, view } = options;
  if (view === 'card' && isHasCardGrid) {
    return (
      <Grid item xs={12} sm={6} md={4} lg={space === 'eco' ? 3 : 4}>
        <QuizzBoardItemCard {...rest} />
      </Grid>
    );
  }
  if (view === 'row') return <QuizzBoardItemRow {...rest} />;
  return <QuizzBoardItemCard {...rest} />;
}

export default QuizzBoardItem;
