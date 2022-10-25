import {GrindrExchangeType} from 'components/Grindr/context';
import {time} from 'faker';
import {DiscordExchangeType, MessagesType} from '../context/';

export const makeExchangeFunction = (
  name: string,
  avatar: any,
  stableTime: string,
) => {
  return (
    messages: MessagesType[],
    timeStamp?: string,
  ): DiscordExchangeType => {
    return {
      messages: messages,
      name: name,
      avatar: avatar,
      timeStamp: timeStamp || stableTime,
    };
  };
};

export const makeTextOnlyExchangeFunction = (
  name: string,
  avatar: any,
  stableTime: string,
) => {
  return (
    messages: string[],
    timeStamp?: string,
    options?: any,
  ): DiscordExchangeType => {
    const messageArray = messages.map(m => {
      return {type: 'text' as 'text', content: m, options: options};
    });
    return {
      messages: messageArray,
      name: name,
      avatar: avatar,
      timeStamp: timeStamp || stableTime,
    };
  };
};

export const grinderExchangeTextOnly = (
  direction: 'left' | 'right',
  stableTime: string,
) => {
  return (
    messages: string[],
    timeStamp?: string,
    options?: any,
  ): GrindrExchangeType => {
    const messageArray = messages.map(m => {
      return {type: 'text' as 'text', content: m, options: options};
    });
    return {
      messages: messageArray,
      direction: direction,
      timeStamp: timeStamp || stableTime,
    };
  };
};
