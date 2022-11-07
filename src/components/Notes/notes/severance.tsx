import GlitchTest from 'components/Bank/GlitchTest';
import {NoteText, P} from 'components/StyledText';
import Glitch from 'components/utility/Glitch';
import React from 'react';
import {View} from 'react-native';

const glitch = ({glitch}) => (
  <NoteText size={'m'} style={{color: glitch ? 'white' : 'red'}}>
    I can be such an embarrassment.
  </NoteText>
);

export const severance = {
  title: 'Severance',
  note: (
    <View>
      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        I wake up in the middle of the night and wonder what body this is, what
        person this is. Where have I been for so long. This room doesn't seem
        familiar. It's never really been home. Just a stop on the way foreword.
      </NoteText>

      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        I really don't know what home means to me. I never felt like I had one.
        I keep pushing that on other people instead of building it up for
        myself. I look at myself at the mirror and I just stare pass myself.
      </NoteText>

      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        Maybe I'm just really angry. Maybe... I just want to punish myself for
        how badly I fucked it all up. How quiet I was instead of making a space
        for myself.
      </NoteText>

      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        The people pleasing part of myself keeps winning. Keeps keeping me
        silent. Smile, and nod and sand down any edges and rough spots. Make
        sure everyone is happy. Everyone but me. Cause I won't be happy without
        them, so in the moment what is my pain, my issues.
      </NoteText>

      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        Be the stable one, be the rock. Make up for your inadequacies, your
        slips, your voice, your 5 pounds over ideal weight, you slightly coffee
        stained teeth. Crooked teeth. Too much body hair, too many scars, too
        many dark spots. Too Pale, Too freckled. Face already showing crows
        feet. Grays, so many grays. Inability to remember names towns like New
        Orleans.
      </NoteText>

      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        It would be easier to be senile.
      </NoteText>

      <NoteText size={'m'} ph={'p1'} style={{color: 'white'}}>
        I remember one night out to dinner with My Grandmother down in Florida.
        I think we were discussing girls she wanted to set me up with. And I
        forgot the word for Lettuce.
      </NoteText>

      <NoteText size={'m'} style={{color: 'white'}}>
        I can be such an embarrassment.
      </NoteText>
      <View>
        <Glitch Element={glitch} zIndex={4} />
      </View>
      <NoteText size={'m'} style={{color: 'white'}}>
        I can be such an embarrassment.
      </NoteText>

      <NoteText size={'m'} pb={'p2'} style={{color: 'white'}}>
        I can be such an embarrassment.
      </NoteText>
    </View>
  ),
};
