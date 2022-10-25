import React, {FC, useContext} from 'react';
import {Dimensions, View} from 'react-native';

import {GrindrContext} from '../context';
import {RouteProp, useRoute} from '@react-navigation/native';
import {screenParams} from '../Navigation/screens';
import {P} from 'components/StyledText';
import theme, {GrindrTheme} from 'themes';

const Tag: FC<{tag: string}> = ({tag}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <View
      style={{
        backgroundColor: GrindrTheme.colors.gray60,
        flexShrink: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#716f6f',
        minWidth: 50,
        margin: theme.spacing.p1 / 2,
      }}>
      <P
        style={{
          color: 'white',
          textAlign: 'center',
        }}>
        {tag}
      </P>
    </View>
  );
};

export default Tag;
