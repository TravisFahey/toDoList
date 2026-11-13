import { useRef, useState } from 'react';

import {
  Keyboard, KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleSheet,
  Text, TextInput, TouchableOpacity, View,
} from 'react-native';


export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const nextId = useRef(0);

  const handleAddTask = () => {
    const text = task.trim();
    if (!text) return;
    const newTask = { id: nextId.current++, text };
    setTaskItems((items) => [...items, newTask]);
    setTask('');
    Keyboard.dismiss();
  };

  const completeTask = (id) => {
    setTaskItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.tasksWrapper} keyboardShouldPersistTaps="handled">
          <Text accessibilityRole="header" style={styles.sectionTitle}>Today's Tasks</Text>
          <View style={styles.items}>
            {taskItems.map((item) => (
              <Task key={item.id} text={item.text} onComplete={() => completeTask(item.id)} />
            ))}
          </View>
        </ScrollView>
        <View style={styles.writeTaskWrapper}>
          <TextInput
            accessibilityLabel="Write a task"
            style={styles.input}
            placeholder="Write a task"
            placeholderTextColor="#767676"
            value={task}
            onChangeText={setTask}
            onSubmitEditing={handleAddTask}
            returnKeyType="done"
          />
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Add task"
            accessibilityState={{ disabled: !task.trim() }}
            disabled={!task.trim()}
            onPress={handleAddTask}
            style={styles.addWrapper}
          >
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  content: { flex: 1, width: '100%', maxWidth: 600, alignSelf: 'center' },
  tasksWrapper: { flexGrow: 1, paddingTop: 80, paddingHorizontal: 20, paddingBottom: 20 },
  sectionTitle: { fontSize: 24, fontWeight: 'bold', color: '#111' },
  items: { marginTop: 30 },
  writeTaskWrapper: {
    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20,
    paddingTop: 16, paddingBottom: 60, gap: 20,
  },
  input: {
    flex: 1, minWidth: 0, paddingVertical: 15, paddingHorizontal: 15,
    backgroundColor: '#FFF', borderRadius: 60, borderColor: '#C0C0C0',
    borderWidth: 1, color: '#111', fontSize: 14,
  },
  addWrapper: {
    width: 60, height: 60, backgroundColor: '#FFF', borderRadius: 60,
    justifyContent: 'center', alignItems: 'center', borderColor: '#C0C0C0', borderWidth: 1,
  },
  addText: { fontSize: 20, color: '#111' },
});

function Task({ text, onComplete }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={`Complete task: ${text}`}
      accessibilityHint="Removes this task from today's list"
      onPress={onComplete}
      style={taskStyles.item}
    >
      <View style={taskStyles.itemLeft}>
        <View style={taskStyles.square} />
        <Text style={taskStyles.itemText}>{text}</Text>
      </View>
      <View style={taskStyles.circular} />
    </TouchableOpacity>
  );
}

const taskStyles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF', padding: 15, borderRadius: 10, flexDirection: 'row',
    alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, gap: 15,
  },
  itemLeft: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  square: {
    width: 24, height: 24, backgroundColor: '#55BCF6', opacity: 0.4,
    borderRadius: 5, marginRight: 15,
  },
  itemText: { flex: 1, fontSize: 14, color: '#111' },
  circular: { width: 12, height: 12, borderColor: '#55BCF6', borderWidth: 2, borderRadius: 5 },
});
