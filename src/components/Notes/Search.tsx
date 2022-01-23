import React, {FC, useContext, useState} from 'react';
import Fuse from 'fuse.js';

import theme from 'themes';
import {TextInput} from 'react-native-gesture-handler';

import {NoteContext, FolderProps} from './context/NoteContext';
import {NoteProps} from 'components/utility/FuseSearch';

type Props = {
  type: 'folder' | 'note';
};
const Search: FC<Props> = ({type}) => {
  const context = useContext(NoteContext);

  const {folders, folder} = context;
  const searchable = () =>
    type === 'folder' ? folders : folder.state?.notes || [];
  const findSearchableTitles = () => searchable().map(s => s.title);

  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ['title'],
  };

  const fuse = new Fuse<FolderProps[] | NoteProps[]>(searchable(), options);

  return (
    <TextInput
      style={{
        height: 40,
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        marginVertical: theme.spacing.p1,
        paddingHorizontal: theme.spacing.p1,
        borderRadius: theme.BorderRadius.small,
        backgroundColor: 'gray',
      }}
      placeholder="Search"
      onChangeText={text => {
        console.log('searchable');

        let results = fuse.search(text).map(x => x.item);
        if (text == undefined || text === '') {
          results = searchable();
        }
        type === 'folder'
          ? context.viewableFolders.set(results)
          : context.viewableNotes.set(results);
      }}
      defaultValue={''}
    />
  );
};

export default Search;
