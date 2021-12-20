import React, {FC, useRef, useState} from 'react';

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
import {numericLiteral} from '@babel/types';

type Inputs = {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
  input5: string;
  input6: string;
};

const LoginContainer = styled(View)`
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  background: white;
  border-radius: ${theme.BorderRadius.normal}px;
  padding: ${theme.spacing.p2}px;
  shadow-opacity: 0.75;
  shadow-radius: 25px;
  shadow-color: rgba(209, 209, 209, 0.58);
  shadow-offset: 0px 0px;
`;

const InputContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  justify-self: flex-start;
  align-content: space-between;
  margin: 0;
  padding: 0;
`;

const Reset: FC = ({}) => {
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

  const password = useRef<typeof Input>(null);

  const [divHight, setDivHight] = useState(0);

  const onSubmit = () => {
    setLoginErrorMessage(true);
    setServerError(false);
  };

  const TokenInput: FC<{name: string}> = ({name}) => {
    return (
      <Controller
        control={control}
        name={name}
        rules={{required: true}}
        defaultValue={''}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            keyboardType={'numeric'}
            autoCompleteType={'none'}
            onBlur={onBlur}
            containerStyle={{
              margin: 0,
              padding: 0,
              width: (dimensions.width * 0.8 - theme.spacing.p5) / 6,
            }}
            maxLength={1}
            inputContainerStyle={{
              borderBottomWidth: 0,
              backgroundColor: theme.colors.lightGray2,
              borderRadius: theme.BorderRadius.small,
              borderColor: 'black',
              width: (dimensions.width * 0.8 - (theme.spacing.p5 + 36)) / 6,
            }}
            textAlign={'center'}
            blurOnSubmit={false}
            returnKeyType="next"
            onChangeText={onChange}
            value={value}
            onSubmitEditing={() => {}}
          />
        )}
      />
    );
  };

  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
        flexGrow: 1,
        backgroundColor: 'gray',
      }}
      keyboardShouldPersistTaps="handled">
      <View
        style={{
          flexGrow: 1,
          marginTop: (dimensions.height - divHight) / 4,
        }}
        onLayout={event => {
          var {height} = event.nativeEvent.layout;
          setDivHight(height);
        }}>
        <View
          style={{
            marginTop: theme.spacing.p5,
            alignItems: 'center',
          }}></View>

        <LoginContainer>
          <Bold
            style={{
              textAlign: 'center',
              marginBottom: theme.spacing.p2,
              color: theme.colors.brand,
            }}
            size="ml">
            Reset your password.
          </Bold>
          <ErrorText>
            {loginErrorMessage === true
              ? 'Bad Username or Password'
              : loginErrorMessage}
            {serverError && `Server Unreachable`}
          </ErrorText>

          <InputContainer>
            <TokenInput name={'input1'} />
            <TokenInput name={'input2'} />
            <TokenInput name={'input3'} />
            <TokenInput name={'input4'} />
            <TokenInput name={'input5'} />
            <TokenInput name={'input6'} />
          </InputContainer>
          <Row>
            <NoteText size={'s'} style={{marginBottom: theme.spacing.p2}}>
              Enter Two Factor Authentication{' '}
            </NoteText>
          </Row>

          <Button
            title="Reset Password"
            disabled={!isValid}
            style={{flexGrow: 1, marginTop: 'auto'}}
            onPress={handleSubmit(onSubmit)}></Button>
        </LoginContainer>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Reset;
