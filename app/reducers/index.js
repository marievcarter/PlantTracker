import { plantReducer as plants } from './plantReducer';
import { combineReducers, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';

const rootReducer = combineReducers(
  { plants },
  applyMiddleware(loggingMiddleware)
);

export default rootReducer;
