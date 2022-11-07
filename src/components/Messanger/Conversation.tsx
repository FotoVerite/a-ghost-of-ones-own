import React, {FC, useContext} from 'react';
import {Dimensions, FlatList, ListRenderItem, View} from 'react-native';

import Animated, {interpolate, useAnimatedProps} from 'react-native-reanimated';
import {ExchangeType, MessengerContext} from './context/MessengerContext';
import Exchange from './Exchange';
import theme from 'themes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Conversation: FC = () => {
  const context = useContext(MessengerContext);
  const {sharedValues, conversation} = context;
  const {width, height} = Dimensions.get('window');
  const FolderAnimatedProps = useAnimatedProps(() => {
    return {
      marginLeft: interpolate(
        sharedValues.messageSelected.value,
        [0, 1, 2],
        [width, 0, 0],
      ),
    };
  });

  const renderConversation: ListRenderItem<ExchangeType> = ({item, index}) => (
    <Exchange
      exchange={item}
      conversationOptions={conversation.state?.options}
      index={index}
      key={`exchange-${index}`}
    />
  );
  const insets = useSafeAreaInsets();

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'white',
          zIndex: 2,
          top: 0,
          position: 'absolute',
          width: width,
          flexGrow: 1,
          bottom: 0,
          paddingBottom: insets.bottom + 45,
          height: height,
        },
        FolderAnimatedProps,
      ]}>
      <FlatList
        style={{
          backgroundColor: theme.colors.muted,
          padding: theme.spacing.p1,
          paddingBottom: 0,
        }}
        initialNumToRender={25}
        // onViewableItemsChanged={onViewRef.current}
        data={conversation.state?.exchanges}
        renderItem={renderConversation}
        keyExtractor={(item: any, index) => index + ''}
        ListHeaderComponent={
          <View style={{height: 0, marginBottom: theme.spacing.p3}}></View>
        }
        ListFooterComponent={
          <View style={{height: 0, marginBottom: theme.spacing.p2}}></View>
        }
      />
    </Animated.View>
  );
};

export default Conversation;
