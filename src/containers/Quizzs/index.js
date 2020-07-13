import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Quizzs() {
  return (
    <div className="root-router">
      <Switch>
        <Route exact path="/quizzs" render={() => <div>Home Quizz</div>} />
        <Route path="/quizzs/:id" render={() => <div>Testing</div>} />
      </Switch>
    </div>
  );
}

export default Quizzs;
