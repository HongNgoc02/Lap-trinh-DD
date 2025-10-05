import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { Input, Icon } from 'react-native-elements';

export default function App() {
  return (
    <LinearGradient colors={['#e0f7fa', '#00cfff']} style={styles.gradient}>
   
      <SafeAreaView style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('./assets/Group.png')} style={{ width: 140, height: 140 }} />
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            FORGET {"\n"}PASSWORD
          </Text>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Provide your account’s email for which you want to reset your password
          </Text>
        </View>

        <View style={{width: '100%',paddingHorizontal: 0,marginBottom: 20}}>
          <Input 
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            leftIcon={
              <Icon  name="mail" type="ionicon" color="#333" size={20}/>
            }
            />
            
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>

        
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: 'center',
  },
  descriptionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E3C000',
    height: 48,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
 
});
