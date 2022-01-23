import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {Layout} from 'components/Grid';

import PhotoContextProvider from './context';
import Albums from './Albums';
import Navigation from './Navigation';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Photos'>;
};

export const ITEM_SIZE_RATIO = 0.5;
export const ALBUM_PHOTO_SIZE_RATIO = 0.8;

const Photos: FC<Props> = ({route, navigation}) => {
  return (
    <PhotoContextProvider>
      <Layout style={{backgroundColor: 'black', flex: 1}}>
        <StatusBar hidden />
        <Navigation />
      </Layout>
    </PhotoContextProvider>
  );
};

export default Photos;
