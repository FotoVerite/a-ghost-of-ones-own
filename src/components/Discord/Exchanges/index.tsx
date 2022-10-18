import React, {FC, useContext} from 'react';
import {Dimensions, FlatList, ListRenderItem, View} from 'react-native';

import {DiscordExchangeType, DiscordContext} from '../context';
import Exchange from './Exchange';
import theme, {discordTheme} from 'themes';
import Header from '../Header';
import Animated, {
  FadeIn,
  FadeOut,
  interpolate,
  useAnimatedProps,
} from 'react-native-reanimated';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Exchanges: FC = () => {
  const context = useContext(DiscordContext);
  const {conversation} = context;
  const {width, height} = Dimensions.get('window');

  const {sharedValues} = context;

  const ConversationsAnimatedStyles = useAnimatedProps(() => {
    return {
      marginLeft: interpolate(
        sharedValues.messageSelected.value,
        [0, 1],
        [0, width * 0.9 - 16],
      ),
    };
  });

  const OverlayStyles = useAnimatedProps(() => {
    return {
      opacity: interpolate(
        sharedValues.messageSelected.value,
        [0, 1],
        [0, 0.5],
      ),
    };
  });

  const AnimatedTouchableWithoutFeedback = Animated.createAnimatedComponent(
    TouchableWithoutFeedback,
  );

  const renderExchange: ListRenderItem<DiscordExchangeType> = ({
    item,
    index,
  }) => (
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
          backgroundColor: discordTheme.colors.gray50,
          position: 'absolute',
          zIndex: 2,
          top: 0,
          width: width,
          flex: 1,
          height: height - 70 - insets.bottom,
          flexGrow: 1,
          bottom: 0,
        },
        ConversationsAnimatedStyles,
      ]}>
      {context.messengerState.state === 1 && (
        <View style={{position: 'absolute', zIndex: 3}}>
          <AnimatedTouchableWithoutFeedback
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(400)}
            style={[
              {
                backgroundColor: 'black',
                opacity: 0.5,
                zIndex: 3,
                width: width,
                height: height - 70 - insets.bottom,
              },
            ]}
            onPress={() =>
              context.messengerState.set(0)
            }></AnimatedTouchableWithoutFeedback>
        </View>
      )}
      <Header />
      <FlatList
        style={{
          paddingBottom: 0,
        }}
        initialNumToRender={25}
        // onViewableItemsChanged={onViewRef.current}
        data={conversation.state.messages || conversation.state.exchanges || []}
        renderItem={renderExchange}
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

export default Exchanges;
