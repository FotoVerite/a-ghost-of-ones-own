import React, {FC, useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  FlatList,
  Image,
  ImageProps,
  ImageSourcePropType,
  Keyboard,
  ListRenderItem,
  NativeEventSubscription,
  ScrollView,
  View,
} from 'react-native';
import {RouteProp, useIsFocused, useRoute} from '@react-navigation/native';
import {Layout, Row} from 'components/Grid';

import Exchange from './Exchange';
import avatars from './avatars/psn-avatars.jpeg';
import ExchangeListItem from './ExchangeListItem';
import theme from 'themes';
import Animated, {
  FadeIn,
  FadeOut,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from 'components/Navigation/screens';
import Exchanges, {ExchangeItemType} from './Exchanges';
import {Bold, P} from 'components/StyledText';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {BlurView} from '@react-native-community/blur';
import Fuse from 'fuse.js';

import {zola} from './exchanges/zola';
import {grindrReset} from './exchanges/grindrReset';
import seemlessOrders from './exchanges/seemless';
import {fedex} from './exchanges/fedex';
import {Moment} from 'moment';
import {movieNight} from './exchanges/moveNight';

type Props = {
  navigation: StackNavigationProp<screenParams, 'Messages'>;
  route: RouteProp<Record<string, screenParams | undefined>, 'Messages'>;
};
export type MessageExchangeType = {
  exchange: string[];
  audio?: any;
  avatar?: string;
  color?: string | string[];
  glitch?: boolean;
};
export type ExchangesType = {
  name: string;
  avatar: any;
  listDisplayText?: string;
  exchanges: ({timeStamp: Moment} | MessageExchangeType)[];
};

function isExchangeType(x: any): x is MessageExchangeType {
  return x.hasOwnProperty('exchange');
}

const test = [zola, grindrReset, seemlessOrders, fedex, movieNight];
const Messenger: FC<Props> = ({navigation}) => {
  const showingMessage = useSharedValue(0);
  const route = useRoute<RouteProp<screenParams, 'Messages'>>();
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState(test);

  const [messageId, setMessageId] = useState<number | undefined>(
    route.params?.id,
  );

  useEffect(() => {
    let unsubscribe: NativeEventSubscription;
    if (messageId != null) {
      unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => {
        if (messageId != null) {
          setMessageId(undefined);
        }
        return true;
      });
    }
    //NB: It might make sense to seperate this logic once estimate is complete.
    //NB I don't love any of the complexity
    return () => {
      if (unsubscribe != null) {
        unsubscribe.remove();
      }
    };
  }, [messageId, route]);

  useEffect(() => {
    if (messageId) {
      showingMessage.value = 1;
    } else {
      showingMessage.value = 0;
    }
    return () => {};
  }, [messageId]);

  const progress = useDerivedValue(() => {
    return messageId != null ? withTiming(1) : withTiming(0);
  }, [messageId]);

  const opacityStyle = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [0, 1], [0, 1]);
    return {opacity};
  });

  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ['name'],
  };
  const fuse = new Fuse(test, options);

  const renderItem: ListRenderItem<ExchangesType> = ({item, index}) => {
    const filteredExchanges = item.exchanges.filter(
      exchange => isExchangeType(exchange) && exchange.avatar != null,
    );

    return (
      <ExchangeListItem
        avatarSprite={item.avatar}
        index={index}
        name={item.name}
        message={
          item.listDisplayText ||
          filteredExchanges.reverse()[0].exchange.reverse()[0] ||
          '...'
        }
        avatarStyles={{}}
        setMessageId={setMessageId}
      />
    );
  };

  const messageTitle = () => (
    <Animated.View entering={FadeIn.delay(100)}>
      <Row>
        <TouchableOpacity onPress={() => setMessageId(undefined)}>
          <P
            style={{
              alignSelf: 'center',
              fontSize: 33,
              color: 'pink',
              marginLeft: 12,
              marginRight: 12,
            }}>
            {'<'}
          </P>
        </TouchableOpacity>
        <Bold style={{alignSelf: 'center'}}>{test[messageId!].name}</Bold>
      </Row>
    </Animated.View>
  );
  return (
    <Layout>
      <TextInput
        style={{
          marginTop: 55,
          height: 40,
          borderColor: 'black',
          borderStyle: 'solid',
          borderWidth: 1,
          margin: theme.spacing.p1,
          paddingHorizontal: theme.spacing.p1,
          borderRadius: theme.BorderRadius.small,
        }}
        placeholder="Search"
        onChangeText={text => {
          let results = fuse.search(text).map(x => x.item);
          if (text == undefined || text === '') {
            results = test;
          }
          setMessages(results);
        }}
        defaultValue={''}
      />
      <FlatList
        style={{backgroundColor: theme.colors.muted, padding: theme.spacing.p1}}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
        ItemSeparatorComponent={props => {
          return (
            <View
              style={{
                height: 2,
                marginVertical: 10,
                backgroundColor: 'white',
              }}
            />
          );
        }}
      />
      {messageId != null && <Exchanges exchanges={test[messageId].exchanges} />}
      <Animated.View
        style={[
          {height: 50, zIndex: 2, position: 'absolute', width: '100%', top: 0},
        ]}>
        <>
          <BlurView
            style={{
              zIndex: 3,
              position: 'absolute',
              width: '100%',
              height: '100%',
            }}
            blurType="light"
            blurAmount={30}
            reducedTransparencyFallbackColor="white"
          />
          <Row style={{alignItems: 'center', zIndex: 3}}>
            {messageId == null ? (
              <Bold style={{marginLeft: theme.spacing.p2}}>Chats</Bold>
            ) : (
              messageTitle()
            )}
          </Row>
        </>
      </Animated.View>
    </Layout>
  );
};

export default Messenger;
