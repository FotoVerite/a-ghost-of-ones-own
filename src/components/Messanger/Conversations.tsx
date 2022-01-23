import React, {FC, useContext} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import Animated, {interpolate, useAnimatedProps} from 'react-native-reanimated';

import theme from 'themes';
import {ConversationType, MessengerContext} from './context/MessengerContext';
import ConversationListItem from './ConversationListItem';

const Conversations: FC = () => {
  const context = useContext(MessengerContext);
  const {sharedValues} = context;

  const ConversationsAnimatedStyles = useAnimatedProps(() => {
    return {
      marginLeft: interpolate(
        sharedValues.messageSelected.value,
        [0, 1, 2],
        [0, -50, -50],
      ),
    };
  });

  const renderItem: ListRenderItem<ConversationType> = ({item, index}) => (
    <ConversationListItem conversation={item} />
  );
  return (
    <Animated.View style={ConversationsAnimatedStyles}>
      <FlatList
        ItemSeparatorComponent={props => {
          return (
            <View
              style={{
                height: 1,
                marginVertical: 10,
                backgroundColor: 'gray',
              }}
            />
          );
        }}
        style={{
          borderRadius: theme.BorderRadius.small,
          backgroundColor: 'white',
          paddingHorizontal: theme.spacing.p2,
          flexGrow: 1,
        }}
        data={context.viewableConversations.state}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
      />
    </Animated.View>
  );
};

export default Conversations;
