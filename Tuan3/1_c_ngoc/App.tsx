import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function App() {
  const [otpCode, setOtpCode] = useState('');

  const handleVerifyCode = () => {
    console.log('OTP Code:', otpCode);
    alert(`Verifying code: ${otpCode}`);
    // You would typically send this code to your backend for verification
  };

  return (
    <LinearGradient colors={['#e0f7fa', '#00cfff']} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        {/* Title: CODE */}
        <View style={styles.titleContainer}>
          <Text style={styles.mainTitleText}>CODE</Text>
        </View>

        {/* Verification Box */}
        <View style={styles.verificationBox}>
          <Text style={styles.verificationText}>VERIFICATION</Text>
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            Enter one-time password sent on ++849092605798
          </Text>
        </View>

        {/* OTP Input Fields */}
        <OTPInputView
          style={styles.otpInput}
          pinCount={6}
          code={otpCode}
          onCodeChanged={setOtpCode}
          autoFocusOnLoad
          keyboardType="number-pad"
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
        />

        {/* Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleVerifyCode}>
            <Text style={styles.buttonText}>VERIFY CODE</Text>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  titleContainer: {
    flex:1,
    marginBottom: 50,
  },
  mainTitleText: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
  },
  verificationBox: {
    
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  verificationText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  descriptionContainer: {
    
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  otpInput: {
    width: '90%',
    height: 60,
    marginBottom: 30,
  },
  underlineStyleBase: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#333',
    backgroundColor: 'white',
    color: 'black',
  },
  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFC107',
    height: 50,
    width: '90%',
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