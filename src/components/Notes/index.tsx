import React, {FC} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Layout} from 'components/Grid';

import Header from './Header';

import NoteContextProvider from './context/NoteContext';
import Folders from './Folders';
import theme from 'themes';
import Search from './Search';
import NotesList from './NotesList';
import BackButton from './BackButton';
import Note from './Note';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Note'>;
};

const Notes: FC<Props> = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NoteContextProvider>
        <BackButton />
        <Layout
          style={{
            backgroundColor: 'black',
            flex: 1,
            padding: theme.spacing.p2,
            margin: 0,
          }}>
          <Header />
          <Search type="folder" />
          <Folders />
          <NotesList />
          <Note />
        </Layout>
      </NoteContextProvider>
    </SafeAreaView>
  );
};

export default Notes;
