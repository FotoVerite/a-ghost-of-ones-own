import React, {FC, useContext} from 'react';

import {P} from 'components/StyledText';

import RoundPressable from 'components/common/RoundPressable';
import {View} from 'react-native';
import {LockScreenContext} from '../context/LockScreenContext';
import {ApplicationContext} from 'contexts/app';

type Props = {
  dialNumber: string;
  abcText?: string;
};

const KeypadButton: FC<Props> = ({abcText, dialNumber}) => {
  const context = useContext(LockScreenContext);
  const appContext = useContext(ApplicationContext);
  return (
    <RoundPressable
      unpressedColor={'#61616179'}
      pressedColor={'#c1c1c1cf'}
      onPressIn={() => {
        if (appContext.script.state.length === 0) {
          context.code.set(n => n.concat(dialNumber));
        }
      }}
      onPressOut={() => {
        setTimeout(() => {}, 100);
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

export default KeypadButton;
