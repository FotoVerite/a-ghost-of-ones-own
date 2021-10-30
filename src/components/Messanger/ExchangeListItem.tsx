import {transform} from '@babel/core';
import {Row} from 'components/Grid';
import {Bold, P} from 'components/StyledText';
import React, {FC} from 'react';
import {
  ColorValue,
  Image,
  ImageBackground,
  ImageSourcePropType,
  ImageStyle,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedValue} from 'react-native-reanimated';
import styled from 'styled-components/native';
import theme from 'themes';
import TextBubble from './TextBubble';

type Props = {
  avatarSprite: ImageSourcePropType;
  avatarStyles: ImageStyle;
  index: number;
  name: string;
  message: string;
  setMessageId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const ExchangeListItem: FC<Props> = ({
  avatarSprite,
  avatarStyles,
  index,
  message,
  name,
  setMessageId,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setMessageId(index);
      }}>
      <Row>
        <ImageBackground
          source={avatarSprite}
          style={[
            {
              width: 50,
              height: 50,
              marginRight: theme.spacing.p2,
              overflow: 'hidden',
              aspectRatio: 1,
            },
            avatarStyles,
          ]}
          imageStyle={{resizeMode: 'contain'}}
        />
        <View>
          <Bold>{name}</Bold>
          <P>{message}</P>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default ExchangeListItem;
