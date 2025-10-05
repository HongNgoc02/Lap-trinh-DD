import { StyleSheet, Text, View ,Image, ScrollView, TouchableOpacity } from 'react-native';
// You can import supported modules from npm
import { Card } from 'react-native-paper';
// or any files within the Snack

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen2 from './components/Screen2'; 


const Stack = createNativeStackNavigator(); 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Screen1" 
          component={Screen1} 
          options={{ title: 'Điện Thoại Vsmart Joy 3 - Hàng chính hãng' }}
        />
        {/* Định nghĩa Screen2 thực tế */}
        <Stack.Screen 
          name="Screen2" 
          component={Screen2} 
          options={{ title: 'Chọn màu' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
