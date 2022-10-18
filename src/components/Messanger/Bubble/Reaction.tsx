import * as React from 'react';
import {FC} from 'react';
import {View} from 'react-native';
import Svg, {Color, Ellipse} from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MessagesType} from '../context/MessengerContext';

interface SVGProps {
  message: MessagesType;
  rightSide: boolean;
  color: string | string[];
}

const Reaction: FC<SVGProps> = ({message, rightSide, color}) => {
  color = rightSide ? color[2] : '#5a60b8';
  return (
    <View
      style={{
        position: 'absolute',
        top: -10,
        left: rightSide ? undefined : -15,
        right: rightSide ? -15 : undefined,
        zIndex: 2,
      }}>
      <View style={{transform: [{scaleX: rightSide ? -1 : 1}]}}>
        <Svg viewBox="27.303 21.379 116.792 122.135" width={36} height={36}>
          <Ellipse
            cx={79.957}
            cy={73.086}
            rx={51.461}
            ry={51.461}
            fill={color || '#000aaa'}
            stroke="transparent"
          />
          <Ellipse
            cx={116.915}
            cy={114.09}
            rx={14.267}
            ry={14.267}
            fill={color || '#000aaa'}
            stroke="transparent"
          />
          <Ellipse
            cx={137.97}
            cy={136.633}
            rx={6.208}
            ry={6.208}
            fill={color || '#000aaa'}
            stroke="transparent"
          />
        </Svg>
      </View>
      <Icon
        name={message.options.icon.name}
        color={message.options.icon.color}
        size={16}
        style={{
          position: 'absolute',
          top: 8,
          left: rightSide ? undefined : 8,
          right: rightSide ? 8 : undefined,
        }}
      />
    </View>
  );
};
export default Reaction;
