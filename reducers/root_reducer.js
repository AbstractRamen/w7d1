import { combineReducers } from 'redux'; //when to use curlies?
import todosReducer from './todos_reducers';

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;
