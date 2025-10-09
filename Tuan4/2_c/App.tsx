import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
 Alert, Switch, ScrollView, StatusBar } from 'react-native';

// Dùng trong trường hợp muốn tạo background gradient
// import { LinearGradient } from 'expo-linear-gradient';

const PasswordGeneratorScreen = () => {
  const [password, setPassword] = useState<string>('');
  const [passwordLength, setPasswordLength] = useState<string>('12');
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);

  const generatePassword = () => {
    const length = parseInt(passwordLength, 10);
    if (isNaN(length) || length <= 0) {
      Alert.alert('Lỗi', 'Độ dài mật khẩu không hợp lệ.');
      return;
    }

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let validChars = '';
    if (includeLowercase) validChars += lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    if (validChars === '') {
      Alert.alert('Lỗi', 'Vui lòng chọn ít nhất một loại ký tự.');
      return;
    }

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars[randomIndex];
    }
    setPassword(newPassword);
  };

  const OptionRow = ({ title, value, onValueChange }) => (
    <View style={styles.optionRow}>
      <Text style={styles.optionText}>{title}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#767577', true: '#2c3e50' }}
        thumbColor={value ? '#3498db' : '#f4f3f4'}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerTitle}>PASSWORD GENERATOR</Text>

        <View style={styles.passwordDisplay}>
          <Text style={styles.passwordText}>{password}</Text>
        </View>

        <View style={styles.optionsContainer}>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Password length</Text>
            <TextInput
              style={styles.lengthInput}
              keyboardType="numeric"
              maxLength={2}
              value={passwordLength}
              onChangeText={setPasswordLength}
            />
          </View>
          
          <OptionRow
            title="Include lowercase letters"
            value={includeLowercase}
            onValueChange={setIncludeLowercase}
          />
          <OptionRow
            title="Include uppercase letters"
            value={includeUppercase}
            onValueChange={setIncludeUppercase}
          />
          <OptionRow
            title="Include number"
            value={includeNumbers}
            onValueChange={setIncludeNumbers}
          />
          <OptionRow
            title="Include special symbol"
            value={includeSymbols}
            onValueChange={setIncludeSymbols}
          />
        </View>

        <TouchableOpacity style={styles.generateButton} onPress={generatePassword}>
          <Text style={styles.generateButtonText}>GENERATE PASSWORD</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50', // Màu nền xanh đậm
    padding: 16,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  passwordDisplay: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 30,
    minHeight: 50,
    justifyContent: 'center',
  },
  passwordText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  optionsContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 8,
    padding: 20,
    marginBottom: 30,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
  },
  lengthInput: {
    width: 60,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
  generateButton: {
    backgroundColor: '#3498db',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PasswordGeneratorScreen;