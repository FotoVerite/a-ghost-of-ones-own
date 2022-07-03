import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from 'components/Navigation/screens';
import {Row} from 'components/Grid';
import {P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Search from './Search';
import theme from 'themes';

Icon.loadFont();

const Header: FC = () => {
  const navigation = useNavigation<StackNavigationProp<screenParams>>();

  return (
    <View style={styles.container}>
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
          <Icon name="chevron-left" color={'black'} size={16} />
          <P style={{paddingStart: theme.spacing.p1, color: 'black'}}>Back</P>
        </Row>
      </TouchableHighlight>
      <P style={styles.header}>Chats</P>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.p2,
    marginTop: 12,
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
