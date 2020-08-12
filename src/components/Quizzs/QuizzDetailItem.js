import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import { v1 as uuidv1 } from 'uuid';
import { Card, CardContent, Typography } from '@material-ui/core';
import { quizzDetailItem } from './styled';
import LazyImage from './LazyImage';

const convertLabel = (index) => {
  switch (index) {
    case 0:
      return 'A';
    case 1:
      return 'B';
    case 2:
      return 'C';
    case 3:
      return 'D';
    default:
      return 'NAN';
  }
};

const Choice = ({
  index,
  ans,
  correctAnswer,
  explain,
  tool: { isDirty, status, index: indexed },
  checkAns,
}) => {
  const isRightAns = ans === correctAnswer;
  const isActive = isDirty && (ans === correctAnswer || index === indexed); // right and wrong ans
  const classes = quizzDetailItem({ isDirty, isActive, isRightAns });
  const className = clsx(classes.choiceItem, classes.choiceItemStatus);
  const Explain = () => {
    if (status === null || ans !== correctAnswer) return null;
    return (
      <Typography
        variant="body1"
        component="p"
        className={classes.choiceItemExplain}
      >
        {explain}
      </Typography>
    );
  };

  return (
    <div className={className} onClick={() => checkAns(ans, index)}>
      <span className={classes.choiceItemLabel}>{convertLabel(index)}</span>
      <div>
        <span>{ans}</span>
        <Explain />
      </div>
    </div>
  );
};

function QuizzDetailItem({
  img,
  question,
  answers,
  correct_answer: correctAnswer,
  explain,
}) {
  const classes = quizzDetailItem();
  const choiceProps = { explain, correctAnswer };
  const [tool, setTool] = useState({
    isDirty: false,
    status: null,
    index: -1,
  });

  const checkAns = useCallback(
    (ans, index) => {
      if (tool.isDirty) return;
      setTool({
        ...tool,
        isDirty: true,
        status: !!(correctAnswer === ans),
        index,
      });
    },
    [correctAnswer, tool]
  );

  return (
    <Card className="quizz-board-detail-item">
      {/* CardMedia */}
      <LazyImage
        isLazy={false}
        image={img.url}
        title={img.title}
        alt={img.alt}
      />
      <CardContent className={classes.choiceWrapp}>
        <div className={classes.choiceTitle}>
          <Typography variant="body1" component="h4">
            {question}
          </Typography>
        </div>
        <div>
          {answers.map((ans, index) => (
            <Choice
              key={uuidv1()}
              index={index}
              ans={ans}
              checkAns={checkAns}
              tool={tool}
              {...choiceProps}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default QuizzDetailItem;
