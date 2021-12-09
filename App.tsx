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
import {generateUniqueID} from './src/utils/utils';
import styles from './src/assets/styles';
import {TodoItem} from './src/components';

interface Todo {
  todoName: string;
  id: string;
}

const App = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todo, setTodo] = useState('');

  const deleteTodo = (todoId: string) => {
    setTodos(prev => prev.filter(todoItem => todoItem.id !== todoId));
  };
  const addTodo = () => {
    setTodos(prev => [...prev, {todoName: todo, id: generateUniqueID()}]);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView contentContainerStyle={styles.viewContainer}>
        <Text style={styles.todoTitle}>Todo</Text>
        <TextInput
          onChangeText={text => setTodo(text)}
          style={styles.inputStyle}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Add Todo</Text>
        </TouchableOpacity>
        {todos.map((todoItem: Todo, index: number) => (
          <TodoItem
            index={index + 1}
            key={todoItem.id}
            todoName={todoItem.todoName}
            id={todoItem.id}
            deleteTodo={deleteTodo}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
