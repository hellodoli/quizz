import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Conpoments
import { QuizzBoard, QuizzDetail } from '../../components/Quizzs';

function Quizzs() {
  return (
    <Switch>
      <Route exact path="/quizzs" component={QuizzBoard} />
      <Route path="/quizzs/:id" component={QuizzDetail} />
    </Switch>
  );
}

export default Quizzs;
