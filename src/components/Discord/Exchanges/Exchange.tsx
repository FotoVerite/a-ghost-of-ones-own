import React, {FC, useContext} from 'react';
import {Image, TouchableHighlight, View} from 'react-native';
import {P} from 'components/StyledText';
import {Row} from 'components/Grid';
import theme from 'themes';
import context, {DiscordContext, DiscordExchangeType} from '../context';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Message from './Message';
import DisplayDateTime from './DisplayDateTime';
import moment from 'moment';

const Exchange: FC<{
  exchange: DiscordExchangeType;
  index: number;
  conversationOptions?: {
    multi?: boolean;
  };
}> = ({exchange, index, conversationOptions}) => {
  const {avatar, messages, name, timeStamp} = exchange;
  const context = useContext(DiscordContext);
  const renderBubbles = () => {
    return messages.map((message, index) => {
      return <Message key={index} index={index} message={message} />;
    });
  };
  if (messages[0] !== undefined) {
    return (
      <View
        style={{
          marginBottom: theme.spacing.p1,
          marginStart: 6,
        }}>
        <Row
          style={{
            alignItems: 'flex-start',
            flexShrink: 1,
          }}>
          <TouchableWithoutFeedback
            style={{}}
            onPress={() => context.userInfo.set(name)}>
            <Image
              source={avatar}
              style={{
                width: 30,
                height: 30,
                marginEnd: theme.spacing.p1,
                marginBottom: theme.spacing.p1,
                borderRadius: theme.BorderRadius.normal,
              }}
            />
          </TouchableWithoutFeedback>
          <View style={{flexShrink: 1}}>
            <Row style={{alignItems: 'center'}}>
              <P
                style={{
                  fontSize: 16,
                  color: 'white',
                }}>
                {name}
              </P>
              <P
                style={{
                  color: '#9b9b9b',
                  fontSize: 10,
                  marginStart: theme.spacing.p1,
                }}>
                {exchange.timeStamp}
              </P>
            </Row>
            {renderBubbles()}
          </View>
        </Row>
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

export default Exchange;
