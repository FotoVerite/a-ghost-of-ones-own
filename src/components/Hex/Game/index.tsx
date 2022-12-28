import React, {FC, useState} from 'react';
import {Dimensions, View} from 'react-native';
import {Layout, Row} from 'components/Grid';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {P} from 'components/StyledText';
import Hexagon from './Hexagon';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {answers} from '../context/answers';
import Word from './Word';
import HexControl from './HexControls';
import Hexes from './Hexes';

const Game: FC = () => {
  const [word, setWord] = useState('');

  const {width} = Dimensions.get('window');
  const [letters, setLetters] = useState(['N', 'D', 'E', 'C', 'O', 'T', 'U']);

  return (
    <Layout style={{backgroundColor: 'black', flex: 1}}>
      <Word />
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          marginBottom: 120,
        }}>
        <Hexes />
      </View>
      <HexControl />
    </Layout>
  );
};

export default Game;
