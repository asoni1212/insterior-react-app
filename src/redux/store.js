import { createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from './root.reducer';
import { rootSaga } from './root.saga';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Applya middleware
const middleware = applyMiddleware(sagaMiddleware);

// Create single store with roo reduser and middleware
const store = createStore(rootReducer, composeWithDevTools(middleware));
export default store;

// run the saga
sagaMiddleware.run(rootSaga);