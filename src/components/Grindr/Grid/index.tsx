import React, {FC} from 'react';
import {StatusBar, View} from 'react-native';
import {Layout} from 'components/Grid';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import UsersList from './UsersList';

const Grid: FC = () => {
  const insets = useSafeAreaInsets();

  return (
    <Layout style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar hidden={false} barStyle={'light-content'} />
      <View
        style={[
          {
            justifyContent: 'center',
            backgroundColor: '#212121',
            width: '100%',
            paddingTop: insets.top,
          },
        ]}>
        <UsersList />
      </View>
    </Layout>
  );
};

export default Grid;
