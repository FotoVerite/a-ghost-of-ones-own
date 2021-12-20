import React, {FC, useCallback, useEffect, useState} from 'react';
import {
  ColorValue,
  Dimensions,
  Image,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import styled from 'styled-components/native';

import {Row} from 'components/Grid';
import {Bold, P} from 'components/StyledText';

import theme from 'themes';
import Animated, {
  Easing,
  interpolate,
  SlideInDown,
  SlideOutDown,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Moment} from 'moment';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  avatar: any;
  glitch?: boolean;
  assetSetter: React.Dispatch<React.SetStateAction<any>>;
  message: string | {image: string} | {data: Moment};
  name?: string;
  side: 'left' | 'right';
  type: 'top' | 'bottom' | 'middle';
  color?: ColorValue | string[];
  textColor?: ColorValue;
  singular: boolean;
  styles?: TextStyle;
  width: {
    state: number | undefined;
    set: React.Dispatch<React.SetStateAction<number | undefined>>;
  };
};

const TextBubble: FC<Props> = ({
  assetSetter,
  avatar,
  glitch,
  message,
  name,
  type,
  color,
  side,
  singular,
  styles,
  textColor,
  width,
}) => {
  const hasColor = () => {
    if (color == null) {
      return 'blue';
    } else if (typeof color === 'string') {
      return color;
    } else {
      return 'transparent';
    }
  };

  const ANIMATION_DURATION = 2000;
  const GLITCH_AMPLITUDE = 5;

  const mainAnimatedValue = useSharedValue(0);
  const animatedX = useSharedValue(0);

  const runAnimation = () => {
    mainAnimatedValue.value = withRepeat(
      withTiming(100, {duration: ANIMATION_DURATION, easing: Easing.bounce}),
      -1,
    );
    animatedX.value = withRepeat(
      withSequence(
        withTiming(GLITCH_AMPLITUDE, {duration: 1000}),
        withTiming(-GLITCH_AMPLITUDE, {duration: 1000}),
      ),
      -1,
    );
  };

  useEffect(() => {
    if (glitch) {
      runAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [animatedHeightArray, setanimatedHeightArray] = useState([
    0.01, 20, 10, 30, 30, 30, 15, 20, 10, 10, 20,
  ]);

  const [animatedTranslateY, setAnimatedTranslateY] = useState([
    30, 40, 20, 60, 60, 60, 20, 5, 0, 0, 20,
  ]);
  const transformStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      mainAnimatedValue.value,
      [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      animatedTranslateY,
    );

    const height = interpolate(
      mainAnimatedValue.value,
      [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      animatedHeightArray,
    );
    return {
      height: height,
      transform: [{translateY: translateY}, {translateX: animatedX.value}],
    };
  });

  const innerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      mainAnimatedValue.value,
      [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      animatedTranslateY,
    );

    return {
      transform: [{translateY: -translateY}],
    };
  });

  const basicStyles: ViewStyle = {
    paddingHorizontal: theme.spacing.p1,
    // flexGrow: 0,
    backgroundColor: hasColor(),
    marginBottom: singular ? 12 : 2,
    borderRadius: 12,
    marginLeft: singular ? 0 : 35,
    minWidth: width.state,
  };

  if (type === 'top') {
    basicStyles['borderBottomLeftRadius'] = 0;
    basicStyles['borderBottomStartRadius'] = 0;
    basicStyles['borderBottomEndRadius'] = 0;
    basicStyles['borderBottomRightRadius'] = 0;
  }

  if (type === 'middle' && !singular) {
    basicStyles['borderRadius'] = 0;
  }
  if (type === 'bottom') {
    basicStyles['borderTopStartRadius'] = 0;
    basicStyles['borderTopLeftRadius'] = 0;
    basicStyles['borderTopEndRadius'] = 0;
    basicStyles['borderTopRightRadius'] = 0;
    basicStyles['marginBottom'] = 12;
    basicStyles['marginLeft'] = 0;
  }

  const onLayout = useCallback(event => {
    const viewWidth = event.nativeEvent.layout.width;
    const viewHeight = event.nativeEvent.layout.height;
    width.set(width => (width && width > viewWidth ? width : viewWidth));
    if (glitch) {
      setAnimatedTranslateY([
        viewHeight * 0.3,
        viewHeight * 0.4,
        viewHeight * 0.2,
        viewHeight * 0.6,
        viewHeight * 0.6,
        viewHeight * 0.6,
        viewHeight * 0.2,
        0,
        0,
        viewHeight * 0.2,
      ]);
      setanimatedHeightArray([
        0.01,
        viewHeight * 0.2,
        viewHeight * 0.1,
        viewHeight * 0.3,
        viewHeight * 0.5,
        viewHeight * 0.15,
        viewHeight * 0.2,
        viewHeight * 0.1,
        viewHeight * 0.1,
        viewHeight * 0.2,
      ]);
    }
  }, []);

  const textMessage = (runOnLayout: boolean) => (
    <P
      onLayout={runOnLayout ? onLayout : undefined}
      style={{
        padding: 4,
        color: textColor || 'white',
        margin: 0,
        textAlign: side,
        fontSize: 13,
        width: width.state,
        textShadowColor: runOnLayout ? undefined : 'red',
        textShadowOffset: runOnLayout ? undefined : {width: 2, height: 5},
        textShadowRadius: runOnLayout ? undefined : 5,
      }}>
      {message}
    </P>
  );

  const imageMessage = () => (
    <TouchableHighlight onPress={() => assetSetter(message.image)}>
      <Image
        onLayout={onLayout}
        source={message.image}
        style={{
          width: '98%',
          aspectRatio: message.aspect || 1,
          height: undefined,
          width: message.width,
          marginVertical: theme.spacing.p1,
          borderRadius: theme.BorderRadius.small,
        }}
        resizeMethod={'scale'}
      />
    </TouchableHighlight>
  );

  const renderMessage = (runOnlayout: boolean) => {
    if (message.image != null) {
      return imageMessage();
    } else {
      return textMessage(runOnlayout);
    }
  };

  const renderLinearGradiantMessageView = () => {
    return (
      <Row style={{flexGrow: 0}}>
        {avatar != null && (type === 'bottom' || singular) && (
          <Image
            source={avatar}
            style={{
              borderRadius: theme.BorderRadius.normal,
              width: 30,
              height: 30,
              marginRight: 5,
              marginBottom: theme.spacing.p1,
              alignSelf: 'flex-end',
            }}
          />
        )}
        <LinearGradient
          colors={(color || ['blue', '#000AAA']) as string[]}
          style={[basicStyles, styles]}>
          {renderMessage(true)}
        </LinearGradient>
        {glitch && (
          <Animated.View
            style={[
              {
                position: 'absolute',
                left: avatar ? 34 : 0,
                zIndex: 5,
                overflow: 'hidden',
              },
              transformStyle,
            ]}>
            <Animated.View style={[{height: 150}, innerStyle]}>
              <LinearGradient
                colors={(color || ['white', '#000AAA']) as string[]}
                style={[
                  basicStyles,
                  styles,
                  {borderWidth: 1, borderColor: '#02d8f3'},
                ]}>
                {renderMessage(false)}
              </LinearGradient>
            </Animated.View>
          </Animated.View>
        )}
      </Row>
    );
  };
  if (typeof color === 'string')
    return <View style={[basicStyles, styles]}>{renderMessage(true)}</View>;
  else return renderLinearGradiantMessageView();
};

export default TextBubble;
