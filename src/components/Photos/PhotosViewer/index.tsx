import React, {FC, useEffect, useRef, useState} from 'react';
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
  PanResponder,
} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Layout, Row} from 'components/Grid';

import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import theme from 'themes';
import {screenParams} from 'components/Navigation/screens';
import {SharedElement} from 'react-navigation-shared-element';
import {NoteText, P} from 'components/StyledText';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Moment} from 'moment';
import {albums} from '../AlbumView';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'PhotosViewer'>;
};

export type PhotoType = {
  source: string;
  notes?: string;
  date: Moment;
  title?: string;
};
export type AlbumType = {
  title: string;
  photos: PhotoType[];
};
const Photos: FC<Props> = ({route, navigation}) => {
  const routeParams = useRoute<RouteProp<screenParams, 'PhotosViewer'>>();
  const showInfo = useSharedValue(0);
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (e, state) => {
        if (state.dy < -100 && state.vy < 0) {
          showInfo.value = 1;
        } else if (state.dy > 100) {
          showInfo.value = 0;
        }
      },
      onPanResponderRelease: () => {},
    }),
  ).current;
  const {width, height} = Dimensions.get('window');

  const [photo, setPhoto] = useState<undefined | any>(undefined);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      marginTop: withSpring(interpolate(showInfo.value, [1, 0], [-200, 0])),
    };
  });

  const notesAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(
        interpolate(showInfo.value, [1, 0], [height * 0.33, 0]),
      ),
    };
  });

  useEffect(() => {
    let unsubscribe: NativeEventSubscription;
    unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => {
      navigation.setParams({
        id: photo,
      });
      return false;
    });

    //NB: It might make sense to seperate this logic once estimate is complete.
    //NB I don't love any of the complexity
    return () => {
      if (unsubscribe != null) {
        unsubscribe.remove();
      }
    };
  }, [photo, route]);

  const onViewRef = React.useRef(viewableItems => {
    onViewableItemsChanged(viewableItems);
    // Use viewable items in state or as intended
  });

  const onViewableItemsChanged = ({
    viewableItems,
    changed,
  }: {
    viewableItems: ViewToken[];
  }) => {
    setPhoto(viewableItems[0].index);
  };

  const renderItem: ListRenderItem<PhotoType> = ({item, index}) => {
    return (
      <View
        {...panResponder.panHandlers}
        style={[
          {
            width: width,
            height: height,
            justifyContent: 'center',
          },
        ]}>
        <Animated.View style={[{}, animatedStyle]}>
          <SharedElement id={`photo.${index}`}>
            <Image
              source={item.source}
              resizeMode={'contain'}
              style={{width: width}}></Image>
          </SharedElement>
        </Animated.View>
        <Animated.View
          style={[
            {
              paddingVertical: theme.spacing.p2,
              width: width,
              bottom: 0,
              position: 'absolute',
              borderTopStartRadius: theme.BorderRadius.normal,
              borderTopEndRadius: theme.BorderRadius.normal,
              backgroundColor: 'black',
            },
            notesAnimatedStyle,
          ]}>
          <P
            size={'m'}
            style={{
              paddingHorizontal: theme.spacing.p2,
              color: 'white',
              marginBottom: theme.spacing.p2,
            }}>
            {item.notes}
          </P>
          <View
            style={{
              backgroundColor: '#282A25',
              flexGrow: 1,
              padding: theme.spacing.p1,
            }}>
            <NoteText size={'s'}>{item.date}</NoteText>
            <Row style={{marginTop: theme.spacing.p1}}>
              <Icon name={'image-filter-drama'} color={'white'} size={24} />
              <NoteText style={{marginStart: theme.spacing.p2}}>
                {item.title}
              </NoteText>
            </Row>
          </View>
        </Animated.View>
      </View>
    );
  };

  return (
    <Layout style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar hidden />

      <FlatList
        horizontal
        pagingEnabled
        bounces={false}
        onViewableItemsChanged={onViewRef.current}
        data={albums[routeParams.params.album_id].photos}
        renderItem={renderItem}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'center'}}
        keyExtractor={(item: any, index) => index + ''}
        initialScrollIndex={routeParams.params.id}
        initialNumToRender={1}
      />
    </Layout>
  );
};

export default Photos;
