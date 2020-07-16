import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Conpoments
import { QuizzBoardContain } from '../../components/Quizzs';

function Quizzs() {
  return (
    <Switch>
      <Route exact path="/quizzs" component={QuizzBoardContain} />
      <Route path="/quizzs/:id" render={() => <div>Testing</div>} />
    </Switch>
  );
}

export default Quizzs;
