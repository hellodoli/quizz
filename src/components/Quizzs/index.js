import React from 'react';
import withQuizzContainer from '../../HOC/QuizzContainerHOC';
// Components
import QuizzBoardList from './QuizzBoardList';
import QuizzDetailLayout from './QuizzDetailLayout';

function QuizzBoard(props) {
  const QuizzBoardWrapp = withQuizzContainer(QuizzBoardList);
  return <QuizzBoardWrapp {...props} />;
}

function QuizzDetail(props) {
  const QuizzDetailWrapp = withQuizzContainer(QuizzDetailLayout);
  return <QuizzDetailWrapp {...props} />;
}

export { QuizzBoard, QuizzDetail };
