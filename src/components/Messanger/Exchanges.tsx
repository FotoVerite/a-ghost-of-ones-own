import React, {FC, useContext, useEffect, useState} from 'react';
import Sound from 'react-native-sound';

import {
  Button,
  FlatList,
  Image,
  ListRenderItem,
  TouchableHighlight,
  View,
  ViewToken,
} from 'react-native';

import Exchange, {ExchangeType} from './Exchange';
import Animated, {
  SlideInDown,
  SlideInRight,
  SlideOutDown,
  SlideOutRight,
} from 'react-native-reanimated';

import {Row} from 'components/Grid';
import {P} from 'components/StyledText';
import DisplayDateTime from './DisplayDateTime';
import {Moment} from 'moment';

import theme from 'themes';
import {ApplicationContext} from 'contexts/app';

type DateTimeType = {
  timeStamp: Moment;
};

export type ExchangeItemType = DateTimeType | ExchangeType;

function isDateTime(x: any): x is DateTimeType {
  return x.hasOwnProperty('timeStamp');
}

function isExchangeType(x: any): x is ExchangeType {
  return x.hasOwnProperty('exchange');
}

const Exchanges: FC<{
  exchanges: ExchangeItemType[];
}> = ({exchanges}) => {
  const [asset, setAsset] = useState(undefined);
  const [playedAudio, setPlayedAudio] = useState<number[]>([]);
  const context = useContext(ApplicationContext);

  const renderItem: ListRenderItem<ExchangeItemType> = ({item, index}) => {
    if (isDateTime(item)) {
      return (
        <>
          {index === 0 && <View style={{marginVertical: theme.spacing.p2}} />}
          <DisplayDateTime datetime={item.timeStamp} />
        </>
      );
    } else if (isExchangeType(item)) {
      return (
        <>
          {index === 0 && <View style={{marginVertical: theme.spacing.p2}} />}
          <Exchange
            assetSetter={setAsset}
            glitch={item.glitch}
            messages={item.exchange}
            name={item.name}
            avatar={item.avatar}
            color={item.color}
          />
          {index === exchanges.length - 1 && (
            <View style={{marginVertical: theme.spacing.p2}} />
          )}
        </>
      );
    } else {
      return <></>;
    }
  };

  useEffect(() => {
    return () => context.audio.set(undefined);
  }, []);

  const playAudio = (audio: any) => {
    if (audio == null) {
      return;
    }
    setPlayedAudio(state => {
      state.push(audio);
      return state;
    });
    context.audio.set({uri: audio});
  };

  const onViewRef = React.useRef(viewableItems => {
    onViewableItemsChanged(viewableItems);
    // Use viewable items in state or as intended
  });

  const soundPlayer = React.useRef<Sound>();

  const onViewableItemsChanged = ({
    viewableItems,
    changed,
  }: {
    viewableItems: ViewToken[];
  }) => {
    const audioEvents = viewableItems
      .map(item => item.item)
      .filter(item => item.audio != null && !playedAudio.includes(item.audio));
    if (audioEvents.length > 0) playAudio(audioEvents[0].audio);
  };

  return (
    <>
      <Animated.View
        style={{
          position: 'absolute',
          flex: 1,
          width: '100%',
          height: '100%',
        }}
        entering={SlideInRight}
        exiting={SlideOutRight}>
        <FlatList
          style={{
            backgroundColor: theme.colors.muted,
            padding: theme.spacing.p1,
            paddingBottom: 0,
          }}
          initialNumToRender={25}
          onViewableItemsChanged={onViewRef.current}
          data={exchanges}
          renderItem={renderItem}
          keyExtractor={(item: any, index) => index + ''}
        />
      </Animated.View>
      {asset != null && (
        <Animated.View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            zIndex: 5,
            backgroundColor: 'black',
            flex: 1,
          }}
          entering={SlideInDown}
          exiting={SlideOutDown}>
          <Row
            style={{
              height: 50,
              alignSelf: 'flex-end',
              alignItems: 'center',
              justifyContent: 'flex-end',
              borderBottomColor: 'white',
              borderBottomWidth: 1,
              width: '100%',
              flexGrow: 0,
            }}>
            <TouchableHighlight onPress={() => setAsset(undefined)}>
              <P style={{color: 'blue', marginEnd: theme.spacing.p1}}>Done</P>
            </TouchableHighlight>
          </Row>
          <View
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 50,
            }}>
            <Image
              source={asset}
              style={{
                width: '90%',
                height: undefined,
                aspectRatio: 1,
                margin: theme.spacing.p1,
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
              resizeMethod={'scale'}
            />
          </View>
        </Animated.View>
      )}
    </>
  );
};

export default Exchanges;
