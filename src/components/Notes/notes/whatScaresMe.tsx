import {NoteText, P} from 'components/StyledText';
import React from 'react';
import {View} from 'react-native';

export const whatScaresMe = {
  title: 'What Scares Me',
  note: (
    <View>
      <NoteText size={'s'} ph={'p1'} style={{color: 'white'}}>
        Dying alone.
      </NoteText>
      <NoteText size={'s'} ph={'p1'} style={{color: 'white'}}>
        Being trapped, hurt, killed, raped by someone I meet on grindr.
      </NoteText>

      <NoteText size={'s'} ph={'p1'} style={{color: 'white'}}>
        Not being able to take care of myself.
      </NoteText>

      <NoteText size={'s'} style={{color: 'white'}}>
        Dementia
      </NoteText>
      <NoteText size={'s'} style={{color: 'white'}}>
        Being dependent on my parents.
      </NoteText>
    </View>
  ),
};
