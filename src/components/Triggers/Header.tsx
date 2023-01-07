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
    <Row style={{flexGrow: 0}}>
      <TouchableHighlight
        activeOpacity={0.2}
        underlayColor={'#7b7a7a'}
        style={{borderRadius: theme.BorderRadius.small}}
        onPress={() => {
          navigation.navigate('Desktop');
        }}>
        <Row
          style={{
            alignItems: 'center',
            flexGrow: 1,
          }}>
          <Icon name="chevron-left" color={'black'} size={16} />
          <P style={{paddingStart: theme.spacing.p1, color: 'black'}}>Back</P>
        </Row>
      </TouchableHighlight>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    zIndex: 1,
  },
});

export default Header;
