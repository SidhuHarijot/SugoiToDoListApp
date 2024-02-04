/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView
} from 'react-native';


function ToDoList() {
  return (
    <ScrollView style={[styles.list]}>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Do laundry</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Go to gym</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                <Text style={styles.taskText}>Walk dog</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                <Text style={styles.taskText}>Complete Assignments</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                <Text style={styles.taskText}>Work on project</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                <Text style={styles.taskText}>Get car repaired</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>hate yourself</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Test Task 1</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                <Text style={styles.taskText}>Test Task 2</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                <Text style={styles.taskText}>Test Task 3</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                <Text style={styles.taskText}>Test Task 4</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Test Task 5</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                <Text style={styles.taskText}>Test Task 6</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task]}>
                <Text style={styles.taskText}>Test Task 7</Text>
                </View>
            </Pressable>
            <Pressable>
                <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Test Task 8</Text>
                </View>
            </Pressable>
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
