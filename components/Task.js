import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Task({ text, onComplete }) {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={`Complete task: ${text}`}
      accessibilityHint="Removes this task from today's list"
      onPress={onComplete}
      style={styles.item}
    >
      <View style={styles.itemLeft}>
        <View style={styles.square} />
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
