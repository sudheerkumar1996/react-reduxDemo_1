import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import RootReducer from './rootReducer';

const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
export default store;


// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));
//want to import { composeWithDevTools } from 'redux-devtools-extension';
// yarn add redux-devtools-extension. 