import React, {FC, useContext, useEffect, useState} from 'react';
import {P} from 'components/StyledText';
import {Moment} from 'moment';
import theme, {discordTheme} from 'themes';
import {Dimensions, Image, View} from 'react-native';
import {DiscordContext} from '../context';
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  SlideInDown,
  SlideInUp,
  SlideOutDown,
  SlideOutLeft,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Note from './Note';
import About from './About';
import Banner from './Banner';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {userInformation} from '../context/info';

type Props = {};

const UserInfo: FC<Props> = ({}) => {
  const [infoTranslation, setInfoTranslation] = useState(500);
  const [infoOffsetY, setInfoOffsetY] = useState(500);
  const [info, setInfo] = useState({});

  const insets = useSafeAreaInsets();
  const dimensions = Dimensions.get('window');

  const updateOffset = (offset: number, absoluteY: number) => {
    if (infoTranslation + offset > 50) {
      setInfoOffsetY(infoTranslation + offset);
    }
  };

  const updateTranslationStartAndOffset = (offset: number) => {
    const newNumber = infoTranslation + offset;
    setInfoTranslation(newNumber);
    if (offset > 75) {
      context.userInfo.set(undefined);
    }
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {},
    onActive: ({translationY, absoluteY}, ctx) => {
      runOnJS(updateOffset)(translationY, absoluteY);
    },
    onEnd: ({translationY}, ctx) => {
      runOnJS(updateTranslationStartAndOffset)(translationY);
    },
  });

  const context = useContext(DiscordContext);

  const infoStyle = useAnimatedStyle(() => {
    return {
      top: infoOffsetY,
    };
  });

  useEffect(() => {
    setInfoOffsetY(500);
    setInfoTranslation(500);
    if (context.userInfo.state !== undefined) {
      console.log(context.userInfo.state);
      setInfo(userInformation[context.userInfo.state]);
    }
  }, [context.userInfo.state]);

  return (
    <>
      {context.userInfo.state && (
        <>
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              backgroundColor: '#1c1b1b89',
              zIndex: 1001,
            }}
          />
          <Animated.View
            entering={SlideInDown}
            exiting={SlideOutDown}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              zIndex: 1002,
            }}>
            <TouchableWithoutFeedback
              onPress={() => context.userInfo.set(undefined)}
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: 'transparent',
              }}></TouchableWithoutFeedback>

            <Animated.View
              style={[
                {
                  flexGrow: 0,
                  width: '100%',
                  bottom: -300,
                  position: 'absolute',
                },
                infoStyle,
              ]}>
              <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View
                  style={{
                    height: '100%',
                    width: '100%',
                    position: 'absolute',
                    zIndex: 1005,
                  }}></Animated.View>
              </PanGestureHandler>

              <View style={{flexGrow: 1}}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: 3,
                    width: 75,
                    borderRadius: theme.BorderRadius.small,
                    alignSelf: 'center',
                    marginVertical: theme.spacing.p1,
                  }}></View>
                <View
                  style={{
                    backgroundColor: discordTheme.colors.gray30,
                    flexGrow: 1,
                  }}>
                  {info && (
                    <>
                      <Banner info={info} />
                      <About about={info.about} />
                      <Note note={info.note} />
                    </>
                  )}
                </View>
              </View>
            </Animated.View>
          </Animated.View>
        </>
      )}
    </>
  );
};

export default UserInfo;
