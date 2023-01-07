import React, {FC, useContext, useEffect} from 'react';
import {Row} from 'components/Grid';

import theme from 'themes';
import {P} from 'components/StyledText';
import {Button} from 'react-native-elements';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Entypo';

import {Dimensions, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import sound1 from 'components/Phone/assets/2.mp3';
import KeypadButton from './KeypadButton';
import {LockScreenContext} from '../context/LockScreenContext';

const Keypad: FC = () => {
  const {width, height} = Dimensions.get('window');
  const insets = useSafeAreaInsets();
  const context = useContext(LockScreenContext);

  const buttons = [
    {main: '1', sound: sound1},
    {main: '2', abc: 'abc', sound: sound1},
    {main: '3', abc: 'def', sound: sound1},
    {main: '4', abc: 'ghi', sound: sound1},
    {main: '5', abc: 'jkl', sound: sound1},
    {main: '6', abc: 'mno', sound: sound1},
    {main: '7', abc: 'pqrs', sound: sound1},
    {main: '8', abc: 'tuv', sound: sound1},
    {main: '9', abc: 'wyxz', sound: sound1},
    {main: '0', abc: '+', sound: sound1},
  ];

  const renderPhoneButtons = () => {
    return buttons.map((button, index) => (
      <KeypadButton
        abcText={button.abc}
        dialNumber={button.main}
        key={`${index}-button`}
      />
    ));
  };
  return (
    <View
      style={{
        alignSelf: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        flexGrow: 1,
      }}>
      {renderPhoneButtons()}
    </View>
  );
};

export default Keypad;
