import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Correct import syntax
import { combineReducers } from 'redux';
import taskReducer from './reducers/taskReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
