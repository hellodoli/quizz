import React from 'react';
import withQuizzContainer from '../../HOC/QuizzContainerHOC';
// Components
import SearchBox from '../SearchBox';
import QuizzBoardList from './QuizzBoardList';
import QuizzDetailLayout from './QuizzDetailLayout';

function QuizzBoard(props) {
  const QuizzBoardWrapp = withQuizzContainer(QuizzBoardList);
  return (
    <QuizzBoardWrapp {...props}>
      <SearchBox {...props} />
    </QuizzBoardWrapp>
  );
}

function QuizzDetail(props) {
  const QuizzDetailWrapp = withQuizzContainer(QuizzDetailLayout);
  return <QuizzDetailWrapp {...props} />;
}

export { QuizzBoard, QuizzDetail };
