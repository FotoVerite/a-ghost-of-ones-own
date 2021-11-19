import {NoteText, P} from 'components/StyledText';
import React from 'react';
import {Image, View} from 'react-native';
import heaven from './images/heaven-or-las-vegas.gif';

export const dreams = {
  title: 'My dreams lately',
  note: (
    <View>
      <NoteText ph={'p1'}>
        Sometimes when I dream all I remember is a white light, blinding me.
      </NoteText>

      <NoteText ph={'p1'}>Why does it feel like it’s watching me.</NoteText>

      <NoteText ph={'p3'}>Why isn’t it letting go.</NoteText>

      <Image
        source={heaven}
        resizeMethod={'scale'}
        style={{aspectRatio: 1.92, width: '100%', height: undefined}}
      />
    </View>
  ),
};
