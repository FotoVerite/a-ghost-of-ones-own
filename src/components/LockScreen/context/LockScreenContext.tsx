import {CommonActions, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Obvious from 'assets/scripts/LockScreen/Obvious';
import OpenLockScreen from 'assets/scripts/LockScreen/OpenLockScreen';
import SNN from 'assets/scripts/LockScreen/SSN';
import WrongSSN from 'assets/scripts/LockScreen/WrongSSN';
import {screenParams} from 'components/Navigation/screens';
import {ApplicationContext} from 'contexts/app';
import {duration} from 'moment';
import React, {FC, ReactNode, useContext, useEffect, useState} from 'react';
import {AsyncStorage} from 'react-native';

import {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {runOnJS} from 'react-native-reanimated/src/reanimated2/core';

export type LockScreenContextTypeDigest = {};

export type LockScreenContextTypeDigested = {
  sharedValues: {
    showInfo: SharedValue<number>;
    shake: SharedValue<number>;
    unlock: SharedValue<number>;
  };
  code: {
    set: React.Dispatch<React.SetStateAction<string[]>>;
    state: string[];
  };
  tries: {
    set: React.Dispatch<React.SetStateAction<number>>;
    state: number;
  };
};
//defaults for empty app
export const LockScreenContext =
  React.createContext<LockScreenContextTypeDigested>({});

const LockScreenContextProvider: FC<LockScreenContextTypeDigest> = props => {
  const appContext = useContext(ApplicationContext);
  const navigation = useNavigation<StackNavigationProp<screenParams>>();

  const codeAnswer = '111111';
  const showInfo = useSharedValue(0);
  const shake = useSharedValue(0);
  const unlock = useSharedValue(0);

  const [code, setCode] = useState(new Array<string>());
  const [tries, setTries] = useState(0);

  const goToDesktop = () => {
    let resetAction = CommonActions.reset({
      index: 0,
      routes: [{name: 'Desktop'}],
    });
    navigation.dispatch(resetAction);
  };

  useEffect(() => {
    appContext.script.set(OpenLockScreen);
  }, []);

  useEffect(() => {
    if (tries == 2) {
      appContext.script.set(SNN);
    }
  }, [tries]);

  useEffect(() => {
    if (code.length === 6)
      if (code.join('') === codeAnswer) {
        appContext.settings.update('VIEW_INTRO', false);
        unlock.value = withTiming(1, {duration: 1000}, () =>
          runOnJS(goToDesktop)(),
        );
      } else if (tries > 2 && code.join('') === '232323') {
        appContext.script.set(Obvious);
      } else if (tries > 2 && code.join('') !== '232323') {
        appContext.script.set(WrongSSN);
      } else {
        shake.value = withTiming(1, {duration: 350}, () => {
          shake.value = withTiming(0, {duration: 250}, () => {
            runOnJS(setCode)(new Array<string>());
            runOnJS(setTries)(tries + 1);
          });
        });
      }
  }, [code]);

  return (
    <LockScreenContext.Provider
      value={{
        sharedValues: {
          showInfo: showInfo,
          shake: shake,
          unlock: unlock,
        },
        code: {state: code, set: setCode},
        tries: {state: tries, set: setTries},
      }}>
      {props.children}
    </LockScreenContext.Provider>
  );
};

export default LockScreenContextProvider;
export const LockScreenContextConsumer = LockScreenContext.Consumer;
