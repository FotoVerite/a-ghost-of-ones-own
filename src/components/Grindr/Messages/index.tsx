import {Row} from 'components/Grid';
import React, {FC, useContext} from 'react';
import {Dimensions, FlatList, Image, ListRenderItem, View} from 'react-native';

import theme, {discordTheme} from 'themes';
import {GrindrContext} from '../context';
import MessageListItem from './MessageListItem';
import me from '../assets/avatars/unknown.jpeg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {screenParams} from 'components/Navigation/screens';

const Messages: FC = () => {
  const context = useContext(GrindrContext);
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation<StackNavigationProp<screenParams>>();

  const renderConversation: ListRenderItem<MessageListItemType> = ({
    item,
    index,
  }) => (
    <MessageListItem
      name={item.name}
      avatar={item.avatar}
      exchanges={item.exchanges}
      index={index}
      key={`exchange-${index}`}
    />
  );

  return (
    <View style={{flex: 1}}>
      <Row
        style={{
          backgroundColor: discordTheme.colors.gray30,
          padding: theme.spacing.p1,
          flexGrow: 0,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('User');
          }}>
          <Image
            source={me}
            style={{width: 40, height: 40, borderRadius: 20}}
          />
        </TouchableOpacity>
      </Row>
      <FlatList
        style={{
          backgroundColor: discordTheme.colors.gray30,
          paddingHorizontal: theme.spacing.p1,
          paddingBottom: 0,
          flexGrow: 1,
        }}
        initialNumToRender={25}
        // onViewableItemsChanged={onViewRef.current}
        data={context.Messages}
        renderItem={renderConversation}
        keyExtractor={(item: any, index) => index + ''}
      />
    </View>
  );
};

export default Messages;
