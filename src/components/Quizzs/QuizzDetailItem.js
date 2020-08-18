import React, { useState } from 'react';
import clsx from 'clsx';
import { v1 as uuidv1 } from 'uuid';
import { RootRef, Card, CardContent, Typography } from '@material-ui/core';
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
  index: choiceIndex,
  ans,
  correctAnswer,
  explain,
  tool: { isDirty, index: chooseIndex },
  checkAns,
}) => {
  const isRightAns = ans === correctAnswer;
  const isActive =
    isDirty && (ans === correctAnswer || choiceIndex === chooseIndex); // right and wrong ans
  const classes = quizzDetailItem({ isDirty, isActive, isRightAns });
  const className = clsx(classes.choiceItem, classes.choiceItemStatus);
  const Explain = () => {
    if (isDirty && isRightAns) {
      return (
        <Typography
          variant="body1"
          component="p"
          className={classes.choiceItemExplain}
        >
          {explain}
        </Typography>
      );
    }
    return null;
  };

  return (
    <div
      role="button"
      className={className}
      onClick={() => checkAns(choiceIndex, ans)}
    >
      <span className={classes.choiceItemLabel}>
        {convertLabel(choiceIndex)}
      </span>
      <div>
        <span>{ans}</span>
        <Explain />
      </div>
    </div>
  );
};

function QuizzDetailItem({
  index,
  img,
  question,
  answers,
  correct_answer: correctAnswer,
  explain,
  questRef,
  // QuizzDetail
  handleSetQuestion,
}) {
  console.log('re-render QuizzDetailItem');
  const classes = quizzDetailItem();
  const choiceProps = { explain, correctAnswer };
  // const quizzItemRef = useRef(null);
  const [tool, setTool] = useState({
    isDirty: false,
    index: -1,
  });

  const checkAns = (choiceIndex, ans) => {
    if (tool.isDirty) return;
    handleSetQuestion(index, ans === correctAnswer);
    setTool({
      ...tool,
      isDirty: true,
      index: choiceIndex,
    });
  };

  return (
    <RootRef rootRef={questRef}>
      <Card className={clsx('quizz-board-detail-item', classes.wrapp)}>
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
    </RootRef>
  );
}

const arePropsEqual = (prevProps, nextProps) => {
  if (prevProps.isAns !== nextProps.isAns) return false;
  return true;
};

export default React.memo(QuizzDetailItem, arePropsEqual);
