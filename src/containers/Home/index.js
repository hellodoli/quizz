import React from 'react';
import { Redirect } from 'react-router-dom';

/**
 * Home -> Quizzs Home
 */
function Homepage() {
  return <Redirect to="/quizzs" />;
}

export default Homepage;
