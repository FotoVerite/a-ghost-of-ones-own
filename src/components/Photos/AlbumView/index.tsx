import React, {FC} from 'react';
import {StatusBar} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Layout} from 'components/Grid';

import {screenParams} from 'components/Navigation/screens';
import PhotoList from './PhotoList';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Album'>;
};

export type PhotoType = {source: string; notes?: string};
export type AlbumType = {
  title: string;
  photos: PhotoType[];
};

const Photos: FC<Props> = ({route, navigation}) => {
  const routeParams = useRoute<RouteProp<screenParams, 'Album'>>();

  return (
    <Layout style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar hidden />
      <PhotoList />
    </Layout>
  );
};

export default Photos;
