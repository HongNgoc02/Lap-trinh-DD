
import { initDB } from '@/database';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

// 1. Giữ Splash Screen hiển thị (không tự động ẩn đi)
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  // 2. Tạo state để theo dõi xem DB đã sẵn sàng chưa
  const [dbReady, setDbReady] = useState(false);

  // 3. Khởi tạo DB khi layout được load
  useEffect(() => {
    async function setupDatabase() {
      try {
        await initDB();
        console.log("Khởi tạo DB thành công!");
        setDbReady(true); // Đánh dấu là DB đã sẵn sàng
      } catch (e) {
        console.error("Lỗi khởi tạo DB:", e);
      }
    }
    
    setupDatabase();
  }, []); // Chạy 1 lần duy nhất

  // 4. Ẩn Splash Screen đi KHI DB đã sẵn sàng
  useEffect(() => {
    if (dbReady) {
      SplashScreen.hideAsync();
    }
  }, [dbReady]); // Chạy mỗi khi dbReady thay đổi

  // 5. Nếu DB chưa sẵn sàng, KHÔNG hiển thị gì cả
  // (App sẽ tiếp tục hiển thị Splash Screen)
  if (!dbReady) {
    return null;
  }

  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    
  );
}
