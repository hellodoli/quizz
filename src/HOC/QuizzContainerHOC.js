import React from 'react';
import { connect } from 'react-redux';
import { Container } from '@material-ui/core';

import { getListQuizz } from '../actions/quizz';
import { getOptions } from '../selector/options';
import {
  getQuizzs,
  getLoadingQuizz,
  getRootQuizz,
  getRootQuizzNoArr,
} from '../selector/quizz';
// Components
import { ModalLoading } from '../components/Loading';
// Styles
import { quizzGeneral } from '../components/Quizzs/styled';

const mapStateToProps = (state) => ({
  rootQuizzs: getRootQuizz(state),
  rootQuizzsNoArr: getRootQuizzNoArr(state),
  quizzs: getQuizzs(state),
  options: getOptions(state),
  loading: getLoadingQuizz(state),
});

const mapDispatchToProps = {
  getListQuizz,
};

/**
 * @param {Component} WrappedComponent
 */
function QuizzContainerHOC(WrappedComponent) {
  const classes = quizzGeneral();
  class QuizzContainer extends React.PureComponent {
    componentDidMount() {
      const { getListQuizz, quizzs } = this.props;
      // fetch Quizzs
      if (quizzs.length === 0) getListQuizz();
    }

    render() {
      console.log('re-render QuizzContainerHOC');
      const {
        quizzs,
        options: { space },
        children,
      } = this.props;
      if (quizzs.length === 0) return <ModalLoading />;
      const maxWithContainer = space === 'eco' ? false : 'lg';
      return (
        <div className={classes.main}>
          <Container maxWidth={maxWithContainer}>
            <div className={classes.inner}>
              <WrappedComponent {...this.props} />
              {children}
            </div>
          </Container>
        </div>
      );
    }
  }

  const enhance = connect(mapStateToProps, mapDispatchToProps);
  return enhance(QuizzContainer);
}

export default QuizzContainerHOC;
