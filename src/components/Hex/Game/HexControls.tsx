import React, {FC, useContext, useEffect} from 'react';
import {Row} from 'components/Grid';

import theme from 'themes';
import {P} from 'components/StyledText';
import {Button} from 'react-native-elements';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Entypo';

import {Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HexContext} from '../context/hexContext';

const HexControl: FC = () => {
  const {width, height} = Dimensions.get('window');
  const insets = useSafeAreaInsets();
  const context = useContext(HexContext);

  return (
    <Row
      style={{
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0 + insets.bottom + 40,
        width: width,
        paddingHorizontal: 20,
      }}>
      <Button
        title={'Delete'}
        titleStyle={{color: 'black'}}
        buttonStyle={{
          backgroundColor: 'white',
          padding: theme.spacing.p1,
          paddingHorizontal: theme.spacing.p2,
          borderRadius: 15,
          height: theme.spacing.p4,
        }}
        onPress={() => {
          context.word.set(word => word.slice(0, -1));
        }}
      />
      <Button
        titleStyle={{color: 'black'}}
        buttonStyle={{
          backgroundColor: 'white',
          padding: theme.spacing.p1,
          paddingHorizontal: theme.spacing.p2,
          borderRadius: 15,
          height: theme.spacing.p4,
        }}
        icon={<Icon name={'cycle'} size={24} />}
        onPress={() =>
          context.letters.set(letters => Object.assign([], letters.reverse()))
        }
      />

      <Button
        title={'Enter'}
        titleStyle={{color: 'black'}}
        buttonStyle={{
          backgroundColor: 'white',
          padding: theme.spacing.p1,
          paddingHorizontal: theme.spacing.p2,
          borderRadius: 15,
          height: theme.spacing.p4,
        }}
        onPress={() => context.checkAnswer()}
      />
    </Row>
  );
};

export default HexControl;
