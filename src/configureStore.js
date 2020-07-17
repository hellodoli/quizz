import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { persistReducer, persistStore } from 'redux-persist';
// import { connectRouter, routerMiddleware } from 'connected-react-router';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (initialState = {}, history) => {
  // console.log('persistConfig: ', persistConfig);
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [sagaMiddleware];
  const enhancers = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, composeEnhancers(enhancers));

  // const persistor = persistStore(store);
  // Saga
  sagaMiddleware.run(rootSaga);
  return { store };
};

export default configureStore;
