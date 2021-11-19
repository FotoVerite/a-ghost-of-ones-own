import {NoteText} from 'components/StyledText';
import React from 'react';
import {View} from 'react-native';

export const gardening = {
  title: 'Gardening',
  note: (
    <View>
      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        I'm trying to volunteer at the Community Gardens a block from my house.
        I need to do something to get out. With meetup still mostly dead and
        nothing quirky like tea with strangers to meet people. It's that or
        troll grindr. I don't want to troll grindr.
      </NoteText>

      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        They have a cat for a mascot. Named it mittens. Big Black cat, not very
        nice. But very well feed. I see it eyeing the carrots I'm planting. I
        know cats don't really eat vegetables usually, but I think it's gotten
        the taste for it.
      </NoteText>

      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        And it's just nice to do something with my hands instead of a screen for
        once. The weather has been pleasent for the most part and it's been nice
        to meet people I've seen on the street for years but never had a reason
        to interact with. Like Juan that lives on Judge street with his
        ostentatious yellow viper I always see him working on. And his Harley
        can't forget that since it's shaken my windows a few times.
      </NoteText>

      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        He's nice enough if a bit taciturn. Mostly just wants to chew the fat
        about mechanics, or gossip about the car restorers up the street from
        me. It's amazing you can be in the same place for a decade and yet know
        so little about it at the same time. I'm sure I'll run into some other
        characters eventually. They are having their monthly potluck next month
        in front of the park before the weather gets to cold.
      </NoteText>
    </View>
  ),
};
