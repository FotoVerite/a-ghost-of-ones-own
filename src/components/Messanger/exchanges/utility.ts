import {Moment} from 'moment';
import {ExchangeType, MessagesType} from '../context/MessengerContext';

export const makeExchangeFunction = (
  name: string,
  avatar: any,
  color: string[],
) => {
  return (messages: MessagesType[], timeStamp?: Moment): ExchangeType => {
    return {
      color: color,
      messages: messages,
      name: name,
      avatar: avatar,
      timeStamp: timeStamp,
    };
  };
};

export const makeTextOnlyExchangeFunction = (
  name: string,
  avatar: any,
  color: string[],
  timeStamp?: Moment,
) => {
  return (
    messages: string[],
    timeStamp?: Moment,
    options?: any,
  ): ExchangeType => {
    const messageArray = messages.map(m => {
      return {type: 'text' as 'text', content: m, options: options};
    });
    return {
      color: color,
      messages: messageArray,
      name: name,
      avatar: avatar,
      timeStamp: timeStamp,
    };
  };
};

export const SelfTextOnlyExchangeFunction = (timeStamp?: Moment) => {
  return (
    messages: string[],
    timeStamp?: Moment,
    options?: any,
  ): ExchangeType => {
    const messageArray = messages.map(m => {
      return {type: 'text' as 'text', content: m, options: options};
    });
    return {
      messages: messageArray,
      timeStamp: timeStamp,
    };
  };
};
