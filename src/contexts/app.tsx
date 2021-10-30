/* global __DEV__ */

import React, {FC, useEffect} from 'react';
import moment, {Moment} from 'moment';
import {Dimensions} from 'react-native';

export type ApplicationContextTypeDigest = {};
export type ApplicationContextTypeDigested = {
  startedSession: Moment;
  notification: {
    set: React.Dispatch<React.SetStateAction<undefined | Element>>;
    state: undefined | Element;
  };
};
//defaults for empty app
export const ApplicationContext =
  React.createContext<ApplicationContextTypeDigested>({});

const ApplicationContextProvider: FC<ApplicationContextTypeDigest> = props => {
  const [notification, setNotification] = React.useState<Element>();

  return (
    <ApplicationContext.Provider
      value={{
        startedSession: moment(),
        notification: {
          state: notification,
          set: setNotification,
        },
      }}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
export const ApplicationContextConsumer = ApplicationContext.Consumer;
