import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import Animated, {
  Layout,
  SlideInRight,
  SlideOutRight,
} from 'react-native-reanimated';
import theme from 'themes';

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
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        position: 'absolute',
        paddingVertical: theme.spacing.p1,
        paddingHorizontal: theme.spacing.p2,
        marginTop: 50,
      }}>
      <ScrollView
        style={{
          flex: 1,
          flexGrow: 1,
          padding: 0,
          margin: 0,
          marginBottom: 50,
        }}>
        {note}
      </ScrollView>
    </Animated.View>
  );
};

export default Note;
