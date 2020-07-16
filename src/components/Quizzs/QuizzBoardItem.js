import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Link,
} from '@material-ui/core';
import { quizzBoardItem as quizzBoardItemClass } from './styled';

function QuizzBoardItem(props) {
  const classes = quizzBoardItemClass();
  const { id, title, questions } = props;
  const toDetailUrl = `/quizzs/${id}`;
  return (
    <Link underline="none" component={RouteLink} to={toDetailUrl}>
      <Card classes={classes}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={questions[0].img.url}
            alt={questions[0].img.alt}
            title={questions[0].img.title}
            height="140"
          />
          <CardContent>
            <Typography variant="subtitle1">{title}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

export default QuizzBoardItem;
