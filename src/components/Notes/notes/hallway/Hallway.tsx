import React, {FC, useCallback, useEffect, useState} from 'react';
import {Image, Platform, View} from 'react-native';

import {NoteText} from 'components/StyledText';

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import hallway from './hallway.jpeg';

type Props = {};

const Hallway: FC<Props> = () => {
  const AnimatedNoteText = Animated.createAnimatedComponent(NoteText);
  const mainAnimatedValue = useSharedValue(1);

  useEffect(() => {
    mainAnimatedValue.value = withRepeat(
      withTiming(1.12, {duration: 22000, easing: Easing.bounce}),
      -1,
      true,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: mainAnimatedValue.value}],
    };
  });

  const [position, setPosition] = useState(null);

  const onLayout = useCallback(event => {
    console.log('ads');
    console.log(event.nativeEvent.layout);
    const {width, height} = event.nativeEvent.layout;
  }, []);

  return (
    <View>
      <NoteText ph={'p1'}>
        I don't know if it's the lack of sleep, the stress, Matt texting
        incessantly, or what. Can he fucking pick up the last of his clothes
        already it's been months. It's like he's holding out hope I'll change my
        mind! I don't know... I'm probably directing my anger at him because
        it's easier... because... But I'm starting to.. I don't know. I don't
        know.
      </NoteText>

      <NoteText ph={'p1'}>
        I write because I try to process things. But how do you process the
        impossible. At least I hope it's actually impossible. That it's me and
        not the hallway, because if it is the hallway then, then I don't want to
        be dealing with fucking existential questions at 4AM. I just want to
        turn up Emotion real loud and sing along with I really really really
        like you and not think about the fact that my
        <View>
          <AnimatedNoteText
            style={[
              animatedStyle,
              {
                position: 'absolute',
                marginLeft: 10,
                marginTop: -20,
                fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                color: 'white',
              },
            ]}>
            {' '}
            Hallway was breathing.
          </AnimatedNoteText>
        </View>
      </NoteText>

      <NoteText ph={'p3'}>
        At least that's what it looked like. Felt like.
      </NoteText>

      <NoteText ph={'p3'}>It seems normal now.</NoteText>

      <Image
        source={hallway}
        resizeMethod={'scale'}
        style={{aspectRatio: 3 / 4, width: '50%', height: undefined}}
      />

      <NoteText ph={'p3'}>
        But I keep seeing shadows. I don't think I'm going to be able to sleep
        tonight.
      </NoteText>
    </View>
  );
};

export default Hallway;
