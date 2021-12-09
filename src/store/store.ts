import {createStore, combineReducers} from 'redux';
import {todoReducer} from './reducers/TodoReducer';

const reducers = combineReducers({
  todoReducer,
});

const store = createStore(reducers);

export default store;
