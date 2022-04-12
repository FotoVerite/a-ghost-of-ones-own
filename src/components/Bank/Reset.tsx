import React, {
  FC,
  MutableRefObject,
  Ref,
  RefObject,
  useRef,
  useState,
} from 'react';

// Library Imports
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components/native';
import {useForm, Controller} from 'react-hook-form';
import {Dimensions, Pressable, TextInput, View} from 'react-native';
import {Input, Button} from 'react-native-elements';
// Components
import {Bold, ErrorText, NoteText} from 'components/StyledText';

import theme from 'themes';
import {Row} from 'components/Grid';

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

const TokenInput: FC<{
  refs: any;
  name: 'input1' | 'input2' | 'input3' | 'input4' | 'input5' | 'input6';
  index: number;
  control: any;
}> = ({name, index, refs, control}) => {
  const dimensions = Dimensions.get('window');
  return (
    <Controller
      control={control}
      name={name}
      rules={{required: true}}
      render={({field: {onChange, onBlur, value}}) => (
        <Input
          defaultValue={''}
          ref={refs[index - 1]}
          keyboardType={'numeric'}
          autoCompleteType={'none'}
          onSubmitEditing={() => {
            if (index !== 6) refs[index].current!.focus();
          }}
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
          value={value}
          onChangeText={value => {
            onChange(value);
            if (index !== 6) refs[index].current!.focus();
          }}
        />
      )}
    />
  );
};

const Reset: FC<{navigation: any}> = ({navigation}) => {
  const dimensions = Dimensions.get('window');

  const {
    control,
    getValues,
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

  const ref1 = useRef<TextInput>(null);
  const ref2 = useRef<TextInput>(null);
  const ref3 = useRef<TextInput>(null);
  const ref4 = useRef<TextInput>(null);
  const ref5 = useRef<TextInput>(null);
  const ref6 = useRef<TextInput>(null);
  const refs = [ref1, ref2, ref3, ref4, ref5, ref6];

  const onSubmit = (data: Inputs) => {
    let string = '';
    for (const [key, value] of Object.entries(data)) {
      string += value;
    }
    if (string === '744423') {
      setLoginErrorMessage(false);
      navigation.navigate('Questions');
    } else {
      setLoginErrorMessage(true);
    }
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
            Reset your password.
          </Bold>
          <ErrorText>
            {loginErrorMessage === true
              ? 'Validation Code does not match.'
              : loginErrorMessage}
            {serverError && `Server Unreachable`}
          </ErrorText>

          <InputContainer>
            <TokenInput
              name={'input1'}
              index={1}
              control={control}
              refs={refs}
            />
            <TokenInput
              name={'input2'}
              index={2}
              control={control}
              refs={refs}
            />
            <TokenInput
              name={'input3'}
              index={3}
              control={control}
              refs={refs}
            />
            <TokenInput
              name={'input4'}
              index={4}
              control={control}
              refs={refs}
            />
            <TokenInput
              name={'input5'}
              index={5}
              control={control}
              refs={refs}
            />
            <TokenInput
              name={'input6'}
              index={6}
              control={control}
              refs={refs}
            />
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
