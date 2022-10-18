import React, {FC, ReactNode, useContext} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Layout, Row} from 'components/Grid';

import {Image, ListRenderItem, View} from 'react-native';
import theme, {discordTheme} from 'themes';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Server from './Server';
import Icon from 'react-native-vector-icons/FontAwesome';
import DmsServer from './DmsSever';
import {
  DiscordContext,
  DiscordConversationType,
  DiscordRoom,
  DiscordServerType,
} from '../context';
import {P} from 'components/StyledText';

const Room: FC<{room: DiscordRoom; selected: boolean}> = ({room, selected}) => {
  const context = useContext(DiscordContext);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        const conversation = room;
        if (conversation)
          context.conversation.set(
            conversation as unknown as DiscordConversationType,
          );
      }}>
      <Row
        style={{
          backgroundColor: selected ? '#56565b' : 'transparent',
          borderRadius: 5,
          paddingVertical: 2,
        }}>
        <Icon
          name="hashtag"
          color={selected ? 'white' : '#868686'}
          size={15}
          style={[
            {
              marginStart: theme.spacing.p1 + 10,
              marginEnd: 5,
              alignSelf: 'center',
              alignItems: 'center',
            },
          ]}
        />
        <P
          key={room.name}
          style={{
            color: selected ? 'white' : '#868686',
            fontWeight: 'bold',
          }}>
          {room.name}
        </P>
      </Row>
    </TouchableWithoutFeedback>
  );
};

export default Room;
