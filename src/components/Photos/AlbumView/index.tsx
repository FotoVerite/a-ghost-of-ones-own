import React, {FC, useEffect, useState} from 'react';
import {
  BackHandler,
  Dimensions,
  FlatList,
  ListRenderItem,
  NativeEventSubscription,
  Platform,
  StatusBar,
  View,
  Image,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Layout} from 'components/Grid';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import theme from 'themes';
import {screenParams} from 'components/Navigation/screens';
import {recent} from '../albums/recent';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Album'>;
};

export type PhotoType = {source: string; notes?: string};
export type AlbumType = {
  title: string;
  photos: PhotoType[];
};

export const albums = [recent, recent, recent, recent, recent];

const Photos: FC<Props> = ({route, navigation}) => {
  const routeParams = useRoute<RouteProp<screenParams, 'Album'>>();
  console.log(routeParams.params.id);

  const {width, height} = Dimensions.get('window');

  const [photo, setPhoto] = useState<undefined | any>(undefined);

  useEffect(() => {
    let unsubscribe: NativeEventSubscription;
    if (photo != null) {
      unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => {
        if (photo != null) {
          setPhoto(undefined);
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
  }, [photo, route]);

  const renderItem: ListRenderItem<PhotoType> = ({item, index}) => {
    return (
      <View>
        <TouchableWithoutFeedback
          style={{}}
          onPress={() => {
            navigation.push('PhotosViewer', {
              album_id: routeParams.params.id - 1,
              id: index,
            });
          }}>
          <SharedElement id={`photo.${index}`}>
            <Image
              source={item.source}
              style={{
                width: width / 3 - theme.spacing.p1,
                aspectRatio: 1,
                height: undefined,
              }}></Image>
          </SharedElement>
        </TouchableWithoutFeedback>
      </View>
    );
  };

  return (
    <Layout style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar hidden />

      <FlatList
        bounces={false}
        style={{padding: theme.spacing.p1, zIndex: 2}}
        data={albums[routeParams.params.id - 1].photos}
        renderItem={renderItem}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'center'}}
        numColumns={3}
        keyExtractor={(item: any, index) => index + ''}
      />
    </Layout>
  );
};

export default Photos;
