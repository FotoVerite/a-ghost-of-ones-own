import {NoteText} from 'components/StyledText';
import React from 'react';
import {View} from 'react-native';

export const coldBrew = {
  title: 'Cold Brew Coffee',
  note: (
    <View>
      <NoteText ph={'p1'}>
        I don't feel stable these days. I'm sitting in the same cafe as I have
        for years now, only it's not my cafe, it's a new cafe. Same layout, same
        uncomfortable chairs and wifi password, but new layer of paint, new
        name, new merch. What is it that they say about the ship of Theseus?
      </NoteText>

      <NoteText ph={'p1'}>
        What does it even mean to be a regular, to have your old place. The
        stains underneath my hands on this table are still in the shape of NJ.
        The barista is still Carol. The coffee is still good. I think I see Bert
        in the back making pastries. But nothing feels right. I don't feel
        right.
      </NoteText>

      <NoteText ph={'p1'}>
        So many years I would come in and sit by the window. The walls pure blue
        and covered in local artist cast offs or mistakes. Things they'd love
        but can't sell. Chipped coffee mugs and saucers and tableware from some
        great grandmamma. Now it's all perfect glassware that's too hot when you
        hold it and blazing white plates. All the art, Keith Haring and Basquiat
        lithographs.
      </NoteText>

      <NoteText ph={'p1'}>
        And music is too loud, too early 1990's Celtic pop. I didn't even think
        that was a thing anymore. But here we have the fourth song from some
        person I'm sure isn't Enya and who's production feels at least 2010.
        Completely wrong for this space. This cafe always was about being
        homely, small town feeling even in this city. And amazing chicken pot
        pies. I miss their pies.
      </NoteText>

      <NoteText ph={'p1'}>
        They're still doing a decent bundt cake. I can see it from here. But
        it's all overdone with tumeric or other lesser known spice combination.
        The banana bread can't be banana bread it needs to be maple banana
        bread. Nothing can simply be, it needs to be marketed and fresh and...
        god fuck this corporate bullshit. I just want my neighborhood cafe not
        one gearing up to become a local chain. I want a place I can sit and
        think. And maybe cry without worrying what people think when things are
        bad.
      </NoteText>

      <NoteText ph={'p2'} style={{color: 'red'}}>
        And things are bad now.
      </NoteText>
    </View>
  ),
};
