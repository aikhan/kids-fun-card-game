import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GenderSelection = ({onSelectGender}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.boyButton]}
        onPress={() => onSelectGender('boy')}>
        <Icon name="male" size={80} color="white" />
        <Text style={styles.buttonText}>Boy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.girlButton]}
        onPress={() => onSelectGender('girl')}>
        <Icon name="female" size={80} color="white" />
        <Text style={styles.buttonText}>Girl</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  boyButton: {
    backgroundColor: '#87CEEB',
  },
  girlButton: {
    backgroundColor: '#FFB6C1',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
});

export default GenderSelection;
