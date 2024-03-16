/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';


function ToDoForm({addTask}) {
  const [taskText, setTaskText] = useState(() => "")

  function updateTaskList(task) {
    console.log(task)
    if (task === "") return
    addTask(task)
    setTaskText("")
  }

  return (
    <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Create a new task..."
            onChangeText={(text) => setTaskText(text)}
            value={taskText}
        />
        <Button title="Add" color='#3b8941' onPress={() => updateTaskList(taskText)}/>
    </View>
  );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
    button: {
        backgroundColor: 'green',
        color: 'black',
    }
});

export default ToDoForm;
