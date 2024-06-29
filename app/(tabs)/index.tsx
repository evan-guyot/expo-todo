import React from "react";
import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import Icon from "@expo/vector-icons/FontAwesome6";
import { Task } from "@/lib/interfaces/task";
import { tasks } from "@/lib/data/task";

export default function TaskScreen() {
  const renderItem = ({ item }: { item: Task }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTitle}>{item.title}</Text>
      <Text style={styles.taskDueDate}>
        {item.dueDate.toLocaleTimeString()} {item.dueDate.toLocaleDateString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your tasks</Text>
        <Pressable style={styles.taskAddButton}>
          <Text style={styles.taskAddText}>Add a new Task </Text>
          <Icon size={18} name="plus" style={styles.taskAddIcon} />
        </Pressable>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    marginBottom: 64,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  taskAddButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#000",
    height: 36,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 60,
  },
  taskAddText: {
    color: "#fff",
    fontWeight: "bold",
    marginRight: 5,
  },
  taskAddIcon: {
    color: "#fff",
  },
  taskContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  taskDueDate: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 5,
  },
});
