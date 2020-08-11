import React from 'react';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import LazyImage from './LazyImage';

function QuizzDetailItem(props) {
  console.log(props);
  const { img } = props;
  console.log(img);
  return (
    <Card className="quizz-board-detail-item">
      <LazyImage image={img.url} title={img.title} alt={img.alt} />
      <CardContent>Hello</CardContent>
    </Card>
  );
}

export default QuizzDetailItem;
