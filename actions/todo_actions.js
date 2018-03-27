export const RECEIVE_TODOS = 'receive_todos';
export const RECEIVE_TODO = 'receive_todo';

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({

  type: RECEIVE_TODO,
  todo
});

window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
