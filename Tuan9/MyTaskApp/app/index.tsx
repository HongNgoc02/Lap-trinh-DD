import { saveUser } from "@/database";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


export default function WelcomeSreen( ) {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleStart = async () => {
    console.log("Đã nhấn nút. Tên là:", name);

    if (name.trim().length > 0) {
      console.log("Tên hợp lệ, đang lưu...");
      try {
        // BƯỚC 2: Thử lưu user
        await saveUser(name);
        console.log("Đã lưu user thành công. Chuẩn bị chuyển màn hình...");

        // BƯỚC 3: Thử chuyển màn hình
        router.replace('/(tabs)/listScreen2'); 
      
      } catch (e) {
        // BƯỚC 4: Báo lỗi nếu có
        console.error("Lỗi khi lưu user hoặc chuyển màn hình:", e);
        alert("Đã xảy ra lỗi: " + (e as Error).message);
      }
    } else {
      // BƯỚC 5: Báo nếu tên không hợp lệ
      console.log("Tên không hợp lệ, không chuyển màn hình.");
      alert("Vui lòng nhập tên của bạn!");
    }
  };

  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>MANAGE YOUR TASK</Text>
      <TextInput style = {styles.input} placeholder="Enter your name" value={name}
      onChangeText={setName}
      />
      <Button title="GET STARTED ->" onPress={handleStart} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});
