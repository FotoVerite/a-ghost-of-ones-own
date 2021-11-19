import {NoteText, P} from 'components/StyledText';
import React from 'react';
import {Image, View} from 'react-native';
import mbv from './images/records/mbv.jpeg';
import ct from './images/records/ct.jpeg';
import records1 from './images/records/records1.jpeg';
import bmr from './images/records/bmr.jpeg';
import coil from './images/records/coil.jpeg';

export const record_posts = {
  title: 'Records to post to Instagram',
  note: (
    <View>
      <Image
        source={mbv}
        resizeMethod={'scale'}
        style={{
          aspectRatio: 1,
          width: '100%',
          height: undefined,
          resizeMode: 'center',
        }}
      />
      <NoteText ph={'p1'}>
        What can one say that's new about My Bloody Valetine. It's been thirty
        years and so much ink spilled. Maybe I should compare this classic to
        some of the lo-fi coming out now.
      </NoteText>

      <Image
        source={ct}
        resizeMethod={'scale'}
        style={{
          aspectRatio: 1,
          width: '100%',
          height: undefined,
          resizeMode: 'center',
        }}
      />
      <NoteText ph={'p1'}>
        Teenage lighting? Titan Arch? Should I just go in a different direction?
        I don't want to sensatalize the drug use like everyone else.
        "multi-layered hallucinogenic electronic beast". Sigh such terrible
        prose.
      </NoteText>

      <Image
        source={coil}
        resizeMethod={'scale'}
        style={{
          aspectRatio: 1,
          width: '100%',
          height: undefined,
          resizeMode: 'center',
        }}
      />
      <NoteText ph={'p1'}>
        Everyone knows Lorelei. Should Talk about Cicely and Persephone. The
        Dark Drums and vibe on the latter really are standouts.
      </NoteText>

      <Image
        source={records1}
        resizeMethod={'scale'}
        style={{
          aspectRatio: 1,
          width: '100%',
          height: undefined,
          resizeMode: 'center',
        }}
      />
      <NoteText ph={'p1'}>Trying to decide. Probably Hijira.</NoteText>

      <Image
        source={bmr}
        resizeMethod={'scale'}
        style={{
          aspectRatio: 1,
          width: '100%',
          height: undefined,
          resizeMode: 'center',
        }}
      />
      <NoteText ph={'p1'}>Classic, do I even need to say anything?</NoteText>
    </View>
  ),
};
