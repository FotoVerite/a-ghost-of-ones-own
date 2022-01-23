import {P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import theme from 'themes';
import {MessengerContext} from './context/MessengerContext';
import Search from './Search';

const Header: FC = () => {
  const context = useContext(MessengerContext);

  return (
    <View style={styles.container}>
      <P style={styles.header}>Chats</P>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.p2,
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Header;
