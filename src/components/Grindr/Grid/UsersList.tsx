import React, {FC, useContext} from 'react';
import {FlatList, ListRenderItem} from 'react-native';

import theme from 'themes';
import {GrindrContext} from '../context';
import UserListItem from './UserListItem';

const Photos: FC = () => {
  const context = useContext(GrindrContext);

  const renderItem: ListRenderItem<any> = ({item, index}) => {
    return <UserListItem user={item} index={index} />;
  };
  return (
    <FlatList
      bounces={false}
      style={{padding: theme.spacing.p1, zIndex: 2}}
      data={context.Users}
      renderItem={renderItem}
      renderToHardwareTextureAndroid
      contentContainerStyle={{alignItems: 'center'}}
      numColumns={3}
      keyExtractor={(item: any, index) => index + ''}
    />
  );
};

export default Photos;
