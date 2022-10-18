import {Row} from 'components/Grid';
import {P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme, {discordTheme} from 'themes';
import {DiscordContext} from './context';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Header: FC = () => {
  const context = useContext(DiscordContext);

  return (
    <Row style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          context.messengerState.set(num => (num === 1 ? 0 : 1));
        }}
        style={{}}>
        <Icon
          name="bars"
          color={'white'}
          size={24}
          style={{paddingHorizontal: theme.spacing.p1}}
        />
      </TouchableWithoutFeedback>
      <P style={styles.header}>{context.conversation.state?.name}</P>
    </Row>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: discordTheme.colors.gray40,
    height: 50,
    flex: 0,
    flexGrow: 0,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Header;
