import React, {FC, useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Layout} from 'components/Grid';
import Album from './Album';
import theme from 'themes';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import BackdropRenderer from './BackdropRenderer';
import {AlbumProps, PhotoContext} from './context';
import Header from './Header';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Albums'>;
};

export const ITEM_SIZE_RATIO = 0.5;
export const ALBUM_PHOTO_SIZE_RATIO = 0.8;

const Albums: FC<Props> = ({route, navigation}) => {
  const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

  const {width, height} = Dimensions.get('window');

  const [note, setNote] = useState<undefined | any>(undefined);

  const ITEM_SIZE = width * ITEM_SIZE_RATIO;
  const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2 - theme.spacing.p2;

  const scrollX = useSharedValue(0);
  const context = useContext(PhotoContext);
  const album = context.album.state;
  const albums = context.albums.slice();
  albums.unshift({});
  albums.push({});

  const renderItem: ListRenderItem<AlbumProps> = ({item, index}) => {
    if (!item.coverPhoto) {
      return <View style={{width: EMPTY_ITEM_SIZE}}></View>;
    }
    return (
      <Album
        index={index}
        album={item}
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
      <Header />
      <BackdropRenderer images={albums} scrollX={scrollX} />

      <AnimatedFlatlist
        extraData={scrollX}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={{padding: theme.spacing.p1, zIndex: 2}}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        data={albums}
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
    </Layout>
  );
};

export default Albums;
