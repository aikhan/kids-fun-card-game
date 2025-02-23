import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const NumberSelection = ({onSelectNumber, onBack, gender}) => {
  const cardColor = gender === 'boy' ? '#87CEEB' : '#FFB6C1';

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Icon name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <Animatable.Text animation="fadeIn" style={styles.title}>
        Select a Number
      </Animatable.Text>
      <View style={styles.grid}>
        {[...Array(10).keys()].map(num => (
          <TouchableOpacity
            key={num}
            style={[styles.card, {backgroundColor: cardColor}]}
            onPress={() => onSelectNumber(num + 1)}>
            <Animatable.View
              animation="bounceIn"
              delay={num * 100}
              useNativeDriver>
              <Text style={styles.number}>{num + 1}</Text>
            </Animatable.View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '28%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  number: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796b',
  },
});

export default NumberSelection;
