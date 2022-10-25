import React, {FC, useContext} from 'react';
import {Dimensions, View} from 'react-native';

import {GrindrContext} from '../context';
import {RouteProp, useRoute} from '@react-navigation/native';
import {screenParams} from '../Navigation/screens';
import {P} from 'components/StyledText';
import theme, {GrindrTheme} from 'themes';
import {Row} from 'components/Grid';

const Field: FC<{name: string; value: string}> = ({name, value}) => {
  const routeParams = useRoute<RouteProp<screenParams, 'User'>>();
  const context = useContext(GrindrContext);
  const {width, height} = Dimensions.get('window');

  return (
    <Row
      style={{
        width: '100%',
        justifyContent: 'flex-start',
        borderBottomColor: GrindrTheme.colors.gray60,
        borderBottomWidth: 1,
        paddingVertical: theme.spacing.p1,
      }}>
      <P
        style={{
          color: GrindrTheme.colors.gray60,
          textAlign: 'left',
          width: 100,
          marginEnd: theme.spacing.p4,
        }}>
        {name}
      </P>
      <P
        style={{
          color: 'white',
          textAlign: 'left',
        }}>
        {value}
      </P>
    </Row>
  );
};

export default Field;
