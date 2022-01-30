import React, {FC, useContext, useLayoutEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  StatusBar,
  View,
} from 'react-native';
import {NavigationProp, RouteProp, useRoute} from '@react-navigation/native';
import {Layout} from 'components/Grid';

import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import theme from 'themes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {screenParams} from '../Navigation/screens';
import PhotoListItem from './PhotoListItem';
import {PhotoContext, PhotoProps} from '../context';
import {State, TapGestureHandler} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  navigation: NavigationProp<'PhotosViewer'>;
  route: RouteProp<Record<string, object | undefined>, 'PhotosViewer'>;
};

const Photos: FC<Props> = ({route, navigation}) => {
  const routeParams = useRoute<RouteProp<screenParams, 'Photos'>>();
  const context = useContext(PhotoContext);
  const showHeader = context.sharedValues.showHeader;
  const [photoIndex, setPhotoIndex] = useState(routeParams.params.id);
  const insets = useSafeAreaInsets();

  const onViewRef = React.useRef(viewableItems => {
    onViewableItemsChanged(viewableItems);
    // Use viewable items in state or as intended
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(context.sharedValues.showHeader.value),
    };
  });

  const onViewableItemsChanged = ({
    viewableItems,
    changed,
  }: {
    viewableItems: ViewToken[];
  }) => {
    navigation.setParams({id: viewableItems[0].index});
    setPhotoIndex(viewableItems[0].index);
  };
  const {width, height} = Dimensions.get('window');

  const renderItem: ListRenderItem<PhotoProps> = ({item, index}) => {
    return <PhotoListItem photo={item} index={index} />;
  };

  const getItemLayout = (data, index) => {
    return {length: width, offset: width * index, index};
  };

  useLayoutEffect(() => {
    showHeader.value = 0;
  }, []);

  return (
    <Layout style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar hidden={false} barStyle={'light-content'} />
      <TapGestureHandler
        maxDelayMs={1000}
        onHandlerStateChange={e => {
          if (
            e.nativeEvent.absoluteY < 100 &&
            context.sharedValues.showHeader.value === 1
          ) {
          } else if (e.nativeEvent.state === State.END) {
            context.sharedValues.showHeader.value === 1
              ? (context.sharedValues.showHeader.value = 0)
              : (context.sharedValues.showHeader.value = 1);
          }
        }}>
        <View>
          <Animated.View
            style={[
              {
                justifyContent: 'center',
                backgroundColor: '#212121',
                width: '100%',
                paddingTop: insets.top,
                paddingBottom: theme.spacing.p1,
              },
              headerStyle,
            ]}>
            <TapGestureHandler
              onHandlerStateChange={() => {
                if (showHeader.value === 1) {
                  navigation.navigate('Album');
                }
              }}>
              <View style={{width: 40}}>
                <Icon
                  name="chevron-left"
                  size={40}
                  color={'#1588ba'}
                  style={[{}]}
                />
              </View>
            </TapGestureHandler>
          </Animated.View>
          <FlatList
            horizontal
            pagingEnabled
            bounces={false}
            onViewableItemsChanged={onViewRef.current}
            getItemLayout={getItemLayout}
            data={context.album.state?.photos}
            renderItem={renderItem}
            renderToHardwareTextureAndroid
            contentContainerStyle={{alignItems: 'center'}}
            keyExtractor={(item: any, index) => index + ''}
            initialScrollIndex={photoIndex}
            initialNumToRender={2}
          />
        </View>
      </TapGestureHandler>
    </Layout>
  );
};

export default Photos;
