import React, {FC} from 'react';
import {Image, View} from 'react-native';
import CRC32 from 'crc-32';
import {P} from 'components/StyledText';
import {ExchangeType} from './context/MessengerContext';
import Bubble from './Bubble';
import {Row} from 'components/Grid';
import theme from 'themes';
import DisplayDateTime from './DisplayDateTime';

const Exchange: FC<{
  exchange: ExchangeType;
  index: number;
  conversationOptions?: {
    multi?: boolean;
  };
}> = ({exchange, index, conversationOptions}) => {
  const {avatar, messages, name, timeStamp} = exchange;
  const renderBubbles = () => {
    return messages.map((message, index) => {
      return (
        <Bubble
          avatar={avatar}
          color={exchange.color}
          message={message}
          index={index}
          length={messages.length}
          key={CRC32.str(index + message.toString())}
        />
      );
    });
  };
  return (
    <View>
      {exchange.timeStamp && <DisplayDateTime datetime={exchange.timeStamp} />}
      <View
        style={{
          maxWidth: '80%',
          alignSelf: avatar ? 'flex-start' : 'flex-end',
          alignItems: avatar ? 'flex-start' : 'flex-end',
        }}>
        <Row
          style={{
            flexGrow: 0,
            marginBottom: 4,
            alignContent: 'center',
            justifyContent: 'center',
          }}></Row>
        <Row style={{flexGrow: 0, alignItems: 'flex-end'}}>
          {avatar && (
            <Image
              source={avatar}
              style={{
                width: 30,
                height: 30,
                marginEnd: theme.spacing.p1,
                marginBottom: theme.spacing.p1,
                borderRadius: theme.BorderRadius.small,
              }}
            />
          )}
          <View>
            {conversationOptions?.multi && name && (
              <P
                style={{
                  fontSize: 13,
                  alignSelf: 'flex-start',
                  marginStart: theme.spacing.p1,
                }}>
                {name}
              </P>
            )}
            {renderBubbles()}
          </View>
        </Row>
      </View>
    </View>
  );
};

export default Exchange;
