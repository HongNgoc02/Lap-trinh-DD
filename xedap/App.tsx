import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';

export type RootStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: { bikeId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen 
          name="Screen1" 
          component={Screen1} 
          options={{
            headerShown: false, // Theo giao diện, màn hình đầu tiên không có header
          }} 
        />
        <Stack.Screen 
          name="Screen2" 
          component={Screen2} 
          options={{
            title: "The world's Best Bike", // Tiêu đề theo hình ảnh
            headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
          }}
           
        />
        <Stack.Screen
        name="Screen3"
        component ={Screen3}
        
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

