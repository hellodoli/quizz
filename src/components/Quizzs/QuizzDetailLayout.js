import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Card, CardContent, Typography } from '@material-ui/core';
import { quizzGeneral, quizzDetailResult } from './styled';
// Components
import { ModalLoading } from '../Loading';
import AutoFixedWrapp from '../AutoFixedWrapp';
import QuizzDetailSelect from './QuizzDetailSelect';
import QuizzDetailItem from './QuizzDetailItem';

function QuizzDetailResult({ questions }) {
  const classes = quizzDetailResult();
  const isFullAns = questions.every((quest) => quest.isAns !== null);

  const AnsResult = () => {
    const trueAns = questions.filter((quest) => quest.isAns === true);
    const ansLength = trueAns.length;
    const questLength = questions.length;
    const ratio = ansLength / questLength;
    const renderCongratText = () => {
      let text = '';
      if (ratio <= 0.5) {
        text = 'Bạn có thể làm tốt hơn thế';
      } else if (ratio === 1) {
        text = 'Bạn là thần đồng';
      } else if (ratio >= 0.8) {
        text = 'Bạn rất xuất sắc';
      } else {
        text = 'Kiến thức của bạn không tồi';
      }
      return text;
    };
    return (
      <Typography
        variant="h4"
        component="div"
        className={classes.contentResult}
      >
        <div>{renderCongratText()}</div>
        <div>
          <span className={clsx(classes.number, classes.numberSuccess)}>
            {ansLength}
          </span>
          <span className={classes.number}>/</span>
          <span className={clsx(classes.number, classes.numberTotal)}>
            {questLength}
          </span>
        </div>
      </Typography>
    );
  };

  return (
    <Card className={classes.wrapper}>
      <CardContent>
        <Typography variant="h5">Kết quả</Typography>
        <div className={classes.dividerLine} />
        {!isFullAns ? (
          <Typography variant="h4" className={classes.contentResult}>
            Hãy trả lời các câu hỏi để biết kết quả của bạn
          </Typography>
        ) : (
          <AnsResult />
        )}
      </CardContent>
    </Card>
  );
}

function QuizzDetail({ id, questions, handleSetQuestion }) {
  const classes = quizzGeneral();
  return (
    <div className={clsx('quizz-detail', classes.detailWrapp)}>
      <div className="quizz-detail-list">
        {questions.map((quest, index) => (
          <QuizzDetailItem
            {...quest}
            key={`${id}${quest.num}`}
            index={index}
            handleSetQuestion={handleSetQuestion}
          />
        ))}
      </div>
      <QuizzDetailResult questions={questions} />
    </div>
  );
}

function QuizzDetailLayout({ match, rootQuizzsNoArr: rootQuizz }) {
  const refContainer = useRef(null); // for container wrapp
  const id = parseInt(match.params.id, 10);
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    const root = rootQuizz[id];
    if (root && root.questions) {
      // make 2 property for using
      // isAns: null || true || false
      // questRef: React.createRef()
      const cloneQuestion = root.questions.slice();
      for (let i = 0; i < cloneQuestion.length; i++) {
        cloneQuestion[i].isAns = null;
        cloneQuestion[i].questRef = React.createRef();
        cloneQuestion[i].spyRef = React.createRef();
      }
      setQuestion(cloneQuestion);
    } else {
      setQuestion(null);
    }
  }, [id, rootQuizz]);

  const handleSetQuestion = (index, status) => {
    const cloneQuestion = questions.slice();
    cloneQuestion[index].isAns = status;
    setQuestion(cloneQuestion);
  };

  if (questions === null) return <div>Not Found Questions</div>;
  if (questions.length === 0) return <ModalLoading />;
  return (
    <div ref={refContainer} style={{ position: 'relative' }}>
      <AutoFixedWrapp containerRef={refContainer}>
        <QuizzDetailSelect containerRef={refContainer} questions={questions} />
      </AutoFixedWrapp>
      <QuizzDetail
        id={id}
        questions={questions}
        handleSetQuestion={handleSetQuestion}
      />
    </div>
  );
}

export default QuizzDetailLayout;
