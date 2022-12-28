import React, {FC, useContext, useEffect} from 'react';
import {Row} from 'components/Grid';

import theme from 'themes';
import {P} from 'components/StyledText';
import {Button} from 'react-native-elements';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Entypo';

import {Dimensions, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HexContext} from '../context/hexContext';
import Cursor from './Cursor';

const Word: FC = () => {
  const {width, height} = Dimensions.get('window');
  const insets = useSafeAreaInsets();
  const context = useContext(HexContext);

  const renderText = () => {
    return context.word.state.split('').map((char, index) => (
      <P
        key={`word-${char}-${index}`}
        style={{
          color: context.letters.state[3] === char ? 'yellow' : 'white',
          fontSize: 50,
        }}>
        {char}
      </P>
    ));
  };

  const clearStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            context.sharedValues.shake.value,
            [0, 0.25, 0.5, 0.75, 1],
            [0, 20, 10, 20, 0],
          ),
        },
      ],
    };
  });

  return (
    <View
      style={{
        marginTop: insets.top + 50,

        height: 100,
        paddingHorizontal: theme.spacing.p2,
      }}>
      <Animated.View
        style={[
          {
            justifyContent: 'center',
            flexDirection: 'row',
          },
          clearStyle,
        ]}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 50,
            flexGrow: 0,
          }}>
          {renderText()}
        </Text>
        <Cursor />
      </Animated.View>
    </View>
  );
};

export default Word;
