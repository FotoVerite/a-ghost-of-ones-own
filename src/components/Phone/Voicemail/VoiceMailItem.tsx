import React, {FC, useContext, useEffect, useState} from 'react';

import {Row} from 'components/Grid';
import {Pressable, View} from 'react-native';
import {NoteText} from 'components/StyledText';

import {Moment} from 'moment';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import VoiceMailInfo from './VoiceMailInfo';
import {ApplicationContext} from 'contexts/app';

export type VoiceMailType = {
  number: string;
  area: string;
  length: string;
  date: Moment;
  uri: any;
  transcription: string;
};

const VoiceMailItem: FC<
  VoiceMailType & {index: number; openedVoiceMailId: {state: any; set: any}}
> = ({
  number,
  area,
  index,
  length,
  date,
  openedVoiceMailId,
  transcription,
  uri,
}) => {
  const [pressed, setPressed] = useState(false);
  const [height, setheight] = useState(50);
  const accordianHeight = useSharedValue(50);
  const heightStyle = useAnimatedStyle(() => {
    return {height: accordianHeight.value};
  });
  const context = useContext(ApplicationContext);

  useEffect(() => {
    if (openedVoiceMailId.state === index) {
      accordianHeight.value = withTiming(height);
      context.audio.set({uri: uri});
    } else {
      accordianHeight.value = withTiming(50, {duration: 500});
    }
    if (openedVoiceMailId == null) {
      context.audio.set(undefined);
    }
    return () => {};
  }, [openedVoiceMailId.state]);

  return (
    <Animated.View>
      <Pressable
        onTouchEnd={e => {
          openedVoiceMailId.set(
            openedVoiceMailId.state === index ? undefined : index,
          );
          if (openedVoiceMailId.state === index) {
            context.audio.set(undefined);
          }
        }}>
        <Animated.View style={[{overflow: 'hidden'}, heightStyle]}>
          <Row>
            <View>
              <NoteText>{number}</NoteText>
              <NoteText style={{color: 'gray'}}>{area}</NoteText>
            </View>
            <View style={{marginStart: 'auto'}}>
              <NoteText>{date.format('MM/DD/YY')}</NoteText>
              <NoteText style={{color: 'gray', textAlign: 'right'}}>
                {length}
              </NoteText>
            </View>
          </Row>
          <VoiceMailInfo
            index={index}
            length={length}
            date={date}
            transcription={transcription}
            openedVoiceMailId={openedVoiceMailId.state}
          />
        </Animated.View>
      </Pressable>
      <Animated.View
        style={{position: 'absolute', zIndex: -4, top: -50000}}
        onLayout={e => {
          setheight(e.nativeEvent.layout.height + 50);
        }}>
        <VoiceMailInfo
          index={index}
          date={date}
          length={length}
          transcription={transcription}
          openedVoiceMailId={openedVoiceMailId.state}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default VoiceMailItem;
