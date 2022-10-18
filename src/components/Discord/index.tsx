import React, {FC} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Layout} from 'components/Grid';

import Header from './Header';
import DiscordContextProvider from './context';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackButton from './BackButton';
import Exchanges from './Exchanges';
import Explorer from './Explorer';
import {discordTheme} from 'themes';
import Navigation from './Navigation';
import Info from './UserInfo';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Discord'>;
};

const Discord: FC<Props> = ({route, navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: discordTheme.colors.gray50}}>
      <DiscordContextProvider>
        <BackButton />

        <Layout
          style={{
            backgroundColor: discordTheme.colors.gray50,
            flex: 1,
            margin: 0,
          }}>
          <Exchanges />
          <Explorer />
        </Layout>
        <Navigation />
        <Info />
      </DiscordContextProvider>
    </SafeAreaView>
  );
};

export default Discord;
