/* eslint-disable no-bitwise */
import React, {FC, useContext} from 'react';
import {Image, View, ViewStyle} from 'react-native';

import {P} from 'components/StyledText';

import theme from 'themes';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {MessagesType, MessengerContext} from '../context/MessengerContext';
import {ScreenWidth} from 'react-native-elements/dist/helpers';
import Reaction from './Reaction';

const Bubble: FC<{
  avatar: any;
  color?: string | string[];
  message: MessagesType;
  length: number;
  index: number;
}> = ({avatar, color, message, length, index}) => {
  const context = useContext(MessengerContext);
  const singular = length === 1;
  const hasColor = () => {
    if (color == null) {
      return 'blue';
    } else if (typeof color === 'string') {
      return color;
    } else {
      return 'transparent';
    }
  };

  let type: 'top' | 'middle' | 'bottom' = 'middle';
  if (index === 0) {
    type = 'top';
  }
  if (index === length - 1) {
    type = 'bottom';
  }
  //Override if only one message in exchange
  if (length === 1) {
    type = 'middle';
  }

  const basicStyles: ViewStyle = {
    flexGrow: 1,
    paddingHorizontal: theme.spacing.p1,
    paddingVertical: theme.spacing.p1 / 3,
    backgroundColor: hasColor(),
    marginBottom: singular ? 12 : 2,
    borderRadius: 12,
    minWidth: 10,
  };
  if (type === 'top') {
    basicStyles.borderBottomLeftRadius = 0;
    basicStyles.borderBottomStartRadius = 0;
    basicStyles.borderBottomEndRadius = 0;
    basicStyles.borderBottomRightRadius = 0;
  }
  if (type === 'middle' && !singular) {
    basicStyles.borderRadius = 0;
  }
  if (type === 'bottom') {
    basicStyles.borderTopStartRadius = 0;
    basicStyles.borderTopLeftRadius = 0;
    basicStyles.borderTopEndRadius = 0;
    basicStyles.borderTopRightRadius = 0;
    basicStyles.marginBottom = 12;
  }

  return (
    <View>
      {message.options?.icon && (
        <Reaction message={message} rightSide={avatar} color={color} />
      )}
      <LinearGradient
        colors={(color || ['blue', '#000AAA']) as string[]}
        style={[basicStyles]}>
        {message.type === 'text' && (
          <P
            style={{
              padding: 4,
              color: 'white',
              margin: 0,
              textAlign: avatar ? 'left' : 'right',
              fontSize: 13,
            }}>
            {message.content}
          </P>
        )}
        {message.type === 'image' && (
          <TouchableWithoutFeedback
            onPress={() => context.message.set(message)}>
            <Image
              source={message.content}
              style={{
                alignSelf: 'center',
                padding: 0,
                height:
                  (ScreenWidth * 0.8) / message.options.aspect -
                  theme.spacing.p4,
                aspectRatio: message.options.aspect,
                margin: theme.spacing.p2,
              }}
            />
          </TouchableWithoutFeedback>
        )}
      </LinearGradient>
    </View>
  );
};

export default Bubble;
