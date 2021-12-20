
import React, {FC} from 'react';
import {
  Dimensions,
  Image,
  ImageProps,
  ImageStyle,
  Platform,
  ScrollView,
  TouchableOpacity,
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

import {P} from 'components/StyledText';

import {ITEM_SIZE_RATIO} from '.';

import theme from 'themes';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

export type AlbumProps = {
  navigation: any;
  image: any;
  index: number;
  title: string;
  setter: any;
  viewStyle: ViewStyle;
  imageStyle: ImageStyle;
  scrollX: SharedValue<number>;
};

const Album: FC<AlbumProps> = ({
  image,
  index,
  title,
  imageStyle,
  navigation,
  scrollX,
  viewStyle,
}) => {
  const {width, height} = Dimensions.get('window');

  const ITEM_SIZE = width * ITEM_SIZE_RATIO;

  const inputRange = [
    (index - 2) * (ITEM_SIZE + theme.spacing.p2),
    (index - 1) * (ITEM_SIZE + theme.spacing.p2),
    index * (ITEM_SIZE + theme.spacing.p2),
  ];

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollX.value,
            inputRange,
            [50, -50, 50],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[animatedStyle, viewStyle]}>
      <TouchableWithoutFeedback
        style={{}}
        onPress={() => {
          navigation.push('Album', {id: index});
        }}>
       
          <Image
            source={image}
            style={[{aspectRatio: 1, height: undefined, zIndex: 3}, imageStyle]}
          />
        <P style={{color: 'black', textAlign: 'center'}}>{title}</P>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default Album;
