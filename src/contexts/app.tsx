/* global __DEV__ */

import React, {FC, useEffect, useState} from 'react';
import moment, {Moment} from 'moment';
import {Dimensions} from 'react-native';
import Sound from 'react-native-sound';
import {P} from 'components/StyledText';

export type ApplicationContextTypeDigest = {};
export type ApplicationContextTypeDigested = {
  audio: {
    set: React.Dispatch<React.SetStateAction<undefined | SoundObjetType>>;
    state: undefined | SoundObjetType;
  };
  startedSession: Moment;
  notification: {
    set: React.Dispatch<React.SetStateAction<undefined | Element>>;
    state: undefined | Element;
  };
};
export type SoundObjetType = {
  uri: string;
  volume?: number;
};
//defaults for empty app
export const ApplicationContext =
  React.createContext<ApplicationContextTypeDigested>({});

const ApplicationContextProvider: FC<ApplicationContextTypeDigest> = props => {
  const [soundPlayer, setSoundPlayer] = useState<Sound | undefined>(undefined);
  const [soundObject, setSoundObject] = useState<SoundObjetType | undefined>(
    undefined,
  );

  const [notification, setNotification] = React.useState<Element>();

  useEffect(() => {
    Sound.setCategory('Playback');

    return () => {
      if (soundPlayer != null) {
        soundPlayer.stop();
        soundPlayer.release();
      }
    };
  }, []);

  useEffect(() => {
    if (soundObject != null) {
      soundPlayer?.play(success => {
        if (success) {
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  }, [soundPlayer]);

  useEffect(() => {
    if (soundObject == null) {
      soundPlayer?.stop();
      soundPlayer?.release();
      return;
    }

    const whoosh = new Sound(soundObject.uri, error => {
      if (error) {
        return;
      }

      setSoundPlayer(whoosh);
      // Play the sound with an onEnd callback
    });
  }, [soundObject]);

  return (
    <ApplicationContext.Provider
      value={{
        startedSession: moment(),
        notification: {
          state: notification,
          set: setNotification,
        },
        audio: {
          set: setSoundObject,
          state: soundObject,
        },
      }}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
export const ApplicationContextConsumer = ApplicationContext.Consumer;
