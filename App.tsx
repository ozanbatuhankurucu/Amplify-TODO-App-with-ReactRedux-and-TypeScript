/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './src/assets/styles';
import {TodoItem} from './src/components';
import {addTodoAction} from './src/store/actions/todo';
import {Todo} from './src/store/reducers/types';
import {connect} from 'react-redux';

interface AppProps {
  todos: Array<Todo>;
  addTodo: (todoName: string) => void;
}

const App = ({todos, addTodo}: AppProps) => {
  const [todo, setTodo] = useState('');
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.viewContainer}>
        <Text style={styles.todoTitle}>Todo</Text>
        <TextInput
          onChangeText={text => setTodo(text)}
          style={styles.inputStyle}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => addTodo(todo)}>
          <Text style={styles.addButtonText}>Add Todo</Text>
        </TouchableOpacity>
        {todos.map((todoItem: Todo, index: number) => (
          <TodoItem
            index={index + 1}
            key={todoItem.id}
            todoName={todoItem.todoName}
            id={todoItem.id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

function mapStateToProps(state: any) {
  return {
    todos: state.todoReducer.todos,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    addTodo: (todoName: string) => dispatch(addTodoAction(todoName)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
