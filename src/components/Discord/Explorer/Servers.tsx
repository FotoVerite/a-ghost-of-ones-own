import React, {FC, ReactNode, useContext} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Layout, Row} from 'components/Grid';

import {Image, ListRenderItem, View} from 'react-native';
import theme, {discordTheme} from 'themes';
import {FlatList} from 'react-native-gesture-handler';
import Server from './Server';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DmsServer from './DmsSever';
import {DiscordContext, DiscordServerType} from '../context';

const Explorer: FC = () => {
  const context = useContext(DiscordContext);

  const renderItem: ListRenderItem<DiscordServerType> = ({item, index}) => (
    <Server avatar={item.avatar} server={item} />
  );
  return (
    <View
      style={{
        backgroundColor: discordTheme.colors.gray40,
        width: 75,
        paddingTop: theme.spacing.p1,
      }}>
      <DmsServer />
      <View
        style={{
          backgroundColor: '#FFF',
          height: 2,
          margin: theme.spacing.p1,
        }}></View>
      <FlatList
        contentContainerStyle={{
          backgroundColor: '#323232',
          flex: 0,
          margin: 0,
          width: 75,
        }}
        ItemSeparatorComponent={props => {
          return (
            <View
              style={{
                height: 1,
                marginVertical: 2,
              }}
            />
          );
        }}
        style={{
          flexGrow: 1,
        }}
        data={context.servers}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
      />
    </View>
  );
};

export default Explorer;
