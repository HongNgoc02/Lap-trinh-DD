import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#e0f7fa', '#00cfff']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>

        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={require('./assets/ellipse.png')} style={{ width: 140, height: 140 }} />
        </View>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            GROW{"\n"}YOUR BUSINESS
          </Text>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            We will help you to grow your business using{"\n"}online server
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>HOW WE WORK?</Text>
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
    width: 119,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#00cfff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
});
