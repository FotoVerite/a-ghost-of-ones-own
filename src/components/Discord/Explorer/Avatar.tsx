import React, {FC, useContext} from 'react';
import {Row} from 'components/Grid';

import {Image, ImageURISource} from 'react-native';
import {P} from 'components/StyledText';
import theme from 'themes';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {DiscordContext} from '../context';

const Avatar: FC<{image: ImageURISource; name: string; index: number}> = ({
  image,
  index,
  name,
}) => {
  const context = useContext(DiscordContext);
  const selected = context.conversation.state?.name === context.DMs[index].name;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        context.conversation.set(context.DMs[index]);
      }}>
      <Row
        style={{
          alignItems: 'center',
          backgroundColor: selected ? '#6c6f73' : 'transparent',
          padding: theme.spacing.p1 / 2,
          borderRadius: theme.BorderRadius.small,
        }}>
        <Image
          source={image}
          style={{
            width: 35,
            height: 35,
            borderRadius: 20,
            marginEnd: theme.spacing.p1,
          }}
        />
        <P style={{color: 'white', fontWeight: 'bold'}}>{name}</P>
      </Row>
    </TouchableWithoutFeedback>
  );
};

export default Avatar;
