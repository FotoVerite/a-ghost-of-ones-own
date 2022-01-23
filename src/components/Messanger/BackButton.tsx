import React, {FC, useContext, useEffect} from 'react';
import {NativeEventSubscription, BackHandler} from 'react-native';
import {MessengerContext} from './context/MessengerContext';

const BackButton: FC = () => {
  const context = useContext(MessengerContext);

  const {messengerState} = context;

  useEffect(() => {
    let unsubscribe: NativeEventSubscription;
    if (messengerState.state != 0) {
      unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => {
        messengerState.set(v => v - 1);
        return true;
      });
    }
    //NB: It might make sense to seperate this logic once estimate is complete.
    //NB I don't love any of the complexity
    return () => {
      if (unsubscribe != null) {
        unsubscribe.remove();
      }
    };
  }, [messengerState.state]);
  return <></>;
};

export default BackButton;
