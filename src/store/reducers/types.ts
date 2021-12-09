export interface initialStateType {
  todos: Array<Todo>;
}
export interface actionType {
  type: string;
  todoName: string;
  todoId: string;
}
export interface Todo {
  todoName: string;
  id: string;
}
