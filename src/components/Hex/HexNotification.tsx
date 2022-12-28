import {Row} from 'components/Grid';
import context from 'components/Photos/context';
import {P} from 'components/StyledText';
import React, {FC, useContext, useEffect} from 'react';
import {Dimensions, Image, TouchableWithoutFeedback, View} from 'react-native';
import {Button} from 'react-native-elements';

import Animated, {
  interpolate,
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import {HexContext} from './context/hexContext';
import theme from 'themes';
import {duration} from 'moment';

const HexNotification: FC = () => {
  const {width, height} = Dimensions.get('window');
  const context = useContext(HexContext);
  const insets = useSafeAreaInsets();
  const showNotification = useSharedValue(0);

  const AssetAnimationStyles = useAnimatedProps(() => {
    return {
      left: interpolate(showNotification.value, [0, 1], [width, 30]),
    };
  });

  const showTheNotification = () => {
    showNotification.value = withSequence(
      withTiming(1, {duration: 500}, () => runOnJS(context.word.set)('')),
      withDelay(
        1000,
        withTiming(0, {duration: 500}, () => {
          runOnJS(context.notification.set)('');
        }),
      ),
    );
  };

  useEffect(() => {
    if (context.notification.state !== '') {
      showTheNotification();
    }
  }, [context.notification.state]);

  return (
    <Animated.View
      style={[
        {
          zIndex: 15,
          top: insets.top + 50,
          position: 'absolute',
          width: width - 60,
          flex: 0,
          flexGrow: 0,
          minHeight: 70,
          borderRadius: theme.BorderRadius.small,
          borderLeftWidth: 1,
          borderColor: 'white',
          backgroundColor: '#a19898',
        },
        AssetAnimationStyles,
      ]}>
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <P size="m">{context.notification.state}</P>
      </View>
    </Animated.View>
  );
};

export default HexNotification;
