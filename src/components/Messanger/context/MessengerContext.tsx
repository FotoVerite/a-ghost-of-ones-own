/* global __DEV__ */

import {FolderProps} from 'components/Notes/context/NoteContext';
import {Moment} from 'moment';
import React, {FC, useEffect, useState} from 'react';
import {Image, ImageURISource} from 'react-native';

import {
  runOnJS,
  SharedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {alice} from '../exchanges/alice';
import {chineseSpam} from '../exchanges/chineseSpam';
import {chris} from '../exchanges/chris';
import {dennis} from '../exchanges/dennis';
import {fedex} from '../exchanges/fedex';
import {grindrReset} from '../exchanges/grindrReset';
import {matthew} from '../exchanges/matthew';
import {movieNight} from '../exchanges/moveNight';
import seemlessOrders from '../exchanges/seemless';
import {zola} from '../exchanges/zola';

export type MessagesType = {
  type: 'text' | 'image';
  content: string | Image;
  options?: any;
};

export type ExchangeType = {
  avatar?: ImageURISource;
  color?: string | string[];
  messages: MessagesType[];
  name?: string;
  timeStamp?: Moment;
};

export type ConversationType = {
  name: string;
  avatar: ImageURISource;
  listDisplayText?: string;
  exchanges: ExchangeType[];
  options?: {
    multi?: boolean;
  };
};

export type MessengerContextDigest = {};

export type MessengerContextDigested = {
  sharedValues: {
    messageSelected: SharedValue<number>;
  };
  conversations: Array<ConversationType>;
  conversation: {
    set: React.Dispatch<React.SetStateAction<ConversationType | undefined>>;
    state: ConversationType | undefined;
  };
  message: {
    set: React.Dispatch<React.SetStateAction<MessagesType | undefined>>;
    state: MessagesType | undefined;
  };
  messengerState: {
    set: React.Dispatch<React.SetStateAction<number>>;
    state: number;
  };
  viewableConversations: {
    set: React.Dispatch<React.SetStateAction<ConversationType[]>>;
    state: ConversationType[];
  };
};
//defaults for empty app
export const MessengerContext = React.createContext<MessengerContextDigested>(
  {},
);

const MessengerContextProvider: FC<MessengerContextDigest> = props => {
  const conversations = [
    zola,
    grindrReset,
    // seemlessOrders,
    //fedex,
    movieNight,
    chris,
    dennis,
    chineseSpam,
    alice,
    matthew,
  ];

  const [conversation, setConversation] = React.useState<ConversationType>();
  const [message, setMessage] = React.useState<MessagesType>();

  const [viewableConversations, setViewableConversations] =
    React.useState<ConversationType[]>(conversations);

  const [messengerState, setMessengerState] = useState(0);

  const messageSelected = useSharedValue(0);

  useEffect(() => {
    if (conversation) {
      setMessengerState(1);
    }
  }, [conversation]);

  useEffect(() => {
    if (message) {
      setMessengerState(2);
    }
  }, [message]);

  useEffect(() => {
    if (messengerState === 0) {
      messageSelected.value = withTiming(messengerState, {}, isFinished => {
        if (isFinished) runOnJS(setConversation)(undefined);
      });
    } else if (messengerState === 1) {
      messageSelected.value = withTiming(messengerState, {}, isFinished => {
        if (isFinished) runOnJS(setMessage)(undefined);
      });
    } else {
      messageSelected.value = withTiming(messengerState);
    }
  }, [messengerState]);

  return (
    <MessengerContext.Provider
      value={{
        messengerState: {
          state: messengerState,
          set: setMessengerState,
        },
        sharedValues: {
          messageSelected: messageSelected,
        },
        conversation: {
          set: setConversation,
          state: conversation,
        },
        conversations: conversations,
        message: {
          set: setMessage,
          state: message,
        },
        viewableConversations: {
          set: setViewableConversations,
          state: viewableConversations,
        },
      }}>
      {props.children}
    </MessengerContext.Provider>
  );
};

export default MessengerContextProvider;
export const NoteContextConsumer = MessengerContext.Consumer;
