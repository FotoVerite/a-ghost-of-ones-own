import React, {FC} from 'react';
import {Dimensions, FlatList, Platform, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SharedValue} from 'react-native-reanimated';
import Backdrop from './Backdrop';

export type BackdropRendererProps = {
  images: any;
  scrollX: SharedValue<number>;
};

const BackdropRenderer: FC<BackdropRendererProps> = ({images, scrollX}) => {
  const {width, height} = Dimensions.get('window');

  const BACKDROP_HEIGHT = height * 0.65;
  const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.5;

  return (
    <View
      style={{
        height: BACKDROP_HEIGHT,
        width: width,
        position: 'absolute',
        zIndex: 2,
      }}>
      <FlatList
        data={images.reverse()}
        keyExtractor={(item, index) => index + '-backdrop'}
        removeClippedSubviews={false}
        renderToHardwareTextureAndroid
        contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
        renderItem={({item, index}) => {
          return <Backdrop item={item} index={index} scrollX={scrollX} />;
        }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'black']}
        style={{
          height: BACKDROP_HEIGHT,
          width: width,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};

export default BackdropRenderer;
