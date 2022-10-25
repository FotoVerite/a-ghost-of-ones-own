import {MessagesType} from 'components/Discord/context';
import React, {FC, ReactNode} from 'react';
import {ImageURISource} from 'react-native';

import {SharedValue, useSharedValue} from 'react-native-reanimated';
import UserData, {UserDataType} from './avatars';
import MessagesData from './messages';

export type GrindrContextTypeDigest = {
  children: ReactNode;
};

export type GrindrExchangeType = {
  direction: 'left' | 'right';
  timeStamp: string;
  messages: MessagesType[];
};
export type GrindrConversationType = {
  name: string;
  avatar: ImageURISource;
  exchanges: GrindrExchangeType[];
};

export type GrindrContextTypeDigested = {
  sharedValues: {
    showInfo: SharedValue<number>;
    showHeader: SharedValue<number>;
  };
  Users: UserDataType[];
  Messages: GrindrConversationType[];
};
//defaults for empty app
export const GrindrContext = React.createContext<GrindrContextTypeDigested>({});

const GrindrContextProvider: FC<GrindrContextTypeDigest> = props => {
  const [photoState, setPhotoState] = React.useState<number>(0);
  const showInfo = useSharedValue(0);
  const showHeader = useSharedValue(0);

  return (
    <GrindrContext.Provider
      value={{
        sharedValues: {
          showInfo: showInfo,
          showHeader: showHeader,
        },
        Users: UserData,
        Messages: MessagesData,
      }}>
      {props.children}
    </GrindrContext.Provider>
  );
};

export default GrindrContextProvider;
export const GrindrContextConsumer = GrindrContext.Consumer;
