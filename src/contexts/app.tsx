/* global __DEV__ */

import React, {FC, useEffect, useState} from 'react';
import moment, {Moment} from 'moment';
import Sound from 'react-native-sound';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NotificationProps,
  NotificationTriggerProps,
} from 'components/Notification';
import {ScriptTriggerType, ScriptType} from 'components/utility/Subtitle';

export type TriggerMap = Map<string, TriggerType>;
export type TriggerType = {
  type: 'notification' | 'something';
  time: number;
  attributes: NotificationTriggerProps;
};

export enum TriggerState {
  NOT_TRIGGERED = 1,
  TRIGGERED,
  FINISHED,
}

export type NotificationTriggerType = TriggerType & {
  type: 'notification';
};

export type ApplicationContextTypeDigest = {
  actTriggers: TriggerMap;
  flags: {[index: string]: boolean};
  settings: Map<string, string | number | boolean>;
};
export type ApplicationContextTypeDigested = {
  actTriggers: TriggerMap;
  audio: {
    set: React.Dispatch<React.SetStateAction<undefined | SoundObjetType>>;
    state: undefined | SoundObjetType;
  };
  flags: {[index: string]: boolean};

  startedSession: Moment;
  subtitles: {
    state: string[];
    set: React.Dispatch<React.SetStateAction<string[]>>;
    setAsFinished: React.Dispatch<React.SetStateAction<boolean>>;
  };
  script: {
    state: ScriptType[];
    set: React.Dispatch<React.SetStateAction<ScriptType[]>>;
    setAsFinished: React.Dispatch<React.SetStateAction<boolean>>;
  };
  settings: {
    update: (optionName: string, value: optionValueType) => void;
    state: Map<string, string | number | boolean>;
  };
  notifications: {
    set: React.Dispatch<
      React.SetStateAction<Map<string, NotificationTriggerProps>>
    >;
    state: Map<string, NotificationTriggerProps>;
    add: (attributes: NotificationTriggerProps) => void;
  };
  player?: Sound;
};
export type SoundObjetType = {
  uri: string;
  volume?: number;
  autoplay?: boolean;
  duration?: number;
};

// const appEvents: EventMap = new Map([
//   [
//     'bankCode',
//     {
//       type: 'notification',
//       notification: (
//         <Notification
//           iconName={'message-alert-outline'}
//           delay={0}
//           title={'2033'}
//           body={`Your reset code from Citizen's Bank is 744423`}
//         />
//       ),
//       triggered: TriggerState.NOT_TRIGGERED,
//     },
//   ],
// ]);

export type SelectOptionType = {name: string; value: optionValueType};
type optionType = {
  value: string | number | boolean;
  type: optionValueType;
  options?: Array<SelectOptionType>;
};
export const DEFAULT_SETTINGS_OPTIONS: {
  [index: string]: optionType;
} = {
  VIEW_INTRO: {value: false, type: 'checkbox'},
  LEVEL: {
    value: 0,
    type: 'select',
    options: [
      {name: 'part 1', value: 1},
      {name: 'part 2', value: 2},
    ],
  },
  BGM_VOLUME: {value: 50, type: 'range'},
  SPEECH_VOLUME: {value: 50, type: 'range'},
};

export type optionValueType = string | number | boolean;

export const getSetting = async (
  optionName: string,
  defaultValue: string | number | boolean,
) => {
  const option = await AsyncStorage.getItem(optionName);
  if (option == null) {
    AsyncStorage.setItem(optionName, JSON.stringify(defaultValue));
  }
  return new Promise<Array<string | number | boolean>>((resolve, reject) =>
    resolve([optionName, JSON.parse(option || JSON.stringify(defaultValue))]),
  );
};

function isScript(
  trigger: NotificationTriggerType | TriggerType | ScriptTriggerType,
): trigger is ScriptTriggerType {
  return (trigger as ScriptTriggerType).type == 'script';
}

function isNotification(
  trigger: NotificationTriggerType | TriggerType | ScriptTriggerType,
): trigger is NotificationTriggerType {
  return (trigger as NotificationTriggerType).type == 'notification';
}

//defaults for empty app
export const ApplicationContext =
  React.createContext<ApplicationContextTypeDigested>({});

const ApplicationContextProvider: FC<ApplicationContextTypeDigest> = props => {
  const [soundPlayer, setSoundPlayer] = useState<Sound | undefined>(undefined);
  const [soundObject, setSoundObject] = useState<SoundObjetType | undefined>(
    undefined,
  );

  const [notifications, setNotifications] = React.useState<
    Map<string, NotificationTriggerProps>
  >(new Map());
  const [startOfSession] = useState(moment());
  const [subtitles, setSubtitles] = useState<string[]>([]);
  const [script, setScript] = useState<ScriptType[]>([]);
  const [scriptFinished, setScriptFinished] = useState<boolean>(false);

  const [checkForTriggers, setCheckForTriggers] = useState(0);
  const [triggers, setTriggers] = useState(props.actTriggers);
  const [flags, setFlags] = useState(props.flags);
  const [settings, setSettings] = useState(props.settings);

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

  const addNotification = (attributes: NotificationTriggerProps) => {
    setNotifications(notifications => {
      const newMap = new Map(notifications);
      newMap.set(attributes.key, attributes);
      return newMap;
    });
  };
  const pullTriggers = () => {
    const elapsedSeconds = moment().diff(startOfSession, 'milliseconds');
    Object.keys(flags).forEach(flag => {
      if (!flags[flag]) {
        const trigger = triggers.get(flag);
        if (trigger && trigger.time < elapsedSeconds) {
          if (isNotification(trigger)) {
            addNotification(trigger.attributes);
          }
          setFlags(state => {
            const newState = Object.assign({}, state, {[flag]: true});
            return newState;
          });
        }
      }
    });
  };

  useEffect(() => {
    let interval = setInterval(() => {
      pullTriggers();
      setCheckForTriggers(interval => interval + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [checkForTriggers]);

  useEffect(() => {
    AsyncStorage.setItem('ActOneFlages', JSON.stringify(flags));
  }, [flags]);

  const updateSetting = (optionName: string, value: optionValueType) => {
    AsyncStorage.setItem(optionName, JSON.stringify(value));
    setSettings(settings => {
      const newMap = new Map(settings);
      newMap.set(optionName, value);
      return newMap;
    });
  };

  return (
    <ApplicationContext.Provider
      value={{
        startedSession: startOfSession,
        notifications: {
          state: notifications,
          set: setNotifications,
          add: addNotification,
        },
        audio: {
          set: setSoundObject,
          state: soundObject,
        },
        flags: flags,
        actTriggers: triggers,
        player: soundPlayer,
        script: {
          state: script,
          set: setScript,
          setAsFinished: setScriptFinished,
        },
        subtitles: {
          state: subtitles,
          set: setSubtitles,
          setAsFinished: setScriptFinished,
        },
        settings: {
          update: updateSetting,
          state: settings,
        },
      }}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;
export const ApplicationContextConsumer = ApplicationContext.Consumer;
