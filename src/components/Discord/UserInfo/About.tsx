import React, {FC} from 'react';
import {P} from 'components/StyledText';
import theme, {discordTheme} from 'themes';
import {View} from 'react-native';

type Props = {about: string};

const About: FC<Props> = ({about}) => {
  return (
    <View style={{backgroundColor: discordTheme.colors.gray60}}>
      <P
        style={{
          color: 'white',
          fontWeight: 'bold',
          marginLeft: theme.spacing.p2,
          paddingTop: theme.spacing.p1,
        }}>
        About Me
      </P>
      <View
        style={{
          backgroundColor: discordTheme.colors.gray40,
          margin: theme.spacing.p2,
          padding: theme.spacing.p1,
          flexGrow: 1,
          minHeight: 100,
        }}>
        <P style={{color: 'gray'}}>{about}</P>
      </View>
    </View>
  );
};

export default About;
