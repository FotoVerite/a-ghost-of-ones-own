import React, {FC, useState} from 'react';
import {ColorValue, Image, View} from 'react-native';
import TextBubble from './TextBubble';
import CRC32 from 'crc-32';
import theme from 'themes';
import {P} from 'components/StyledText';

type Messages = (
  | string
  | {
      image: any;
    }
)[];

export type ExchangeType = {
  exchange: Messages;
  avatar?: any;
  glitch?: boolean;
  color?: string | string[];
  name?: string;
};

type Props = {
  assetSetter: React.Dispatch<React.SetStateAction<any>>;
  avatar?: any;
  glitch?: boolean;
  messages: Messages;
  name?: string;
  color?: ColorValue | string[];
  textColor?: ColorValue;
};

const Exchange: FC<Props> = ({
  assetSetter,
  avatar,
  glitch,
  messages,
  name,
  color,
  textColor,
}) => {
  const renderBubbles = () => {
    const [width, setWidth] = useState<undefined | number>();
    return messages.map((message, index) => {
      let type: 'top' | 'middle' | 'bottom' = 'middle';
      if (index === 0) {
        type = 'top';
      }
      if (index === messages.length - 1) {
        type = 'bottom';
      }
      //Override if only one message in exchange
      if (messages.length === 1) {
        type = 'middle';
      }

      return (
        <TextBubble
          width={{state: width, set: setWidth}}
          glitch={glitch}
          assetSetter={assetSetter}
          avatar={avatar}
          type={type}
          side={avatar ? 'left' : 'right'}
          message={message}
          name={name}
          color={color}
          textColor={textColor}
          singular={messages.length === 1}
          key={CRC32.str(index + message.toString())}
        />
      );
    });
  };

  return (
    <View
      style={{
        maxWidth: '80%',
        alignSelf: avatar ? 'flex-start' : 'flex-end',
        alignItems: avatar ? 'flex-start' : 'flex-end',
      }}>
      {name && <P style={{marginLeft: 40, fontSize: 10}}>{name}</P>}
      {renderBubbles()}
    </View>
  );
};

export default Exchange;
