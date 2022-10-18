import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {StackNavigationProp} from '@react-navigation/stack';
import {Row} from 'components/Grid';
import {screenParams} from 'components/Navigation/screens';
import {P} from 'components/StyledText';
import React, {FC} from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import theme from 'themes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header: FC = () => {
  const navigation = useNavigation<StackNavigationProp<screenParams>>();
  const insets = useSafeAreaInsets();

  return (
    <Row style={[styles.container, {top: insets.top + 12}]}>
      <TouchableHighlight
        style={{paddingStart: theme.spacing.p1}}
        onPress={() => {
          navigation.navigate('Desktop');
        }}>
        <Row
          style={{
            alignItems: 'center',
            flexGrow: 1,
          }}>
          <Icon name="chevron-left" color={'white'} size={16} />
          <P style={{paddingStart: theme.spacing.p1, color: 'white'}}>Back</P>
        </Row>
      </TouchableHighlight>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
  },
});

export default Header;
