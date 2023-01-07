import React, {FC} from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {Layout, Row} from 'components/Grid';
import CodeDisplay from './CodeDisplay';
import CodeContainer from './CodeContainer';
import LockScreenContextProvider from './context/LockScreenContext';
import {P} from 'components/StyledText';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'themes';
import bg from 'assets/images/backgrounds/butterflyBackground.png';
import {BlurView} from 'rn-id-blurview';
import Keypad from './Keypad/Index';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LockScreen: FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground source={bg} resizeMode="cover" style={{flex: 1}}>
      <BlurView
        style={{
          zIndex: 2,
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
        }}
        blurType="dark"
        blurAmount={5}
        reducedTransparencyFallbackColor="white"
        blurRadius={0}
      />
      <Layout style={{flex: 1, position: 'absolute', zIndex: 5}}>
        <StatusBar hidden={false} barStyle={'light-content'} />
        <LockScreenContextProvider>
          <View style={{marginTop: 100, alignItems: 'center'}}>
            <Icon name="lock" color={'white'} size={15} />
            <P
              size="m"
              style={{
                color: 'white',
                textAlign: 'center',
                paddingVertical: theme.spacing.p1,
              }}>
              Enter Passcode
            </P>
            <CodeContainer />
          </View>
          <Keypad />
          <Row
            style={{
              justifyContent: 'space-around',
              marginTop: 'auto',
              alignItems: 'flex-end',
              paddingBottom: insets.bottom,
            }}>
            <TouchableWithoutFeedback>
              <P style={{color: 'white'}}>Emergency</P>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <P style={{color: 'white'}}>Emergency</P>
            </TouchableWithoutFeedback>
          </Row>
        </LockScreenContextProvider>
      </Layout>
    </ImageBackground>
  );
};

export default LockScreen;
