import React, {FC, useEffect, useState} from 'react';
import {
  BackHandler,
  Button,
  FlatList,
  ListRenderItem,
  NativeEventSubscription,
  Platform,
  Touchable,
  TouchableHighlight,
  View,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Layout} from 'components/Grid';

import NoteListItem from './NoteListltem';
import {Bold, P} from 'components/StyledText';
import Note, {NoteProps} from './Note';

import theme from 'themes';
import BackButton from './BackButton';
import {screenTime} from './notes/screentime';
import {dreams} from './notes/dreams';
import {InTheBackOfTheirHead} from './notes/inTheBackOfTheirHead';
import {record_posts} from './notes/record_posts';
import {lastNight} from './notes/lastNight';
import {whatScaresMe} from './notes/whatScaresMe';
import {gardening} from './notes/gardening';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Note'>;
};

const Notes: FC<Props> = ({route, navigation}) => {
  const [note, setNote] = useState<undefined | NoteProps>(undefined);

  useEffect(() => {
    let unsubscribe: NativeEventSubscription;
    if (note != null) {
      unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => {
        if (note != null) {
          setNote(undefined);
        }
        return true;
      });
    }
    //NB: It might make sense to seperate this logic once estimate is complete.
    //NB I don't love any of the complexity
    return () => {
      if (unsubscribe != null) {
        unsubscribe.remove();
      }
    };
  }, [note, route]);

  const renderItem: ListRenderItem<{note: Element; title: string}> = ({
    item,
    index,
  }) => <NoteListItem note={item.note} title={item.title} setter={setNote} />;
  return (
    <Layout style={{backgroundColor: 'black', flex: 1}}>
      <TouchableHighlight onPress={() => setNote(undefined)}>
        <BackButton title={'Notes'} color={note ? 0 : 100} />
      </TouchableHighlight>
      <FlatList
        ItemSeparatorComponent={props => {
          return (
            <View
              style={{
                height: 2,
                marginVertical: 10,
                backgroundColor: 'white',
              }}
            />
          );
        }}
        style={{backgroundColor: 'black', padding: theme.spacing.p1}}
        data={[
          record_posts,
          screenTime,
          dreams,
          lastNight,
          InTheBackOfTheirHead,
          whatScaresMe,
          gardening,
        ]}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
      />
      {note && <Note title={note.title} note={note.note} />}
    </Layout>
  );
};

export default Notes;
