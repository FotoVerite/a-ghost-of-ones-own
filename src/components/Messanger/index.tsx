import React, {FC} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Layout} from 'components/Grid';

import Header from './Header';
import MessengerContextProvider from './context/MessengerContext';
import {SafeAreaView} from 'react-native-safe-area-context';
import Conversations from './Conversations';
import Conversation from './Conversation';
import BackButton from './BackButton';
import Asset from './Asset';
import ConversationHeader from './ConverstionHeader';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Messenger'>;
};

const Messenger: FC<Props> = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <MessengerContextProvider>
        <BackButton />

        <Layout
          style={{
            backgroundColor: 'white',
            flex: 1,
            margin: 0,
          }}>
          <Header />
          <Conversations />
          <Conversation />
          <Asset />
          <ConversationHeader />
        </Layout>
      </MessengerContextProvider>
    </SafeAreaView>
  );
};

export default Messenger;
