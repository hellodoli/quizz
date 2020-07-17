import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { ConnectedRouter } from 'connected-react-router';
import history from './history';

import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';

const { store } = configureStore({}, history);
console.log('store: ', store.getState());

/*
  <PersistGate loading={<ModalLoading />} persistor={persistor}>
  </PersistGate>
*/

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
