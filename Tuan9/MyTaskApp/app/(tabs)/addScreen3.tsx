import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { addTask } from '../../database';

export default function AddScreen3() {
  const [title, setTitle] = useState('');
  const router = useRouter();
 
  const handleFinish = async () => {
    if (title.trim().length > 0) {
      await addTask(title);
      router.back(); // Quay lại màn hình list
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={title}
        onChangeText={setTitle}
        />
        <Button title="Finish" onPress={handleFinish} />
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    },
});
