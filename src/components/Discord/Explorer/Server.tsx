import React, {FC, useContext, useEffect} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Layout, Row} from 'components/Grid';

import {Image, View} from 'react-native';
import pantopiticon from 'components/Messanger/exchanges/images/pantopiticon.jpeg';
import theme from 'themes';
import {ImageSource} from 'react-native-vector-icons/Icon';
import Animated, {
  useAnimatedStyle,
  interpolate,
  interpolateColor,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {DiscordContext, DiscordServerType} from '../context';

const Server: FC<{avatar: ImageSource; server: DiscordServerType}> = ({
  avatar,
  server,
}) => {
  const context = useContext(DiscordContext);

  const selected = useSharedValue(context.server.state === server ? 1 : 0);

  const circleStyle = useAnimatedStyle(() => {
    return {
      borderRadius: interpolate(selected.value, [0, 1], [25, 18]),
      backgroundColor: interpolateColor(
        selected.value,
        [0, 1],
        ['#5d5a5a', '#dcd7d7'],
      ),
    };
  });

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(selected.value, [0, 1], [5, 50]),
    };
  });

  const avatarStyle = useAnimatedStyle(() => {
    return {
      borderRadius: interpolate(selected.value, [0, 1], [25, 18]),
    };
  });

  useEffect(() => {
    selected.value = withTiming(context.server.state === server ? 1 : 0);
  }, [context.server.state]);

  return (
    <Row>
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
            context.dmsSelected.set(isActive => false);
            context.server.set(server);
            context.conversation.set(server.groups[0].rooms[0]);
          }}>
          <Animated.Image
            source={avatar}
            style={[
              {
                width: 45,
                height: 45,
                borderRadius: 25,
                alignSelf: 'center',
                alignItems: 'center',
                alignContent: 'center',
              },
              avatarStyle,
            ]}
          />
        </Animated.View>
      </View>
    </Row>
  );
};

export default Server;
