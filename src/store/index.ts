import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from './modules';

const combinecRedusers = combineReducers({ ...reducers });
const configureStore = createStore(combinecRedusers, compose(applyMiddleware(thunkMiddleware)));

export default configureStore;
