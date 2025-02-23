import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import ConfettiCannon from 'react-native-confetti-cannon';

const WordCard = ({word, onRestart, gender}) => {
  const cardColor = gender === 'boy' ? '#87CEEB' : '#FFB6C1';

  const iconMap = {
    Cool: 'snowflake-o',
    Blank: 'file-o',
    Strong: 'hand-rock-o',
    'No brains': 'meh-o',
    Suspicious: 'eye',
    Nothing: 'ban',
    Rude: 'thumbs-down',
    Bored: 'frown-o',
    Naughty: 'smile-o',
    Awesome: 'star',
    Fancy: 'diamond',
    Brave: 'shield',
    Crazy: 'bolt',
    Healthy: 'heartbeat',
    Hardworking: 'briefcase',
    Stylish: 'star',
    Cute: 'heart',
    Kind: 'leaf',
  };

  const iconName = iconMap[word] || 'question-circle';

  return (
    <View style={styles.container}>
      <ConfettiCannon
        count={100}
        origin={{x: 0, y: 0}}
        fadeOut
        fallSpeed={3000}
      />
      <Animatable.View
        animation="fadeInUp"
        style={[styles.card, {backgroundColor: cardColor}]}>
        <Icon name={iconName} size={50} color="#d84315" style={styles.icon} />
        <Animatable.Text
          animation="bounceIn"
          iterationCount={1}
          direction="alternate"
          style={styles.word}>
          {word}
        </Animatable.Text>
      </Animatable.View>
      <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
        <Text style={styles.restartText}>Restart</Text>
      </TouchableOpacity>
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
  card: {
    width: '80%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 30,
  },
  icon: {
    marginBottom: 10,
  },
  word: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#d84315',
  },
  restartButton: {
    position: 'absolute',
    bottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#4caf50',
    borderRadius: 10,
  },
  restartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default WordCard;
