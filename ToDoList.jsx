/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Pressable, View, Text, ScrollView } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <ScrollView style={[styles.list]}>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    borderRadius: 5,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    padding: 3,
  },
  task: {
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderBottomWidth: 4,
    borderColor: '#ccc',
    margin: 4,
    borderRadius: 5,
  },
  completed: {
    backgroundColor: '#3b8941',
    borderColor: 'lightgreen'
  },
  taskText: {
    fontSize: 16,
  }
});

export default ToDoList;
