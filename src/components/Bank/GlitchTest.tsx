import React, {FC, useRef, useState} from 'react';

// Library Imports
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import {useForm, Controller} from 'react-hook-form';
import {Dimensions, Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import {Input, Button} from 'react-native-elements';
// Components
import {Bold, ErrorText, NoteText, P} from 'components/StyledText';

import theme from 'themes';
import {Row} from 'components/Grid';
import ResetPressable from './resetPressable';
import {TextInput} from 'react-native-gesture-handler';
import Glitch from 'components/utility/Glitch';
import Reset from './Reset';

type Inputs = {
  answer1: string;
  answer2: string;
};

const LoginContainer = styled(View)`
  width: 700px;
  /* margin-right: auto;
  margin-left: auto; */
  margin-left: 300px;
  background: white;
  border-radius: ${theme.BorderRadius.normal}px;
  padding: ${theme.spacing.p2}px;
  shadow-opacity: 0.75;
  shadow-radius: 25px;
  shadow-color: rgba(209, 209, 209, 0.58);
  shadow-offset: 0px 0px;
`;

const InputContainer = styled(View)``;

const GlitchTest: FC<{
  navigation: any;
  glitch?: boolean;
  style: ViewStyle;
  onLayout: any;
}> = (props, {navigation, glitch}) => {
  const dimensions = Dimensions.get('window');

  const {
    control,
    formState: {errors, isValid},
    handleSubmit,
  } = useForm<Inputs>({
    mode: 'onChange',
  });

  const [loginErrorMessage, setLoginErrorMessage] = useState<boolean | string>(
    false,
  );
  const [serverError, setServerError] = useState(false);

  const answer2Ref = useRef<TextInput>(null);

  const [divHight, setDivHight] = useState(0);

  const onSubmit = () => {
    setLoginErrorMessage(true);
    setServerError(false);
  };
  return (
    <View
      style={[
        {
          height: 500,
          zIndex: 1,
        },
        props.style,
      ]}
      onLayout={event => {
        var {height} = event.nativeEvent.layout;
        setDivHight(height);
        props.onLayout && props.onLayout(event);
      }}>
      <View
        style={{
          marginTop: theme.spacing.p5,
          alignItems: 'center',
        }}></View>

      <LoginContainer
        style={
          props.glitch && {
            borderRightColor: '#e3a2cd5a',
            borderRightWidth: 2,
            borderRadius: 23,
          }
        }>
        <Bold
          style={{
            textAlign: 'center',
            marginBottom: theme.spacing.p2,
            color: theme.colors.brand,
          }}
          size="ml">
          Identity Verification
        </Bold>
        <ErrorText>
          {loginErrorMessage === true
            ? 'Bad Username or Password'
            : loginErrorMessage}
          {serverError && `Server Unreachable`}
        </ErrorText>

        <InputContainer>
          <Bold
            size="m"
            style={{
              marginBottom: theme.spacing.p1,
              marginStart: theme.spacing.p1,
            }}>
            Who was your first Boyfriend/Girlfriend?
          </Bold>

          <Bold
            size="m"
            style={[
              {
                marginBottom: theme.spacing.p1,
                marginStart: theme.spacing.p1,
              },
              props.glitch && styles.glitchText,
            ]}>
            What is your favorite Band.
          </Bold>
        </InputContainer>

        <Button
          title="Answer"
          disabled={!isValid}
          style={{flexGrow: 1, marginTop: 'auto'}}
          onPress={handleSubmit(onSubmit)}></Button>
      </LoginContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  glitchText: {
    textShadowColor: 'blue',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 1,
  },
  textinvalid: {
    borderColor: 'red',
  },
});

export default GlitchTest;
