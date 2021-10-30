import React, {FC, useState} from 'react';
import {
  Button,
  FlatList,
  ListRenderItem,
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

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Note'>;
};

const Notes: FC<Props> = props => {
  const [note, setNote] = useState<undefined | NoteProps>(undefined);

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
          {
            title: 'test',
            note: (
              <View>
                <P>hello</P>
              </View>
            ),
          },
          {
            title: 'test',
            note: (
              <View>
                <P>hello</P>
              </View>
            ),
          },
          {
            title: 'Finally a real note',
            note: (
              <View>
                <P>hello</P>
                <P>hello</P>
                <P>hello</P>
              </View>
            ),
          },
          {
            title: 'test',
            note: (
              <View>
                <P>hello</P>
              </View>
            ),
          },
        ]}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
      />
      {note && <Note title={note.title} note={note.note} />}
    </Layout>
  );
};

export default Notes;
