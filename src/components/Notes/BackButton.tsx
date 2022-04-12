import React, {FC, useContext, useEffect} from 'react';
import {NativeEventSubscription, BackHandler} from 'react-native';
import {NoteContext} from './context/NoteContext';

const BackButton: FC = () => {
  const context = useContext(NoteContext);

  const {folder, noteState, note} = context;
  useEffect(() => {
    let unsubscribe: NativeEventSubscription;
    if (noteState.state > 0) {
      unsubscribe = BackHandler.addEventListener('hardwareBackPress', () => {
        noteState.set(s => (s -= 1));
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
  }, [noteState.state]);
  return <></>;
};

export default BackButton;
