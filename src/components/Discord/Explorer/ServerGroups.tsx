import {P} from 'components/StyledText';
import {name} from 'faker';
import React, {FC, ReactNode, useContext} from 'react';

import {Dimensions, FlatList, ListRenderItem, View} from 'react-native';
import theme, {discordTheme} from 'themes';
import {
  DiscordContext,
  DiscordConversationType,
  DiscordGroup,
  DiscordServerType,
} from '../context';
import Avatar from './Avatar';
import Group from './Group';

const ServerGroups: FC = () => {
  const context = useContext(DiscordContext);
  const {width, height} = Dimensions.get('window');
  const renderItem: ListRenderItem<DiscordGroup> = ({item, index}) => {
    return (
      <Group image={''} name={item.name} index={index} rooms={item.rooms} />
    );
  };
  return (
    <View
      style={{
        width: width - 100 - width * 0.1,
        backgroundColor: discordTheme.colors.gray60,
        margin: 4,
        borderRadius: theme.BorderRadius.small,
        paddingHorizontal: theme.spacing.p1 / 2,
      }}>
      <P
        style={{
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: theme.spacing.p1,
          marginBottom: theme.spacing.p1,
        }}>
        {context.server.state?.name}
      </P>
      <FlatList
        contentContainerStyle={{}}
        ItemSeparatorComponent={props => {
          return (
            <View
              style={{
                height: 1,
                marginVertical: 5,
              }}
            />
          );
        }}
        style={{
          flexGrow: 1,
        }}
        data={context.server.state?.groups}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
      />
    </View>
  );
};

export default ServerGroups;
