import React, {FC} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Layout} from 'components/Grid';

import Header from './NewHeader';

import NoteContextProvider from './context/NoteContext';
import Folders from './Folders';
import theme from 'themes';
import Search from './Search';
import NotesList from './NotesList';
import BackButton from './BackButton';
import Note from './Note';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, View} from 'react-native';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Note'>;
};

const Notes: FC<Props> = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <NoteContextProvider>
        <StatusBar hidden />
        <BackButton />
        <Layout
          style={{
            backgroundColor: 'black',
            flex: 1,
            margin: 0,
          }}>
          <Header />
          <View style={{paddingHorizontal: theme.spacing.p2}}>
            <Search type="folder" />
            <Folders />
          </View>
          <NotesList />
          <Note />
        </Layout>
      </NoteContextProvider>
    </SafeAreaView>
  );
};

export default Notes;
