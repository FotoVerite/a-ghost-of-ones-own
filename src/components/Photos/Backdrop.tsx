import {P} from 'components/StyledText';
import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  ImageProps,
  ImageStyle,
  Platform,
  ScrollView,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  Layout,
  SharedValue,
  SlideInRight,
  SlideOutRight,
  useAnimatedStyle,
} from 'react-native-reanimated';
import theme from 'themes';

export type AlbumProps = {
  item: any;
  index: number;
  scrollX: SharedValue<number>;
};

const Backdrop: FC<AlbumProps> = ({item, index, scrollX}) => {
  const {width, height} = Dimensions.get('window');

  const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.5;
  const BACKDROP_HEIGHT = height * 0.65;

  if (!item.coverPhoto) {
    return null;
  }

  const inputRange = [
    (index - 2) * (ITEM_SIZE + theme.spacing.p2),
    (index - 1) * (ITEM_SIZE + theme.spacing.p2),
    index * (ITEM_SIZE + theme.spacing.p2),
  ];

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(scrollX.value, inputRange, [0, width, width]),
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          height,
          overflow: 'hidden',
        },
        animatedStyle,
      ]}>
      <Image
        source={item.coverPhoto}
        style={{
          width: width,
          height: BACKDROP_HEIGHT,
          position: 'absolute',
        }}
      />
    </Animated.View>
  );
};

export default Backdrop;
