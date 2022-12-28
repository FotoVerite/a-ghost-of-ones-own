import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from 'components/Navigation/screens';
import {Row} from 'components/Grid';
import {P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'themes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Button} from 'react-native-elements';
import {HexContext} from './context/hexContext';
import {withTiming} from 'react-native-reanimated';

const Header: FC = () => {
  const navigation = useNavigation<StackNavigationProp<screenParams>>();
  const insets = useSafeAreaInsets();
  const context = useContext(HexContext);

  const updateShowInfo = () => {
    context.sharedValues.showInfo.value = withTiming(
      context.sharedValues.showInfo.value === 0 ? 1 : 0,
      {duration: 500},
    );
  };

  return (
    <Row style={[styles.container, {top: insets.top}]}>
      <TouchableHighlight
        underlayColor="#eeeeee"
        style={{borderRadius: 5}}
        onPress={() => {
          navigation.navigate('Desktop');
        }}>
        <Row
          style={{
            alignItems: 'center',
          }}>
          <Icon name="chevron-left" color={'white'} size={16} />
          <P style={{paddingStart: theme.spacing.p1, color: 'white'}}>Back</P>
        </Row>
      </TouchableHighlight>
      <Button
        title=""
        buttonStyle={{padding: 5, marginLeft: theme.spacing.p2}}
        onPress={() => updateShowInfo()}
        icon={<Icon name="check" color={'yellow'} />}
      />
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.p2,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 5,
    justifyContent: 'space-between',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
