import React, {FC, useContext} from 'react';
import {
  Image,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {P} from 'components/StyledText';
import {Row} from 'components/Grid';
import theme from 'themes';
import DisplayDateTime from 'components/Messanger/DisplayDateTime';
import moment from 'moment';
import Bubble from './Bubble';
import {GrindrExchangeType} from '../context';

const ExchangeListItem: FC<{
  exchange: GrindrExchangeType;
  index: number;
  conversationOptions?: {
    multi?: boolean;
  };
}> = ({exchange, index, conversationOptions}) => {
  const {messages, timeStamp} = exchange;
  const renderBubbles = () => {
    return messages.map((message, index) => {
      return (
        <Bubble
          key={index}
          index={index}
          direction={exchange.direction}
          message={message}
        />
      );
    });
  };
  if (messages[0] !== undefined) {
    return (
      <View
        style={{
          marginBottom: 6,
          marginStart: 6,
        }}>
        {renderBubbles()}
        <P
          style={{
            color: '#9b9b9b',
            fontSize: 10,
            marginStart: exchange.direction === 'left' ? 0 : 2,
            marginEnd: exchange.direction === 'right' ? 0 : 2,
            textAlign: exchange.direction === 'right' ? 'left' : 'right',
          }}>
          {exchange.timeStamp}
        </P>
      </View>
    );
  } else {
    return (
      <Row style={{alignItems: 'center'}}>
        <View
          style={{
            marginHorizontal: theme.spacing.p1,
            backgroundColor: '#585858',
            height: 1,
            flexGrow: 1,
          }}></View>
        <DisplayDateTime datetime={moment(timeStamp)} />
        <View
          style={{
            marginHorizontal: theme.spacing.p1,
            backgroundColor: '#585858',
            height: 1,
            flexGrow: 1,
          }}></View>
      </Row>
    );
  }
};

export default ExchangeListItem;
