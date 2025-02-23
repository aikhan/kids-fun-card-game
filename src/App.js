import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {shuffleArray} from './utils/shuffle';
import SplashScreen from './components/SplashScreen';
import GenderSelection from './components/GenderSelection';
import NumberSelection from './components/NumberSelection';
import WordCard from './components/WordCard';

const App = () => {
  const [gender, setGender] = useState(null);
  const [number, setNumber] = useState(null);
  const [shuffledWords, setShuffledWords] = useState([]);

  const words = {
    boy: [
      'Cool',
      'Blank',
      'Strong',
      'No brains',
      'Suspicious',
      'Nothing',
      'Rude',
      'Bored',
      'Naughty',
    ],
    girl: [
      'Awesome',
      'Fancy',
      'Brave',
      'Crazy',
      'Healthy',
      'Hardworking',
      'Stylish',
      'Bored',
      'Cute',
      'Kind',
    ],
  };

  useEffect(() => {
    if (gender) {
      setShuffledWords(shuffleArray([...words[gender]]));
    }
  }, [gender]);

  const onRestart = () => {
    setGender(null);
    setNumber(null);
  };

  if (!gender) {
    return <GenderSelection onSelectGender={setGender} />;
  }

  if (!number) {
    return (
      <NumberSelection
        onSelectNumber={setNumber}
        onBack={() => setGender(null)}
        gender={gender}
      />
    );
  }

  return (
    <WordCard
      word={shuffledWords[number - 1]}
      onRestart={onRestart}
      gender={gender}
    />
  );
};

export default App;
