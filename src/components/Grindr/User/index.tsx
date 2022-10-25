import React, {FC, useContext, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ListRenderItem,
  TouchableOpacity,
  View,
} from 'react-native';

import {GrindrContext} from '../context';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {screenParams} from '../Navigation/screens';
import {P} from 'components/StyledText';
import {SharedElement} from 'react-navigation-shared-element';
import theme, {GrindrTheme} from 'themes';
import {tags} from 'react-native-svg/lib/typescript/xml';
import Tag from './tag';
import {Row} from 'components/Grid';
import Field from './field';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  useAnimatedGestureHandler,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  interpolateColor,
  interpolate,
} from 'react-native-reanimated';
import Info from './Info';
import {PanGestureHandler} from 'react-native-gesture-handler';

const User: FC = () => {
  const routeParams = useRoute<RouteProp<screenParams, 'User'>>();
  const id = routeParams.params['id'];
  const context = useContext(GrindrContext);
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation<StackNavigationProp<screenParams>>();
  const user = context.Users[routeParams.params['id']];

  const [infoTranslation, setInfoTranslation] = useState(500);
  const [infoOffsetY, setInfoOffsetY] = useState(500);
  const sharedOffset = useSharedValue(500);
  const sharedTranslation = useSharedValue(500);

  const updateOffset = (offset: number, absoluteY: number) => {
    setInfoOffsetY(infoTranslation + offset);
  };

  const updateTranslationStartAndOffset = (offset: number) => {
    const newNumber = infoTranslation + offset;
    setInfoTranslation(newNumber);
    if (newNumber > 550) {
      setInfoTranslation(500);
      setInfoOffsetY(500);
    }
  };

  const updateSharedOffset = (offset: number) => {
    sharedOffset.value = sharedTranslation.value + offset;
  };

  const updateSharedOnEnd = (offset: number) => {
    sharedTranslation.value = +offset;
    if (sharedTranslation.value > 550) {
      sharedTranslation.value = 500;
      sharedOffset.value = 500;
    }
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {},
    onActive: ({translationY, absoluteY}, ctx) => {
      sharedOffset.value = Math.max(translationY + infoTranslation, 0);
      runOnJS(updateOffset)(translationY, absoluteY);
    },
    onEnd: ({translationY}, ctx) => {
      runOnJS(updateTranslationStartAndOffset)(translationY);
    },
  });

  const AnimatedP = Animated.createAnimatedComponent(P);

  const infoStyle = useAnimatedStyle(() => {
    return {
      top: infoOffsetY,
    };
  });

  const backgroundStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      sharedOffset.value,
      [500, 0],
      ['transparent', '#08080892'],
    );

    return {
      backgroundColor: color,
    };
  });

  const headerStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      sharedOffset.value,
      [500, 100],
      ['transparent', 'black'],
    );

    return {
      backgroundColor: color,
    };
  });

  const headerOpacity = useAnimatedStyle(() => {
    const opacity = interpolate(sharedOffset.value, [500, 100], [0, 1]);

    return {
      opacity: opacity,
    };
  });

  return (
    <>
      <Animated.View
        style={[
          {
            padding: theme.spacing.p1,
            flexGrow: 0,
            zIndex: 200,
            position: 'absolute',
            backgroundColor: 'black',
            width: '100%',
            flexDirection: 'row',
          },
          headerStyle,
        ]}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-left" size={32} style={{color: 'white'}} />
        </TouchableOpacity>
        <AnimatedP
          style={[
            {
              opacity: 0,
              margin: 'auto',
              color: 'white',
              textAlign: 'center',
              marginTop: 8,
            },
            headerOpacity,
          ]}>
          {user.username}
        </AnimatedP>
      </Animated.View>
      <View style={{backgroundColor: GrindrTheme.colors.gray30, flex: 1}}>
        <SharedElement id={`user.${id}`} style={{zIndex: 1}}>
          <Image
            source={user.image}
            resizeMode={'contain'}
            style={{width: width, height: height}}
          />
        </SharedElement>

        <Animated.View
          style={[
            {
              zIndex: 2,
              position: 'absolute',
              backgroundColor: '#070707a0',
              flex: 1,
              flexGrow: 1,
              minHeight: height,
              width: '100%',
            },
            backgroundStyle,
          ]}></Animated.View>
      </View>
      <Animated.View
        style={[
          {
            flexGrow: 1,
            bottom: -200,
            position: 'absolute',
            zIndex: 100,
          },
          infoStyle,
        ]}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View>
            <Info user={user} />
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </>
  );
};

export default User;
