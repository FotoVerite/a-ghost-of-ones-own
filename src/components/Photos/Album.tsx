import React, {FC, useContext, useEffect} from 'react';
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

import theme from 'themes';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {AlbumProps, ITEM_SIZE_RATIO, PhotoContext} from './context';
import {useNavigation, useNavigationState} from '@react-navigation/native';

export type Props = {
  album: AlbumProps;
  index: number;
  viewStyle: ViewStyle;
  imageStyle: ImageStyle;
  scrollX: SharedValue<number>;
};

const Album: FC<Props> = ({album, index, imageStyle, scrollX, viewStyle}) => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  const context = useContext(PhotoContext);

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
          context.album.set(album);
          navigation.navigate('Album', {id: index});
        }}>
        <Image
          source={album.coverPhoto}
          style={[{aspectRatio: 1, height: undefined, zIndex: 3}, imageStyle]}
        />
        <P style={{color: 'black', textAlign: 'center'}}>{album.title}</P>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default Album;
