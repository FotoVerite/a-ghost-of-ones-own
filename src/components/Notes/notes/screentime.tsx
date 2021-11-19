import {NoteText, P} from 'components/StyledText';
import React from 'react';
import {View} from 'react-native';

export const screenTime = {
  title: 'screen time',
  note: (
    <View>
      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        My screen told me I spent 10 hours a day on it. No shit, The thing has
        become an appendage at this point. Food, therapy, sex. I do everything
        on it. My entire life shrunk down to 6x3 inches of rotating cavalcades.
        Nights of headless horsemen, days of endless detached faces with blurred
        backgrounds and tight smiles. A different uber-eats driver every day, a
        name to burn on the pile at the end of the night never to be remembered.
      </NoteText>

      <NoteText size={'m'} style={{color: 'white'}}>
        And the nights, I spend most, glazed over eyes and bated breath hoping
        for a bit of validation. This damn screen. When did I stop being able to
        give that to myself? When did I become so dependant on others.
      </NoteText>

      <NoteText size={'l'} style={{color: 'white'}}>
        Fuck
      </NoteText>
    </View>
  ),
};
