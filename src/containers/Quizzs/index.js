import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
// Conpoments
import Header from '../../components/Header';
import { QuizzBoardContain } from '../../components/Quizzs';

const rootContainClass = makeStyles(() => ({
  root: {
    '--header-height': '48px',
    '--setting-view-height': '156px',
  },
}));

function Quizzs() {
  const classes = rootContainClass();
  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route exact path="/quizzs" component={QuizzBoardContain} />
        <Route path="/quizzs/:id" render={() => <div>Testing</div>} />
      </Switch>
    </div>
  );
}

export default Quizzs;
