import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import AuthReducer from './reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(AuthReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
