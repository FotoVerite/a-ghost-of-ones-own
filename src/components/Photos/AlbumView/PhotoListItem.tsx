import React, {FC, useContext} from 'react';
import {FlatList, ListRenderItem, View, Image, Dimensions} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import theme from 'themes';
import {screenParams} from 'components/Navigation/screens';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {PhotoContext, PhotoProps} from '../context';

type Props = {photo: PhotoProps; index: number};

const PhotoListItem: FC<Props> = ({photo, index}) => {
  const context = useContext(PhotoContext);
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');

  return (
    <View>
      <TouchableWithoutFeedback
        style={{}}
        onPress={() => {
          navigation.navigate('Photos', {
            id: index,
          });
        }}>
        <SharedElement id={`photo.${index}`}>
          <Image
            source={photo.source}
            style={{
              width: width / 3 - theme.spacing.p1,
              aspectRatio: 1,
              height: undefined,
            }}></Image>
        </SharedElement>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PhotoListItem;
