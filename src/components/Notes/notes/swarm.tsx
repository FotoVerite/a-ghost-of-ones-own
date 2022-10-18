import {NoteText, P} from 'components/StyledText';
import React from 'react';
import {Image, View} from 'react-native';
import theme from 'themes';
import redButterflies from './images/redButterfliesToilet.png';

export const swarm = {
  title: 'Swarm',
  note: (
    <View>
      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        What the fuck is going on with this house. At first it was just a few
        fruit flies. No big deal. I keep a clean apartment but it happens
        sometimes. I've been throwing out the garbage a bit lackadaisically and
        not cleaning daily. But it's become exacerbated. Worrisomely so.
      </NoteText>

      <NoteText size={'m'} style={{color: 'white'}}>
        Flies I can explain. Even multiplying ones. They can get into drains.
        But fucking butterflies can't. Where are they coming from? It's just
        freaking me out. Waking up in the earlier morning and they're swarming
        my bathroom sink and mirror. Blood red butterflies. Everyone thinks
        there so pretty. But they're just gross insects to me. I didn't even
        know there were blood red butterflies. They're still flittering about.
        I'm trying to shoo them out the door. I don't want to put my hands on
        them.
      </NoteText>

      <Image
        source={redButterflies}
        resizeMethod={'scale'}
        style={{
          aspectRatio: 1,
          width: '100%',
          height: undefined,
          marginVertical: theme.spacing.p2,
        }}
      />

      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        Just not what I wanted to spend my day dealing with. Can one even
        fumigate for butterflies?
      </NoteText>
    </View>
  ),
};
