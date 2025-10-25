import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack>
      <Stack.Screen name="listScreen2" options={{ headerShown: false }} />
      <Stack.Screen name="addScreen3" options={{ headerShown: false }} />
    </Stack>
  );
}