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
import ResetPressable from './resetPressable';
import {TextInput} from 'react-native-gesture-handler';

type Inputs = {
  answer1: string;
  answer2: string;
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

const InputContainer = styled(View)``;

const Questions: FC<{navigation: any}> = ({navigation}) => {
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
            <Controller
              control={control}
              name="answer1"
              rules={{required: true}}
              defaultValue={''}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  autoCompleteType={'none'}
                  onBlur={onBlur}
                  errorMessage={errors.answer1 && 'Answer is required.'}
                  inputContainerStyle={{
                    marginTop: theme.spacing.p1,
                    borderBottomWidth: 0,
                    backgroundColor: theme.colors.lightGray2,
                    borderRadius: theme.BorderRadius.small,
                    paddingHorizontal: theme.spacing.p2,
                  }}
                  leftIconContainerStyle={{marginEnd: theme.spacing.p2}}
                  leftIcon={{
                    type: 'feather',
                    name: 'user',
                    color: theme.colors.brand,
                  }}
                  blurOnSubmit={false}
                  returnKeyType="next"
                  onChangeText={onChange}
                  value={value}
                  placeholder="Can't forget your history"
                  onSubmitEditing={() => {
                    answer2Ref.current?.focus();
                  }}
                />
              )}
            />
            <Bold
              size="m"
              style={{
                marginBottom: theme.spacing.p1,
                marginStart: theme.spacing.p1,
              }}>
              What is your favorite Band.
            </Bold>
            <Controller
              control={control}
              name="answer2"
              rules={{required: true}}
              defaultValue=""
              render={({field: {onChange, onBlur}}) => (
                <Input
                  ref={answer2Ref}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  errorMessage={errors.answer2 && 'Answer is required.'}
                  onChangeText={value => onChange(value)}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    backgroundColor: theme.colors.lightGray2,
                    borderRadius: theme.BorderRadius.small,
                    paddingHorizontal: theme.spacing.p2,
                  }}
                  leftIcon={{
                    type: 'feather',
                    name: 'music',
                    color: theme.colors.brand,
                  }}
                  leftIconContainerStyle={{marginEnd: theme.spacing.p2}}
                  placeholder="It's not Fleetwood"
                  secureTextEntry={true}
                  containerStyle={{marginBottom: theme.spacing.p2}}
                  autoCompleteType={undefined}
                />
              )}
            />
          </InputContainer>

          <Button
            title="Answer"
            disabled={!isValid}
            style={{flexGrow: 1, marginTop: 'auto'}}
            onPress={handleSubmit(onSubmit)}></Button>
        </LoginContainer>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Questions;
