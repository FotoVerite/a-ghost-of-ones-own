import React, {FC} from 'react';
import {P} from 'components/StyledText';
import theme, {discordTheme} from 'themes';
import {Image, ImageURISource, View} from 'react-native';
import {DiscordContextDigested} from '../context';

type Props = {info: {name: string; avatar: ImageURISource}};

const Banner: FC<Props> = ({info}) => {
  return (
    <>
      <View
        style={{
          height: 70,
          backgroundColor: discordTheme.colors.accent,
          width: '100%',
          borderTopStartRadius: theme.BorderRadius.small,
          borderTopEndRadius: theme.BorderRadius.small,
        }}>
        <Image
          source={info.avatar}
          style={{
            width: 75,
            height: 75,
            position: 'absolute',
            borderRadius: 50,
            left: theme.spacing.p2,
            bottom: -37,
            borderColor: discordTheme.colors.gray30,
            borderWidth: 5,
          }}
        />
      </View>
      <P
        style={{
          fontSize: 25,
          color: 'white',
          marginTop: 37 + 10,
          marginLeft: theme.spacing.p2,
          marginBottom: theme.spacing.p1,
          fontWeight: 'bold',
        }}>
        {info.name}
      </P>
    </>
  );
};

export default Banner;
