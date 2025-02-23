import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = () => {
  return (
    <Animatable.View animation="bounceIn" style={styles.container}>
      <Text style={styles.title}>Welcome to Fun Card Game!</Text>
      {/* Add more animations or images here */}
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SplashScreen;
