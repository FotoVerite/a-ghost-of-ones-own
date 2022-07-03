import React, {FC, useContext, useEffect, useState} from 'react';

import {Row} from 'components/Grid';
import {Platform, Pressable, Text, View} from 'react-native';
import {NoteText} from 'components/StyledText';

import Animated, {
  Easing,
  Layout,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Slider from '@react-native-community/slider';
import {ApplicationContext} from 'contexts/app';
import Icon from 'react-native-vector-icons/Entypo';
import {VoiceMailType} from './VoiceMailItem';
Icon.loadFont();

const VoiceMailInfo: FC<
  VoiceMailType & {index: number; openedVoiceMailId: number}
> = ({index, date, transcription, openedVoiceMailId}) => {
  const context = useContext(ApplicationContext);
  function fmtMSS(s: number | undefined) {
    if (s == null) {
      return 0;
    }
    s = Math.floor(s);
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s;
  }
  const [playing, setPlaying] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentSliderValue, setCurrentSliderValue] = useState(0);

  const opacity = useSharedValue(0);

  useEffect(() => {
    if (openedVoiceMailId != index) {
      setPlaying(false);
      setCurrentPosition(0);
      opacity.value = 0;
    } else {
      opacity.value = 1;
    }
  }, [openedVoiceMailId]);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined = undefined;
    if (playing && context.player != null) {
      interval = setInterval(() => {
        context.player?.getCurrentTime(seconds => setCurrentPosition(seconds));
        context.player?.getCurrentTime(seconds =>
          setCurrentSliderValue(seconds),
        );
        if (!context.player?.isPlaying()) {
          setPlaying(false);
        }
      }, 500);
    } else if (interval != null) clearInterval(interval);
    return () => {
      if (interval != null) clearInterval(interval);
    };
  }, [playing, context.player]);

  const animatedOpacity = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 1200,
        easing: Easing.cubic,
      }),
    };
  });

  return (
    <View>
      <Animated.View style={[animatedOpacity]}>
        <NoteText>{date.format('MMMM, DD, YYYY [at] hh:mm a')}</NoteText>
        <Row
          style={{
            marginVertical: 15,
          }}>
          <Text style={{color: 'white', alignSelf: 'center'}}>
            {fmtMSS(currentSliderValue)}
          </Text>
          <Slider
            onTouchStart={() => setPlaying(false)}
            onTouchEndCapture={e => {
              e.stopPropagation();
              context.player?.play(() => console.log('played'));
              setPlaying(true);
            }}
            onValueChange={value => {
              context.player?.setCurrentTime(value);
              setCurrentSliderValue(value);
            }}
            value={currentPosition}
            maximumValue={context.audio.state?.duration}
            maximumTrackTintColor="gray"
            minimumTrackTintColor="white"
            thumbTintColor="white"
            style={{
              flex: 1,
              alignSelf: 'center',
              marginHorizontal: Platform.select({ios: 5}),
            }}
          />

          <Text style={{color: 'white', alignSelf: 'center'}}>
            {fmtMSS(currentSliderValue - (context.audio.state?.duration || 0))}
          </Text>
        </Row>
      </Animated.View>
      <Pressable
        onTouchEnd={e => {
          e.stopPropagation();
          context.player?.isPlaying()
            ? context.player?.stop()
            : context.player?.play(() => console.log('played'));
          setPlaying(!context.player?.isPlaying());
        }}>
        <Icon
          name={playing ? 'controller-paus' : 'controller-play'}
          size={42}
          color="#74B6EC"
        />
      </Pressable>
      <NoteText>{transcription}</NoteText>
    </View>
  );
};

export default VoiceMailInfo;
