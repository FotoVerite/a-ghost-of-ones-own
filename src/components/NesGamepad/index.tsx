import React, {FC, useContext, useEffect, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';

import {ApplicationContext} from 'contexts/app';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Layout, Row} from 'components/Grid';
import theme from 'themes';
import {PanGestureHandler} from 'react-native-gesture-handler';
import RedButton from './RedButton';
import Notification from 'components/Notification';
import BlackButton from './BlackButton';
import Animated, {
  add,
  runOnJS,
  sub,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {vec, Vector} from 'react-native-redash';
import {P} from 'components/StyledText';
import {difference, isEqual} from 'lodash';
import Svg, {Path} from 'react-native-svg';

const NesGamepad: FC = () => {
  let {width, height} = Dimensions.get('window');
  // if (width < height) {
  //   const oldWidth = width;
  //   const oldHeight = height;
  //   width = oldHeight;
  //   height = oldWidth;
  // }
  const insets = useSafeAreaInsets();
  const context = useContext(ApplicationContext);
  const [code, setCode] = useState(new Array<string>());
  const [correct, setCorrect] = useState(false);

  const startVector = useSharedValue<Vector<number>>(vec.create(0, 0));

  const endVector = useSharedValue<Vector<number>>(vec.create(0, 0));

  const innerWidth = width - theme.spacing.p4;
  const innerHeight = height - theme.spacing.p4 * 2 - insets.top;

  useEffect(() => {
    if (correct) {
      context.notifications.add({
        iconName: 'reminder',
        title: 'Secret',
        body: 'Secret',
        key: 'secret',
      });
    }
  }, [correct]);

  const inputDirection = () => {
    const {x: startX, y: startY} = vec.create(
      startVector.value.x,
      startVector.value.y,
    );
    const {x: endX, y: endY} = vec.create(endVector.value.x, endVector.value.y);

    if (endX > startX + 50 || endX < startX - 50) {
      setAndCheckCode(endX > startX ? 'right' : 'left');
    } else {
      setAndCheckCode(endY > startY ? 'down' : 'up');
    }
  };
  const lastPathValue = useSharedValue('0 0');
  const path = useSharedValue('');

  const animatedProps = useAnimatedProps(() => {
    return {
      d: path.value,
    };
  });

  const setAndCheckCode = (value: string) => {
    setCode(code => {
      const clone = code.slice();
      if (clone.length === 13) {
        clone.shift();
      }
      if (
        isEqual(clone, [
          'up',
          'up',
          'down',
          'down',
          'left',
          'right',
          'left',
          'right',
          'a',
          'b',
          'select',
          'start',
        ])
      ) {
        setCorrect(true);
      }
      return clone;
    });
  };

  const styles = StyleSheet.create({
    grayBar: {
      height: innerHeight / 5 - theme.spacing.p2,
      backgroundColor: '#747586',
    },
    halfBar: {
      height: innerHeight / 10 - theme.spacing.p2,
      backgroundColor: '#747586',
    },
  });

  const gestureHandler = useAnimatedGestureHandler({
    onStart: ({x, y}) => {
      startVector.value = vec.create(x, y);
      lastPathValue.value = `${x} ${y}`;
    },
    onActive: ({x, y}) => {
      endVector.value = vec.create(x, y);
      path.value = path.value + `M${lastPathValue.value} ${x} ${y}`;
      lastPathValue.value = `${x} ${y}`;
    },
    onEnd: ({x, y}) => {
      path.value = '';
      runOnJS(inputDirection)();
    },
    onCancel: ({x, y}) => {
      path.value = '';
    },
  });

  const AnimatedPath = Animated.createAnimatedComponent(Path);

  return (
    <Layout
      style={{
        backgroundColor: 'gray',
      }}>
      <View
        style={{
          backgroundColor: 'black',
          marginHorizontal: theme.spacing.p2,
          marginVertical: theme.spacing.p4,
          flexGrow: 1,
          flexDirection: 'row',
        }}>
        <Row style={{justifyContent: 'space-evenly'}}>
          <View style={{width: '33%', justifyContent: 'center'}}>
            <PanGestureHandler
              onGestureEvent={gestureHandler}
              shouldCancelWhenOutside={true}
              minDist={50}>
              <Animated.View
                style={{
                  alignSelf: 'center',
                  backgroundColor: 'white',
                  borderWidth: 2,
                  height: innerWidth * 0.25,
                  width: innerWidth * 0.25,
                }}>
                <Svg>
                  <AnimatedPath
                    animatedProps={animatedProps}
                    stroke={'black'}
                    strokeWidth={10}
                    strokeDashoffset={4}
                  />
                </Svg>
              </Animated.View>
            </PanGestureHandler>
          </View>
          <View
            style={{
              width: '33%',
              justifyContent: 'space-between',
            }}>
            <View style={[styles.grayBar, {marginTop: 0}]} />

            <View style={styles.grayBar} />
            <View style={styles.grayBar} />

            <View
              style={{
                height: innerHeight / 5 - theme.spacing.p2,
                backgroundColor: '#c4c4c4',
              }}>
              <Row
                style={{justifyContent: 'space-around', alignItems: 'center'}}>
                <BlackButton
                  set={setAndCheckCode}
                  value={'select'}
                  parentWidth={innerWidth}
                  parentHeight={innerHeight}
                />
                <BlackButton
                  set={setAndCheckCode}
                  value={'start'}
                  parentWidth={innerWidth}
                  parentHeight={innerHeight}
                />
              </Row>
            </View>
            <View style={[styles.halfBar, {marginBottom: 0}]} />
          </View>
          <View style={{width: '33%'}}>
            <View
              style={{
                height: '25%',
                marginTop: 'auto',
                marginBottom: innerHeight / 10 - 12,
              }}>
              <Row
                style={{
                  flexGrow: 1,
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <RedButton
                  set={setAndCheckCode}
                  value={'a'}
                  parentWidth={innerWidth}
                  parentHeight={innerHeight}
                />
                <RedButton
                  set={setAndCheckCode}
                  value={'b'}
                  parentWidth={innerWidth}
                  parentHeight={innerHeight}
                />
              </Row>
            </View>
          </View>
        </Row>
      </View>
    </Layout>
  );
};

export default NesGamepad;
