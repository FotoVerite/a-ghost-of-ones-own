import React, {FC, useContext, useRef, useState} from 'react';

// Library Imports
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import {useForm, Controller} from 'react-hook-form';
import {Dimensions, Pressable, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
// Components
import {Bold, ErrorText, NoteText} from 'components/StyledText';

import theme from 'themes';
import {Row} from 'components/Grid';
import {ApplicationContext, TriggerState} from 'contexts/app';
import {NavigationProp} from '@react-navigation/core';

const ResetPressable: FC<{navigation: any}> = ({navigation}) => {
  const context = useContext(ApplicationContext);
  const [color, setColor] = useState('red');

  return (
    <Pressable
      onTouchStart={() => setColor('pink')}
      onTouchEnd={() => {
        context.events.set('bankCode', TriggerState.TRIGGERED);
        navigation.navigate('Bank', {screen: 'Reset'});
      }}>
      <NoteText
        size={'s'}
        style={{
          color: color,
          marginBottom: theme.spacing.p2,
          textDecorationLine: 'underline',
        }}>
        Reset
      </NoteText>
    </Pressable>
  );
};

export default ResetPressable;
