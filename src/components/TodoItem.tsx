import React from 'react';
import {Text, View} from 'react-native';
import styles from '../assets/styles';
import {DeleteButton} from './index';
import {deleteTodoAction} from '../store/actions/todo';
import {connect} from 'react-redux';

interface TodoItemProps {
  index: number;
  todoName: string;
  id: string;
  deleteTodo: (todoId: string) => void;
}

const TodoItem = ({todoName, id, index, deleteTodo}: TodoItemProps) => {
  return (
    <View style={styles.todoItemContainer}>
      <View style={styles.todoNumber}>
        <Text style={styles.todoNumberText}>{index}</Text>
      </View>
      <Text style={styles.todoItem}>{`${todoName} todoID: ${id}`}</Text>
      <DeleteButton
        deleteTodo={() => {
          deleteTodo(id);
        }}
      />
    </View>
  );
};

function mapDispatchToProps(dispatch: any) {
  return {
    deleteTodo: (todoId: string) => dispatch(deleteTodoAction(todoId)),
  };
}

export default connect(null, mapDispatchToProps)(TodoItem);
