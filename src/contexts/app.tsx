/* global __DEV__ */

import React, {FC, useEffect, useState} from 'react';
import moment, {Moment} from 'moment';
import Sound from 'react-native-sound';
import Notification from 'components/Notification';

export enum TriggerState {
  NOT_TRIGGERED = 1,
  TRIGGERED,
  FINISHED,
}

export type EventType = {
  type: 'notification' | 'other';
  notification: Element;
  triggered: TriggerState;
};

export type EventHash = {[index: string]: EventType};
export type EventMap = Map<string, EventType>;

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
  events: {
    state: EventMap;
    set: (name: string, state: TriggerState) => void;
  };
  player?: Sound;
};
export type SoundObjetType = {
  uri: string;
  volume?: number;
  autoplay?: boolean;
  duration?: number;
};

const appEvents: EventMap = new Map([
  [
    'bankCode',
    {
      type: 'notification',
      notification: (
        <Notification
          iconName={'message-alert-outline'}
          delay={0}
          title={'2033'}
          body={`Your reset code from Citizen's Bank is 744423`}
        />
      ),
      triggered: TriggerState.NOT_TRIGGERED,
    },
  ],
]);

//defaults for empty app
export const ApplicationContext =
  React.createContext<ApplicationContextTypeDigested>({});

const ApplicationContextProvider: FC<ApplicationContextTypeDigest> = props => {
  const [soundPlayer, setSoundPlayer] = useState<Sound | undefined>(undefined);
  const [soundObject, setSoundObject] = useState<SoundObjetType | undefined>(
    undefined,
  );

  const [notification, setNotification] = React.useState<Element>();
  const [events, setEvents] = React.useState<EventMap>(appEvents);

  const setEventTo = (name: string, state: TriggerState) => {
    setEvents(events => {
      const newState = new Map(events);
      const eventState = newState.get(name);
      const newEventState = Object.assign({}, eventState, {triggered: state});
      newState.set(name, newEventState);
      return newState;
    });
  };

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
    events.forEach((value, key) => {
      if (value.triggered === TriggerState.TRIGGERED) {
        setNotification(value.notification);
        setEventTo(key, TriggerState.FINISHED);
      }
    });
  }, [events]);

  useEffect(() => {
    if (soundObject != null && soundObject.autoplay) {
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
      setSoundObject(obj =>
        Object.assign({}, obj, {duration: whoosh.getDuration()}),
      );
      setSoundPlayer(whoosh);
      // Play the sound with an onEnd callback
    });
  }, [soundObject?.uri]);

  return (
    <ApplicationContext.Provider
      value={{
        events: {
          state: events,
          set: setEventTo,
        },
        startedSession: moment(),
        notification: {
          state: notification,
          set: setNotification,
        },
        audio: {
          set: setSoundObject,
          state: soundObject,
        },
        player: soundPlayer,
      }}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
export const ApplicationContextConsumer = ApplicationContext.Consumer;
