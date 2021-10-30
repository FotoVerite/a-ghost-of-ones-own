import {Bold, P} from 'components/StyledText';
import React, {FC} from 'react';
import {ColorValue, Image, View} from 'react-native';
import Animated, {
  Layout,
  LightSpeedInLeft,
  LightSpeedInRight,
  LightSpeedOutRight,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated';
import styled from 'styled-components/native';

export type NoteProps = {
  note: Element;
  title: string;
};

const Note: FC<NoteProps> = ({note, title}) => {
  return (
    <Animated.View
      entering={SlideInRight}
      exiting={SlideOutRight}
      layout={Layout.springify()}
      style={{
        zIndex: 2,
        backgroundColor: 'red',
        width: '100%',
        height: '100%',
        position: 'absolute',
        marginTop: 50,
      }}>
      {note}
    </Animated.View>
  );
};

export default Note;
