import React, {FC, useContext, useEffect} from 'react';
import {Row} from 'components/Grid';

import theme from 'themes';
import {P} from 'components/StyledText';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

import {Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LockScreenContext} from './context/LockScreenContext';
import CodeDisplay from './CodeDisplay';

const CodeContainer: FC = () => {
  const {width, height} = Dimensions.get('window');
  const context = useContext(LockScreenContext);

  return (
    <Row
      style={{
        justifyContent: 'space-between',
        width: width,
        paddingHorizontal: theme.spacing.p4,
        paddingVertical: theme.spacing.p2,
      }}>
      <CodeDisplay char={context.code.state[0]} />
      <CodeDisplay char={context.code.state[1]} />
      <CodeDisplay char={context.code.state[2]} />
      <CodeDisplay char={context.code.state[3]} />
      <CodeDisplay char={context.code.state[4]} />
      <CodeDisplay char={context.code.state[5]} />
    </Row>
  );
};

export default CodeContainer;
