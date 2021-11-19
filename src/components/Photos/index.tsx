import React, {FC, useEffect, useState} from 'react';
import {
  BackHandler,
  Button,
  Dimensions,
  FlatList,
  ListRenderItem,
  NativeEventSubscription,
  Platform,
  StatusBar,
  Touchable,
  TouchableHighlight,
  View,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Layout} from 'components/Grid';
import Album from './Album';
import theme from 'themes';

import mbv from 'components/Notes/notes/images/records/mbv.jpeg';
import ct from 'components/Notes/notes/images/records/ct.jpeg';
import records1 from 'components/Notes/notes/images/records/records1.jpeg';
import bmr from 'components/Notes/notes/images/records/bmr.jpeg';
import coil from 'components/Notes/notes/images/records/coil.jpeg';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import BackdropRenderer from './BackdropRenderer';
import {P} from 'components/StyledText';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Photos'>;
};

export const ITEM_SIZE_RATIO = 0.5;
export const ALBUM_PHOTO_SIZE_RATIO = 0.8;

const Photos: FC<Props> = ({route, navigation}) => {
  const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

  const {width, height} = Dimensions.get('window');

  const [note, setNote] = useState<undefined | any>(undefined);

  const ITEM_SIZE = width * ITEM_SIZE_RATIO;
  const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2 - theme.spacing.p2;

  const scrollX = useSharedValue(0);

  useEffect(() => {
    let unsubscribe: NativeEventSubscription;
    if (note != null) {
      unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => {
        if (note != null) {
          setNote(undefined);
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
  }, [note, route]);

  const renderItem: ListRenderItem<{image: any; title: string}> = ({
    item,
    index,
  }) => {
    if (!item.image) {
      return <View style={{width: EMPTY_ITEM_SIZE}}></View>;
    }
    return (
      <Album
        image={item.image}
        index={index}
        title={item.title}
        navigation={navigation}
        setter={setNote}
        viewStyle={{
          marginHorizontal: theme.spacing.p1,
          padding: theme.spacing.p1,
          paddingTop: theme.spacing.p3,
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 24,
          width: ITEM_SIZE,
        }}
        imageStyle={{
          width: '100%',
          height: ITEM_SIZE * ALBUM_PHOTO_SIZE_RATIO,
          resizeMode: 'cover',
          borderRadius: 24,
          margin: 0,
          marginBottom: 10,
        }}
        scrollX={scrollX}
      />
    );
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
    },
  });
  return (
    <Layout style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar hidden />
      <BackdropRenderer
        images={[
          {},
          {image: mbv, title: '1'},
          {image: bmr, title: '2'},
          {image: coil, title: '3'},
          {image: mbv, title: '2'},
          {image: coil, title: '3'},
          {},
        ]}
        scrollX={scrollX}
      />

      <AnimatedFlatlist
        extraData={scrollX}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={{padding: theme.spacing.p1, zIndex: 2}}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        data={[
          {},
          {image: mbv, title: 'Recent'},
          {image: mbv, title: 'Memories'},
          {image: coil, title: 'Sleep'},
          {image: mbv, title: 'People'},
          {image: coil, title: 'Places'},

          {},
        ]}
        pagingEnabled
        renderItem={renderItem}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'center'}}
        snapToInterval={ITEM_SIZE + theme.spacing.p2}
        keyExtractor={(item: any, index) => index + ''}
        snapToAlignment="start"
        scrollEventThrottle={16}
        onScroll={scrollHandler}
      />
      {note}
    </Layout>
  );
};

export default Photos;
