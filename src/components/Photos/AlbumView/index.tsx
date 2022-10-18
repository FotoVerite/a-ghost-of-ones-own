import React, {FC} from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationProp, RouteProp, useRoute} from '@react-navigation/native';
import {Layout} from 'components/Grid';

import {screenParams} from 'components/Navigation/screens';
import PhotoList from './PhotoList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from 'themes';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  navigation: NavigationProp<'Album'>;
  route: RouteProp<Record<string, object | undefined>, 'Album'>;
};

export type PhotoType = {source: string; notes?: string};
export type AlbumType = {
  title: string;
  photos: PhotoType[];
};

const Photos: FC<Props> = ({route, navigation}) => {
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
            paddingBottom: theme.spacing.p1,
          },
        ]}>
        <TapGestureHandler
          onHandlerStateChange={() => {
            navigation.navigate('Albums');
          }}>
          <View style={{width: 40}}>
            <Icon name="chevron-left" size={40} color={'#1588ba'} style={{}} />
          </View>
        </TapGestureHandler>
      </View>
      <PhotoList />
    </Layout>
  );
};

export default Photos;
