import {Row} from 'components/Grid';
import {P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedProps,
} from 'react-native-reanimated';
import {red} from 'react-native-redash';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'themes';
import {NoteContext} from './context/NoteContext';

const Header: FC = () => {
  const context = useContext(NoteContext);
  const {sharedValues, folder, note} = context;
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  const AnimatedP = Animated.createAnimatedComponent(P);

  const cheveronAnimationProps = useAnimatedProps(() => {
    return {
      opacity: sharedValues.folderSelected.value,
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
        [-10, 10, -100],
      ),
      marginTop: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [18, 0, 2],
      ),
    };
  });

  const AnimatedNoteTitleProp = useAnimatedProps(() => {
    return {
      fontSize: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [26, 16, 16],
      ),
      marginLeft: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [-10, 10, -100],
      ),
      marginTop: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [18, 0, 2],
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
            backgroundColor: 'black',
            paddingLeft: 24,
          }}>
          <TouchableHighlight
            onPress={() => context.noteState.set(state => (state -= 1))}>
            <AnimatedIcon
              name="chevron-left"
              size={20}
              color={'yellow'}
              style={[{}, cheveronAnimationProps]}
            />
          </TouchableHighlight>
        </View>
        <AnimatedP
          style={[
            {
              fontSize: 26,
              color: 'white',
              marginTop: 18,
              marginLeft: -10,
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
