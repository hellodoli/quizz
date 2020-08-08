import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
// Components
import { ExpansionPanelActions } from '@material-ui/core';
import App from './App';
import Tooltip from './components/Tooltip';
import Switch from './components/Switch';
import Bookmark from './components/Quizzs/Bookmark';

const fetchData = (cb) => {
  cb(false);
};

test('renders learn react link', (done) => {
  // const { getByText } = render(<Tooltip />);
  // console.log('getByText:', getByText);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  function callback(data) {
    try {
      expect(data).toBeTruthy();
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});
