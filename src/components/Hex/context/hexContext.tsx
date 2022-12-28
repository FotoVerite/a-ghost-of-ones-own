import React, {FC, ReactNode, useState} from 'react';

import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {runOnJS} from 'react-native-reanimated/src/reanimated2/core';
import {answers} from './answers';

export type HexContextTypeDigest = {
  children: ReactNode;
  answers: string[];
  answered: string[];
  letters: string[];
  points: number;
};

export type HexContextTypeDigested = {
  sharedValues: {
    showInfo: SharedValue<number>;
    shake: SharedValue<number>;
  };
  answers: {
    set: React.Dispatch<React.SetStateAction<string[]>>;
    state: string[];
  };
  answered: {
    set: React.Dispatch<React.SetStateAction<string[]>>;
    state: string[];
  };
  checkAnswer: () => void;
  letters: {
    set: React.Dispatch<React.SetStateAction<string[]>>;
    state: string[];
  };
  notification: {
    set: React.Dispatch<React.SetStateAction<string>>;
    state: string;
  };
  points: {
    set: React.Dispatch<React.SetStateAction<number>>;
    state: number;
  };
  word: {
    set: React.Dispatch<React.SetStateAction<string>>;
    state: string;
  };
};
//defaults for empty app
export const HexContext = React.createContext<HexContextTypeDigested>({});

const HexContextProvider: FC<HexContextTypeDigest> = props => {
  const [upcaseAnswers, setUpcaseAnswers] = useState(
    props.answers.map(w => w.toUpperCase()),
  );
  const [answered, setAnswered] = useState(props.answered);
  const [letters, setLetters] = useState(props.letters);
  const [notification, setNotification] = useState('');

  const [points, setPoints] = useState(props.points);
  const [word, setWord] = useState('');

  const showInfo = useSharedValue(0);
  const shake = useSharedValue(0);
  const calculatePoints = () => {
    const size = word.length;
    if (size === 4) {
      setPoints(points => (points += 1));
    } else {
      setPoints(points => (points += size));
    }
  };

  const checkAnswer = () => {
    if (word === '') {
      return;
    } else if (!word.split('').includes(letters[3])) {
      setNotification('Word does not include center letter.');
      shake.value = withTiming(1, {}, () => {
        shake.value = 0;
        runOnJS(setWord)('');
      });
    } else if (answered.includes(word)) {
      setNotification('Word already found.');
      shake.value = withTiming(1, {}, () => {
        shake.value = 0;
        runOnJS(setWord)('');
      });
    } else if (upcaseAnswers.includes(word.toUpperCase())) {
      calculatePoints();
      setUpcaseAnswers(a =>
        Object.assign(
          [],
          a.filter(w => w !== word),
        ),
      );
      setAnswered(answered => answered.concat(word).sort());
      setNotification('Nicely Done');
    } else {
      setNotification('Word not found');
      shake.value = withTiming(1, {}, () => {
        shake.value = 0;
        runOnJS(setWord)('');
      });
    }
  };

  return (
    <HexContext.Provider
      value={{
        sharedValues: {
          showInfo: showInfo,
          shake: shake,
        },
        answers: {state: upcaseAnswers, set: setUpcaseAnswers},
        answered: {state: answered, set: setAnswered},
        checkAnswer: checkAnswer,
        letters: {state: letters, set: setLetters},
        points: {state: points, set: setPoints},
        notification: {state: notification, set: setNotification},
        word: {state: word, set: setWord},
      }}>
      {props.children}
    </HexContext.Provider>
  );
};

export default HexContextProvider;
export const HexContextConsumer = HexContext.Consumer;
