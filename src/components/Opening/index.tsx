import React, {FC, useContext, useEffect} from 'react';
import {Image, View} from 'react-native';
import room from 'assets/images/backgrounds/temp-opening.jpeg';
import loading from 'assets/scripts/loading';

import theme from 'themes';
import Animated, {
  useSharedValue,
  withTiming,
  interpolate,
  useAnimatedStyle,
  Easing,
  interpolateColor,
} from 'react-native-reanimated';
import {ApplicationContext} from 'contexts/app';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {screenParams} from 'components/Navigation/screens';
import {useDidMountEffect} from 'hooks/useDidMountEffect';
import opening from 'assets/scripts/opening';

type Props = {
  navigation: StackNavigationProp<screenParams, 'Desktop'>;
  route: RouteProp<Record<string, object | undefined>, 'Desktop'>;
};

const Opening: FC<Props> = ({navigation}) => {
  const context = useContext(ApplicationContext);

  useEffect(() => {
    context.script.set(opening);
  }, []);

  useDidMountEffect(() => {
    if (context.script.state.length === 0) {
      navigation.navigate('OsLoading');
    }
  }, [context.script.state]);

  return (
    <View
      style={{
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}>
      <Image
        source={room}
        resizeMethod="resize"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  );
};

export default Opening;
