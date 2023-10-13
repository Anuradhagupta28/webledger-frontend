// store.js
import { createStore, combineReducers } from 'redux';
import dataSaveReducer from './Reducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux';


const store = createStore(dataSaveReducer,applyMiddleware(thunk,logger));


export default store;
