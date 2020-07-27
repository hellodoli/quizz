import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import styles from './styled';
// Conpoments
import Header from '../../components/Header';
import QuizzBoard from '../../components/Quizzs/QuizzBoard';

function Quizzs({ classes }) {
  return (
    <div className={classes.root}>
      <Header />
      <Switch>
        <Route exact path="/quizzs" component={QuizzBoard} />
        <Route path="/quizzs/:id" render={() => <div>Testing</div>} />
      </Switch>
    </div>
  );
}

export default withStyles(styles)(Quizzs);
