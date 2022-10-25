import React, {FC} from 'react';
import {Dimensions, Image, View} from 'react-native';
import {P} from 'components/StyledText';
import theme, {GrindrTheme} from 'themes';
import {MessagesType} from 'components/Discord/context';
import {Row} from 'components/Grid';

const Bubble: FC<{
  direction: 'left' | 'right';
  message: MessagesType;
  index: number;
}> = ({direction, message, index}) => {
  const backgroundColor =
    direction == 'left'
      ? GrindrTheme.colors.grindrBlue
      : GrindrTheme.colors.grinderYellow;
  if (message.type === 'text') {
    return (
      <Row
        style={{
          justifyContent: direction === 'right' ? 'flex-start' : 'flex-end',
        }}>
        <View
          style={{
            width: 0,
            height: 0,
            borderWidth: 10,
            borderTopWidth: 0,
            borderBottomWidth: 20,
            borderColor: 'transparent',
            borderBottomColor: backgroundColor,
            transform: [
              {rotateZ: direction === 'right' ? '-120deg' : '120deg'},
            ],
            position: 'absolute',
            bottom: 3,
            right: direction === 'right' ? undefined : 0,
          }}></View>
        <Row
          style={{
            flexGrow: 0,
            justifyContent: 'flex-end',
            backgroundColor: backgroundColor,
            borderRadius: theme.BorderRadius.small,
            padding: theme.spacing.p1,
            marginBottom: 9,
            marginStart: direction === 'right' ? 12 : 0,
            marginEnd: direction === 'left' ? 12 : 0,
            maxWidth: '80%',
          }}>
          <P
            style={{
              color: 'black',
              marginEnd: theme.spacing.p1,
              flexGrow: 0,
            }}>
            {message.content.toString()}
          </P>
        </Row>
      </Row>
    );
  } else if (message.type === 'image') {
    return (
      <Image
        source={message.content}
        style={{
          marginVertical: theme.spacing.p1,
          width: message.options.width || width - 100,
          height: message.options.width || width - 100,
          borderRadius: theme.BorderRadius.small,
        }}
      />
    );
  } else {
    return <></>;
  }
};

export default Bubble;
