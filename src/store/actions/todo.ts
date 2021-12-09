import {ADD_TODO, DELETE_TODO} from './types';

export const addTodoAction = (todoName: string) => ({
  todoName,
  type: ADD_TODO,
});

export const deleteTodoAction = (todoId: string) => ({
  todoId,
  type: DELETE_TODO,
});
