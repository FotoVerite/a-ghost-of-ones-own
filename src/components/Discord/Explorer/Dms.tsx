import {P} from 'components/StyledText';
import {name} from 'faker';
import React, {FC, ReactNode, useContext} from 'react';

import {Dimensions, FlatList, ListRenderItem, View} from 'react-native';
import theme, {discordTheme} from 'themes';
import {DiscordContext, DiscordConversationType} from '../context';
import Avatar from './Avatar';

const Dms: FC = () => {
  const context = useContext(DiscordContext);
  const {width, height} = Dimensions.get('window');
  const renderItem: ListRenderItem<DiscordConversationType> = ({
    item,
    index,
  }) => {
    return <Avatar image={item.avatar} name={item.name} index={index} />;
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
        }}>
        Direct Messages
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
        data={context.DMs}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
      />
    </View>
  );
};

export default Dms;
