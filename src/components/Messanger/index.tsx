import React, {FC, useContext, useEffect} from 'react';
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
import ZaraNotification from 'assets/scripts/Desktop/Zara';
import {ApplicationContext} from 'contexts/app';
import IDontLikeThis from 'assets/scripts/Messenger/IDontLikeThis';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Messenger'>;
};

const Messenger: FC<Props> = ({route, navigation}) => {
  const context = useContext(ApplicationContext);

  useEffect(() => {
    if (context.triggers.state.get('MESSENGER_FIRST_OPEN') === false) {
      context.script.set(IDontLikeThis);

      context.triggers.update('MESSENGER_FIRST_OPEN', true);
    }
  }, []);
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
