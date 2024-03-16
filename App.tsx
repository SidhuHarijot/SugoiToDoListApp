import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import ToDoList from './ToDoList.jsx';
import ToDoForm from './ToDoForm.jsx';

function App() {
  type Task = {
    name: string,
    completed: boolean,
  }

  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(taskName: string) {
    const newTask = {name: taskName, completed: false};
    setTasks([...tasks, newTask]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>To Do List</Text>
      <View style={styles.listContainer}>
        <ToDoList tasks={tasks} />
      </View>
      <View style={styles.formContainer}>
        <ToDoForm addTask={addTask}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'grey',
    padding: 10,
    gap: 20,
    height: '100%',
    backgroundColor: '#1c1c1e',
    paddingTop: 20,
  },
  listContainer: {
    height: '79%',
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    backgroundColor: 'black',
    borderRadius: 5,
    borderBottomWidth: 5,
    borderBottomColor: 'grey',
    height: "9%",
  },
  formContainer: {
    verticalAlign: 'bottom',
    height: '9%',
  }
});

export default App;
