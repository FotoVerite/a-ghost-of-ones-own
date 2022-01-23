import React, {FC, useContext, useEffect, useState} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';

import theme from 'themes';
import {FolderProps, NoteContext} from './context/NoteContext';
import FolderListItem from './FolderListItem';

const Folders: FC = () => {
  const context = useContext(NoteContext);

  const renderItem: ListRenderItem<FolderProps> = ({item, index}) => (
    <FolderListItem folder={item} />
  );
  return (
    <FlatList
      ItemSeparatorComponent={props => {
        return (
          <View
            style={{
              height: 1,
              marginVertical: 10,
              backgroundColor: '#555',
            }}
          />
        );
      }}
      style={{
        borderRadius: theme.BorderRadius.small,
        backgroundColor: '#222',
        padding: theme.spacing.p1,
        flexGrow: 0,
      }}
      data={context.viewableFolders.state}
      renderItem={renderItem}
      keyExtractor={(item: any, index) => index + ''}
    />
  );
};

export default Folders;
