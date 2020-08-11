import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import styles from './styled';
// Conpoments
import { QuizzBoard, QuizzDetail } from '../../components/Quizzs';

function Quizzs({ classes }) {
  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path="/quizzs" component={QuizzBoard} />
        <Route path="/quizzs/:id" component={QuizzDetail} />
      </Switch>
    </div>
  );
}

export default withStyles(styles)(Quizzs);
