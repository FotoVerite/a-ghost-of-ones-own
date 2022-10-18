import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Row} from 'components/Grid';
import {screenParams} from 'components/Navigation/screens';
import {P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedProps,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'themes';
import {NoteContext} from './context/NoteContext';

const Header: FC = () => {
  const context = useContext(NoteContext);
  const {sharedValues} = context;
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  const AnimatedP = Animated.createAnimatedComponent(P);
  const navigation = useNavigation<StackNavigationProp<screenParams>>();

  const cheveronAnimationProps = useAnimatedProps(() => {
    return {
      fontSize: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [14, 20, 20],
      ),
      color: interpolateColor(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        ['white', 'yellow', 'yellow'],
      ),
    };
  });

  const FolderAnimatedProps = useAnimatedProps(() => {
    return {
      fontSize: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [26, 16, 16],
      ),
      color: interpolateColor(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        ['white', 'yellow', 'yellow'],
      ),
      marginLeft: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [-12, -12, -120],
      ),
      marginTop: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [18, 0, 2],
      ),
    };
  });

  const BackAnimatedProps = useAnimatedProps(() => {
    return {
      marginLeft: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [10, -100, -100],
      ),
    };
  });

  return (
    <Row style={styles.container}>
      <TouchableHighlight
        style={{flex: 1}}
        onPress={() => {
          if (context.noteState.state > 0) {
            context.noteState.set(state => (state -= 1));
          } else {
            navigation.navigate('Desktop');
          }
        }}>
        <Row style={{flexGrow: 0}}>
          <View
            style={{
              zIndex: 5,
              height: 20,
              backgroundColor: 'black',
              paddingLeft: 24,
            }}
          />
          <AnimatedIcon
            name="chevron-left"
            style={[
              {backgroundColor: 'black', zIndex: 5},
              cheveronAnimationProps,
            ]}
          />
          <AnimatedP
            style={[
              {
                fontSize: 12,
                color: 'white',
                marginTop: -2,
              },
              BackAnimatedProps,
            ]}>
            Back
          </AnimatedP>
        </Row>
      </TouchableHighlight>
      <AnimatedP
        style={[
          {
            fontSize: 26,
            color: 'white',
            marginTop: 18,
            left: 55,
            position: 'absolute',
          },
          FolderAnimatedProps,
        ]}>
        Folders
      </AnimatedP>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexGrow: 0,
    height: 50,
  },
});

export default Header;
