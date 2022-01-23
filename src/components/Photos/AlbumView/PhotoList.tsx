import React, {FC, useContext} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import theme from 'themes';
import {PhotoContext, PhotoProps} from '../context';
import PhotoListItem from './PhotoListItem';

const Photos: FC = () => {
  const context = useContext(PhotoContext);

  const renderItem: ListRenderItem<PhotoProps> = ({item, index}) => {
    return <PhotoListItem photo={item} index={index} />;
  };
  return (
    <FlatList
      bounces={false}
      style={{padding: theme.spacing.p1, zIndex: 2}}
      data={context.album.state?.photos}
      renderItem={renderItem}
      renderToHardwareTextureAndroid
      contentContainerStyle={{alignItems: 'center'}}
      numColumns={3}
      keyExtractor={(item: any, index) => index + ''}
    />
  );
};

export default Photos;
