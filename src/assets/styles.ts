import {StyleSheet, Platform} from 'react-native';

const isIOS = Platform.OS === 'ios';
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingTop: 16,
  },
  viewContainer: {
    paddingHorizontal: 20,
  },
  todoTitle: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  inputStyle: {
    borderColor: '#e9c46a',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: isIOS ? 12 : undefined,
    marginBottom: 16,
    borderRadius: 8,
  },
  addButton: {
    alignSelf: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#2a9d8f',
  },
  addButtonText: {
    color: '#fff',
  },
  removeButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#e76f51',
    borderRadius: 8,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
  removeButtonText: {color: '#fff'},
  todoItemContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#2a9d8f',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  todoItem: {
    marginTop: 8,
  },
  todoNumber: {
    backgroundColor: '#264653',
    width: 25,
    height: 25,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoNumberText: {
    color: '#fff',
  },
});

export default styles;
