import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from '../App'

type Screen1Props = NativeStackScreenProps<RootStackParamList, 'Screen1'>;



export default function Screen1({ navigation }: Screen1Props) {
  const handleGetStarted = () => {
    // 💡 Chuyển đến màn hình Screen2
    navigation.navigate('Screen2');
  };
 return (
   <View style= {styles.container}>
      <View style={styles.titleText}>
        <Text style={styles.text1} >A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={styles.hinhtong}>
        <Image  source={require('../assets/bifour_-removebg-preview.png')} style={styles.hinh1} />
        <Text style= {styles.text2}>POWER BIKE SHOP</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted} >
          <Text style={styles.buttonText}>Get Started</Text>
          
        </TouchableOpacity>
      </View>
   </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f9f7f6',
    padding: 8,
  },
  titleText:{
    flex :1,
    alignItems:'center',
    justifyContent: "center",
    width:375,
    height:87,
  },
  text1:{
    fontWeight: "bold",
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 20,
  },
  hinhtong:{
    flex:1,
    alignItems:'center',
    justifyContent: "center",
    backgroundColor:'#f7e5e4',
    borderRadius: 20,
    height:388,
  },
  hinh1:{
     width: 292, height: 270 ,
  },
  text2:{
    fontWeight: "bold",
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E94141',
    height: 48,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#FEFEFE',
    fontWeight: 'bold',
    fontSize: 16,
  },

});
