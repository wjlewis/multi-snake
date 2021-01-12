import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from './saga';
import { appReducer } from './reducer';

export interface AppState {
  id: null | string;
  isJoining: boolean;
  isLeaving: boolean;
}

export const initState: AppState = {
  id: null,
  isJoining: false,
  isLeaving: false,
};

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
