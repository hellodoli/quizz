import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouteLink } from 'react-router-dom';
import { Link, Button } from '@material-ui/core';
import imgUrl from '../../assets/images/404/404-page-02.png';
import { pageNotFound as pageNotFoundClass } from './styled';

function Page404({ imgWidth }) {
  const classes = pageNotFoundClass({ imgWidth });
  return (
    <div>
      <div className={classes.imgWrapp}>
        <img src={imgUrl} alt="404" className={classes.img} />
      </div>
      <div className={classes.btnWrapp}>
        <Link
          underline="none"
          component={RouteLink}
          to="/quizzs"
          color="textPrimary"
        >
          <Button variant="contained" size="large">
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
}

Page404.propTypes = {
  imgWidth: PropTypes.string,
};

Page404.defaultProps = {
  imgWidth: '35%',
};

export default Page404;
