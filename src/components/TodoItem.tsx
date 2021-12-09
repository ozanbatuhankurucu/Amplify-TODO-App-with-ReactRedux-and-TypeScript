import React from 'react';
import {Text, View} from 'react-native';
import styles from '../assets/styles';
import {DeleteButton} from './index';

interface TodoItemProps {
  index: number;
  todoName: string;
  id: string;
  deleteTodo: (todoId: string) => void;
}

const TodoItem = ({todoName, id, deleteTodo, index}: TodoItemProps) => {
  return (
    <View style={styles.todoItemContainer}>
      <View style={styles.todoNumber}>
        <Text style={styles.todoNumberText}>{index}</Text>
      </View>
      <View style={styles.todoItem}>
        <Text>{`${todoName} todoID: ${id}`}</Text>
        <DeleteButton
          deleteTodo={() => {
            deleteTodo(id);
          }}
        />
      </View>
    </View>
  );
};

export default TodoItem;
