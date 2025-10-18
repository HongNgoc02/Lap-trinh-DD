import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ProductListScreen} from './screens/ProductListScreen';
import {ProductDetailScreen} from './screens/ProductDetailScreen';





export type RootStackParamList = {
  ProductList: undefined;
  ProductDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName = "ProductList">
            <Stack.Screen options={{headerShown: false}} name="ProductList" component = {ProductListScreen}/>
            <Stack.Screen name="ProductDetails" component = {ProductDetailScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
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
