import React from 'react';
import withQuizzContainer from '../../HOC/QuizzContainerHOC';
// Components
import QuizzBoardList from './QuizzBoardList';
import QuizzDetailUse from './QuizzDetail';

function QuizzBoard(props) {
  const QuizzBoardWrapp = withQuizzContainer(QuizzBoardList);
  return <QuizzBoardWrapp {...props} />;
}

function QuizzDetail(props) {
  const QuizzDetailWithHOC = withQuizzContainer(QuizzDetailUse);
  return <QuizzDetailWithHOC {...props} />;
}

export { QuizzBoard, QuizzDetail };
