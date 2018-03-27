import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';


const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  3: {
    id: 3,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};
// action = {
//   type: RECEIVE_TODOS,
//   todos// => [{id:1, title:"sdgdsg"}, {id:2, "sukgdhg"}]
// }
const todosReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_TODOS:
      let col = {};
      for (var i = 0; i < action.todos.length; i++) {
        col[action.todos[i].id] = action.todos[i];
      }

      return col;
    case RECEIVE_TODO:
      // return [...state.todos, action.todo];
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};








export default todosReducer;
