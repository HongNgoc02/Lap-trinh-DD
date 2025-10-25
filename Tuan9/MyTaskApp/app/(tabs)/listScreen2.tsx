import CheckBox from 'expo-checkbox';
import { useFocusEffect, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { getTasks, getUser, Task, updateTaskDone, User } from '../../database';


export default function TaskListScreen() {
    const [user, setUser] = useState<User | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);
    const router = useRouter();

    // Hàm để tải dữ liệu
    const loadData = async () => {
        const userData = await getUser();
        setUser(userData);
        const taskData = await getTasks();
        setTasks(taskData);
    };
    // useFocusEffect sẽ chạy mỗi khi màn hình này được focus
  // (Ví dụ: khi bạn quay lại từ màn hình "Add")
    useFocusEffect(
        React.useCallback(() => {
            loadData();
        }, [])
    );

    const handleToggleDone = async (task:Task) => {
       const newDoneValue = task.done === 0 ? 1 : 0;
        await updateTaskDone(task.id, newDoneValue);
        loadData();
    };

    return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>Hi {user?.name || 'User'}</Text>
      <Text>Have a great day ahead</Text>
      {/* (Thêm thanh Search của bạn ở đây) */}

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <CheckBox
              value={item.done === 1}
              onValueChange={() => handleToggleDone(item)}
            />
            <Text style={item.done ? styles.taskTextDone : styles.taskText}>
              {item.title}
            </Text>
            {/* (Thêm nút Edit của bạn ở đây) */}
          </View>
        )}
      />

      {/* Nút Add (FAB) */}
      <Pressable style={styles.fab} onPress={() => router.push('/addScreen3')}>
        <Text style={styles.fabText}>+</Text>
      </Pressable>
    </View>
  );
}
        
            
            
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,},
        headerTitle: { fontSize: 24, fontWeight: 'bold' },
        taskItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
        taskText: { fontSize: 16, marginLeft: 10 },
        taskTextDone: { fontSize: 16, marginLeft: 10, textDecorationLine: 'line-through', color: 'gray' },
        fab: {
            position: 'absolute',
            bottom: 30,
            right: 30,
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#007AFF',
            justifyContent: 'center',
            alignItems: 'center',
        },
        fabText: { fontSize: 30, color: 'white' },
    });
    