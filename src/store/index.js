import { applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import createSagaMiddleWare from 'redux-saga'
import rootSaga from './sagas';

const sagaMiddleWare = createSagaMiddleWare()

const store = createStore(reducers,applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

export default store;