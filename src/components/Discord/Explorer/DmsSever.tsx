import React, {FC, useContext} from 'react';
import {Row} from 'components/Grid';

import {Dimensions, View} from 'react-native';
import theme from 'themes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {DiscordContext} from '../context';

const DmsServer: FC = () => {
  const context = useContext(DiscordContext);

  const {sharedValues} = context;

  const circleStyle = useAnimatedStyle(() => {
    return {
      borderRadius: interpolate(
        sharedValues.dmsSelected.value,
        [0, 1],
        [25, 18],
      ),
      backgroundColor: interpolateColor(
        sharedValues.dmsSelected.value,
        [0, 1],
        ['#5d5a5a', '#dcd7d7'],
      ),
    };
  });

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(sharedValues.dmsSelected.value, [0, 1], [5, 50]),
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        sharedValues.dmsSelected.value,
        [0, 1],
        ['#d3d3da', '#6d77e4'],
      ),
    };
  });

  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  return (
    <Row style={{flexGrow: 0}}>
      <Animated.View
        style={[
          {
            backgroundColor: 'white',
            width: 5,
            borderTopRightRadius: theme.BorderRadius.normal,
            borderBottomRightRadius: theme.BorderRadius.normal,
            alignSelf: 'center',
            alignItems: 'center',
            alignContent: 'center',
          },
          indicatorStyle,
        ]}></Animated.View>
      <View
        style={{
          flexGrow: 1,
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Animated.View
          style={[
            {
              borderRadius: 25,
              height: 50,
              width: 50,
              alignSelf: 'center',
              justifyContent: 'center',
            },
            circleStyle,
          ]}
          onTouchEnd={() => {
            context.dmsSelected.set(isActive => true);
            context.server.set(undefined);
          }}>
          <AnimatedIcon
            name="chat-outline"
            size={25}
            style={[
              {
                alignSelf: 'center',
                alignItems: 'center',
                alignContent: 'center',
                textAlign: 'center',
                textAlignVertical: 'center',
              },
              iconStyle,
            ]}
          />
        </Animated.View>
      </View>
    </Row>
  );
};

export default DmsServer;
