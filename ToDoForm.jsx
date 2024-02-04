/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from 'react-native';


function ToDoForm() {
  return (
    <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Create a new task..."
        />
        <Button title="Add" color='#3b8941'/>
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
