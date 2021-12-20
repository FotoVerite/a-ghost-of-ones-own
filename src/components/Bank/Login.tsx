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

type Inputs = {
  username: string;
  password: string;
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

const Login: FC<{navigation: any}> = ({navigation}) => {
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
            Welcome Back
          </Bold>
          <ErrorText>
            {loginErrorMessage === true
              ? 'Bad Username or Password'
              : loginErrorMessage}
            {serverError && `Server Unreachable`}
          </ErrorText>

          <InputContainer>
            <Controller
              control={control}
              name="username"
              rules={{required: true}}
              defaultValue={''}
              render={({field: {onChange, onBlur, value}}) => (
                <Input
                  autoCompleteType={'none'}
                  onBlur={onBlur}
                  errorMessage={errors.username && 'Username is required.'}
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
                  placeholder="Enter your username"
                  onSubmitEditing={() => {
                    password.current?.focus();
                  }}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{required: true}}
              defaultValue=""
              render={({field: {onChange, onBlur}}) => (
                <Input
                  ref={password}
                  autoCapitalize="none"
                  onBlur={onBlur}
                  errorMessage={errors.password && 'Password is required.'}
                  onChangeText={value => onChange(value)}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    backgroundColor: theme.colors.lightGray2,
                    borderRadius: theme.BorderRadius.small,
                    paddingHorizontal: theme.spacing.p2,
                  }}
                  leftIcon={{
                    type: 'feather',
                    name: 'lock',
                    color: theme.colors.brand,
                  }}
                  leftIconContainerStyle={{marginEnd: theme.spacing.p2}}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                  containerStyle={{marginBottom: theme.spacing.p2}}
                />
              )}
            />
          </InputContainer>
          <Row>
            <NoteText
              size={'s'}
              style={{color: 'red', marginBottom: theme.spacing.p2}}>
              Forget your password?{' '}
            </NoteText>
            <ResetPressable navigation={navigation} />
          </Row>

          <Button
            title="Sign In"
            disabled={!isValid}
            style={{flexGrow: 1, marginTop: 'auto'}}
            onPress={handleSubmit(onSubmit)}></Button>
        </LoginContainer>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;
