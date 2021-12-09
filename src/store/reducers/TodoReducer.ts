import {ADD_TODO, DELETE_TODO} from '../actions/types';
import {generateUniqueID} from '../../utils/utils';
import {initialStateType, Todo, actionType} from './types';

const initialState: initialStateType = {
  todos: [],
};

export const todoReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {todoName: action.todoName, id: generateUniqueID()},
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== action.todoId),
      };
    default:
      return state;
  }
};
