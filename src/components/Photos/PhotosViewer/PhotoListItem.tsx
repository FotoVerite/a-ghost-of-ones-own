import React, {FC, useContext} from 'react';
import {View, Image, Dimensions} from 'react-native';

import theme from 'themes';
import {SharedElement} from 'react-navigation-shared-element';
import {PhotoContext, PhotoProps} from '../context';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {NoteText, P} from 'components/StyledText';
import {Row} from 'components/Grid';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PanGestureHandler} from 'react-native-gesture-handler';

type Props = {photo: PhotoProps; index: number};

const PhotoListItem: FC<Props> = ({photo, index}) => {
  const {width, height} = Dimensions.get('window');
  const context = useContext(PhotoContext);
  const showInfo = context.sharedValues.showInfo;

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

  return (
    <PanGestureHandler
      activeOffsetY={[-20, 20]}
      onGestureEvent={e => {
        if (e.nativeEvent.translationY < 0) {
          showInfo.value = 1;
        } else {
          showInfo.value = 0;
        }
      }}>
      <View
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
              source={photo.source}
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
            {photo.note}
          </P>
          <View
            style={{
              backgroundColor: '#282A25',
              flexGrow: 1,
              padding: theme.spacing.p1,
            }}>
            <NoteText size={'s'}>{photo.date}</NoteText>
            <Row style={{marginTop: theme.spacing.p1}}>
              <Icon
                name={'image-filter-drama'}
                color={'white'}
                size={24}
                tvParallaxProperties={undefined}
              />
              <NoteText style={{marginStart: theme.spacing.p2}}>
                {photo.title}
              </NoteText>
            </Row>
          </View>
        </Animated.View>
      </View>
    </PanGestureHandler>
  );
};

export default PhotoListItem;
