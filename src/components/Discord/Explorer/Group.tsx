import React, {FC, useContext, useEffect, useState} from 'react';
import {Row} from 'components/Grid';

import {ImageURISource, TouchableHighlight, View} from 'react-native';
import {P} from 'components/StyledText';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {DiscordContext, DiscordConversationType, DiscordRoom} from '../context';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'themes';
import Room from './Room';

const Group: FC<{
  image: ImageURISource;
  name: string;
  index: number;
  rooms: DiscordRoom[];
}> = ({image, index, name, rooms}) => {
  const context = useContext(DiscordContext);
  const isSelected =
    context.conversation.state?.name === context.DMs[index].name;

  const open = useSharedValue(
    context.DMs[index].name === context.conversation.state?.name ? 1 : 0,
  );

  const [isOpen, setOpen] = useState(true);

  const chevronStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${interpolate(open.value, [0, 1], [45, 0])}deg`}],
    };
  });

  const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  useEffect(() => {
    open.value = withTiming(isOpen ? 1 : 0, {duration: 100});
  }, [isOpen]);

  return (
    <View>
      <TouchableHighlight
        underlayColor={'#6c6f73'}
        style={{
          borderRadius: 4,
          paddingHorizontal: theme.spacing.p1 / 2,
        }}
        onPress={() => {
          setOpen(isOpen => !!!isOpen);
        }}>
        <Row
          style={{
            backgroundColor: isSelected ? '#d5d5d5' : 'transparent',
          }}>
          <Animated.View
            style={[
              {
                alignContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                marginEnd: theme.spacing.p1 / 2,
              },
              chevronStyle,
            ]}>
            <AnimatedIcon
              name="chevron-down"
              color={'#d5d5d5'}
              size={10}
              style={[
                {
                  alignSelf: 'center',
                  alignItems: 'center',
                },
                chevronStyle,
              ]}
            />
          </Animated.View>
          <P
            style={{
              color: '#d5d5d5',
              fontWeight: 'bold',
            }}>
            {name}
          </P>
        </Row>
      </TouchableHighlight>

      {isOpen && (
        <View>
          {rooms.map((room, index) => (
            <Room
              key={`room-${index}`}
              room={room}
              selected={room.name === context.conversation.state?.name}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default Group;
