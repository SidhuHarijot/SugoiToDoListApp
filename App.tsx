/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import ToDoList from './ToDoList.jsx';
import ToDoForm from './ToDoForm.jsx';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>To Do List</Text>
      <View style={styles.listContainer}>
        <ToDoList/>
      </View>
      <View style={styles.formContainer}>
        <ToDoForm/>
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
