import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../assets/styles';

interface DeleteButtonProps {
  deleteTodo: () => void;
}

const DeleteButton = ({deleteTodo}: DeleteButtonProps) => {
  return (
    <TouchableOpacity style={styles.removeButton} onPress={deleteTodo}>
      <Text style={styles.removeButtonText}>Remove</Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;
