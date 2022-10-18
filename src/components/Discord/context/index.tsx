/* global __DEV__ */

import {FolderProps} from 'components/Notes/context/NoteContext';
import {Moment} from 'moment';
import React, {FC, ReactNode, useEffect, useState} from 'react';
import {Image, ImageURISource} from 'react-native';
import {IconType} from 'react-native-elements/dist/icons/Icon';

import {
  runOnJS,
  SharedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {execuSpeak} from '../DMs/execuSpeak';
import {haloNailsDms} from '../DMs/halonailsDm';
import {legomysoul} from '../DMs/legomysoul';

import {zola} from '../DMs/zola';

import {haloNails} from '../Servers/HaloNails';
import {highCastle} from '../Servers/HighCastle';

export type MessagesType = {
  type: 'text' | 'image';
  content: string | Image;
  options?: any;
};

export type DiscordConversationType = {
  name: string;
  avatar: ImageURISource;
  exchanges: DiscordExchangeType[];
};

export type DiscordExchangeType = {
  avatar: ImageURISource;
  name: string;
  timeStamp: string;
  messages: MessagesType[];
};

export type DiscordContextDigest = {
  children: ReactNode;
};

export type DiscordServerType = {
  avatar: ImageURISource;
  name: string;
  groups: DiscordGroup[];
};

export type DiscordGroup = {
  name: string;
  rooms: DiscordRoom[];
};

export type DiscordRoom = {
  name: string;
  messages: MessagesType[];
};

export type DiscordContextDigested = {
  userInfo: {
    set: React.Dispatch<React.SetStateAction<string | undefined>>;
    state: string | undefined;
  };
  DMs: Array<DiscordConversationType>;
  dmsSelected: {
    set: React.Dispatch<React.SetStateAction<boolean>>;
    state: boolean;
  };
  sharedValues: {
    messageSelected: SharedValue<number>;
    dmsSelected: SharedValue<number>;
  };
  conversations: Array<DiscordConversationType>;
  conversation: {
    set: React.Dispatch<
      React.SetStateAction<DiscordConversationType | undefined>
    >;
    state: DiscordConversationType | undefined;
  };
  message: {
    set: React.Dispatch<React.SetStateAction<MessagesType | undefined>>;
    state: MessagesType | undefined;
  };
  servers: DiscordServerType[];
  server: {
    set: React.Dispatch<React.SetStateAction<DiscordServerType | undefined>>;
    state: DiscordServerType | undefined;
  };
  messengerState: {
    set: React.Dispatch<React.SetStateAction<number>>;
    state: number;
  };
  viewableConversations: {
    set: React.Dispatch<React.SetStateAction<DiscordConversationType[]>>;
    state: DiscordConversationType[];
  };
};
//defaults for empty app
export const DiscordContext = React.createContext<DiscordContextDigested>();

const DMs = [haloNailsDms, legomysoul, execuSpeak];
const Servers = [highCastle, haloNails, highCastle, highCastle];

const DiscordContextProvider: FC<DiscordContextDigest> = props => {
  const conversations:
    | DiscordConversationType[]
    | (() => DiscordConversationType[]) = DMs;

  const [conversation, setConversation] =
    React.useState<DiscordConversationType>(haloNailsDms);
  const [message, setMessage] = React.useState<MessagesType>();

  const [server, setServer] = React.useState<any>(undefined);
  const [userInfo, setUserInfo] = React.useState<string | undefined>(undefined);

  const [viewableConversations, setViewableConversations] =
    React.useState<DiscordConversationType[]>(conversations);

  const [messengerState, setMessengerState] = useState(0);

  const messageSelected = useSharedValue(0);
  const dms = useSharedValue(1);
  const [dmsSelected, setDmsSelected] = useState(true);

  useEffect(() => {
    if (messengerState === 0) {
      messageSelected.value = withTiming(messengerState, {}, isFinished => {
        if (isFinished) runOnJS(setConversation)(conversation);
      });
    } else if (messengerState === 1) {
      messageSelected.value = withTiming(messengerState, {}, isFinished => {
        if (isFinished) runOnJS(setMessage)(undefined);
      });
    } else {
      messageSelected.value = withTiming(messengerState);
    }
  }, [messengerState]);

  useEffect(() => {
    dms.value = withTiming(dmsSelected ? 1 : 0);
  }, [dmsSelected]);

  return (
    <DiscordContext.Provider
      value={{
        messengerState: {
          state: messengerState,
          set: setMessengerState,
        },
        sharedValues: {
          messageSelected: messageSelected,
          dmsSelected: dms,
        },
        dmsSelected: {
          set: setDmsSelected,
          state: dmsSelected,
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
        servers: Servers,
        server: {
          set: setServer,
          state: server,
        },
        viewableConversations: {
          set: setViewableConversations,
          state: viewableConversations,
        },
        DMs: DMs,
        userInfo: {
          state: userInfo,
          set: setUserInfo,
        },
      }}>
      {props.children}
    </DiscordContext.Provider>
  );
};

export default DiscordContextProvider;
export const NoteContextConsumer = DiscordContext.Consumer;
