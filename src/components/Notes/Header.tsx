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
import {NoteContext} from './context/NoteContext';

const Header: FC = () => {
  const context = useContext(NoteContext);
  const {sharedValues, folder, note} = context;
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
        [0, 0, -100],
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
    <View style={styles.container}>
      <Row>
        <View
          style={{
            zIndex: 5,
            height: 20,
            width: 45,
            backgroundColor: 'black',
            paddingLeft: 24,
          }}>
          <TouchableHighlight
            onPress={() => {
              if (context.noteState.state > 0)
                context.noteState.set(state => (state -= 1));
              else navigation.navigate('Desktop');
            }}>
            <AnimatedIcon
              name="chevron-left"
              style={[cheveronAnimationProps]}
            />
          </TouchableHighlight>
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    marginLeft: -24,
  },
});

export default Header;
