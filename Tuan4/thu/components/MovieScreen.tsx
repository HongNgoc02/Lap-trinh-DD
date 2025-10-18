import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MovieScreen = () => {
  return (
    <View>
      <Text style={styles.screenText}>MÀN HÌNH</Text>
      <View style={styles.screen} />
    </View>
  );
};

const styles = StyleSheet.create({
  screenText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  screen: {
    width: 300,
    height: 50,
    backgroundColor: '#333',
    marginBottom: 30,
    borderRadius: 5,
  },
});

export default MovieScreen;