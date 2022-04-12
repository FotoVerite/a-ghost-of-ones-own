import React, {FC, useContext} from 'react';

import {P} from 'components/StyledText';

import {ApplicationContext} from 'contexts/app';
import RoundPressable from 'components/common/RoundPressable';
import {View} from 'react-native';

type Props = {
  setNumber: any;
  dialNumber: string;
  abcText?: string;
  soundFile: string;
};

const DialButton: FC<Props> = ({abcText, dialNumber, soundFile, setNumber}) => {
  const context = useContext(ApplicationContext);
  return (
    <RoundPressable
      onPressIn={() => {
        context.audio.set({uri: soundFile, volume: 20, autoplay: true});
        setNumber((n: string) => n + dialNumber);
      }}
      onPressOut={() => {
        setTimeout(() => {
          context.audio.set(undefined);
        }, 100);
      }}
      size={75}>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <P
          style={{
            color: 'white',
            fontSize: 37,
            fontWeight: 'bold',
          }}>
          {dialNumber}
        </P>
        {abcText && <P style={{color: '#d4d0d0', marginTop: -6}}>{abcText}</P>}
      </View>
    </RoundPressable>
  );
};

export default DialButton;
