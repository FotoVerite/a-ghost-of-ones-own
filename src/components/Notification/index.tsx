import React, {FC, useContext, useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Bold, P} from 'components/StyledText';

import theme from 'themes';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {Row} from 'components/Grid';
import {ApplicationContext} from 'contexts/app';

type Props = {
  title: string;
  body: string;
  iconName?: string;
  delay?: number;
};

const Notification: FC<Props> = ({delay, iconName, title, body}) => {
  // Sound.setCategory('Playback');

  // var whoosh = new Sound(dings, error => {
  //   if (error) {
  //     console.log('failed to load the sound', error);
  //     return;
  //   }

  //   // Play the sound with an onEnd callback
  //   whoosh.play(success => {
  //     if (success) {
  //       console.log('successfully finished playing');
  //     } else {
  //       console.log('playback failed due to audio decoding errors');
  //     }
  //   });
  // });
  const rotation = useSharedValue(0);
  const [pressed, setPressed] = useState(0);
  const [remove, setRemove] = useState(0);

  const context = useContext(ApplicationContext);
  useEffect(() => {
    if (pressed > 0) {
      rotation.value = withSequence(
        withTiming(-10, {duration: 50}),
        withRepeat(withTiming(5, {duration: 100}), 6, true),
        withTiming(0, {duration: 50}),
      );
      setRemove(1);
    }
    return () => {};
  }, [pressed]);

  useEffect(() => {
    if (remove) {
      context.notification.set(undefined);
    }
    return () => {};
  }, [remove]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      setPressed(pressed => pressed++);
    },
    onEnd: (event, ctx) => {},
  });

  const {width, height} = Dimensions.get('window');

  return (
    <Animated.View
      style={[
        {
          margin: theme.spacing.p2,
          width: width * 0.8,
          backgroundColor: theme.colors.better,
          alignSelf: 'center',
          padding: theme.spacing.p1 + 2,
          borderRadius: theme.BorderRadius.normal,
          position: 'absolute',
          zIndex: 5,
        },
        animatedStyle,
      ]}>
      <TapGestureHandler
        onHandlerStateChange={() => setPressed(pressed => pressed + 1)}>
        <Row>
          {iconName && (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: 'white',
                borderRadius: 5,
                alignSelf: 'center',
                justifyContent: 'center',
                marginRight: theme.spacing.p1,
              }}>
              <Icon
                name={iconName}
                size={theme.spacing.p2}
                color={'#FD4234'}
                style={{
                  alignSelf: 'center',
                }}
              />
            </View>
          )}
          <View style={{width: width * 0.8 - 85}}>
            <Bold>{title}</Bold>
            <P>{body}</P>
          </View>
        </Row>
      </TapGestureHandler>
    </Animated.View>
  );
};

export default Notification;
