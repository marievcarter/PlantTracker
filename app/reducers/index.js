import plantReducer from './plant';
import userReducer from './user';
import { combineReducers, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';

const store = combineReducers(
  { plantReducer, userReducer },
  applyMiddleware(loggingMiddleware)
);

export default store;
export * from './user';
export * from './plant';
