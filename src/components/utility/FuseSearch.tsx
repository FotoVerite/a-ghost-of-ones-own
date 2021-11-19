import {Row} from 'components/Grid';
import Fuse from 'fuse.js';
import React, {FC, useState} from 'react';
import {Dimensions, ScrollView, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import theme from 'themes';

export type NoteProps = {
  title: string;
  elements: JSX.Element[];
  setSearchableElements: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  keys: string[];
};

const FuseSearch: FC<NoteProps> = ({
  elements,
  setSearchableElements,
  keys,
  title,
}) => {
  const [textValue, setTextValue] = useState('');
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
    keys: keys,
  };
  const fuse = new Fuse(elements, options);

  return (
    <Row
      style={{
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        margin: theme.spacing.p1,
        height: 40,
        borderRadius: theme.BorderRadius.small,
        paddingHorizontal: theme.spacing.p1,
        width: Dimensions.get('window').width - theme.spacing.p2,
        alignItems: 'center',
      }}>
      <Icon name={'magnify'} color="#000" size={25} />
      <TextInput
        style={{}}
        placeholder={title}
        value={textValue}
        onChangeText={text => {
          setTextValue(text);
          let results = fuse.search(text).map(x => x.item);
          if (text == undefined || text === '') {
            results = [];
          }
          setSearchableElements(results);
        }}
        defaultValue={''}
      />
      {textValue != '' && (
        <Icon
          style={{marginLeft: 'auto'}}
          name={'close-box'}
          color="#000"
          size={25}
          onPress={() => setTextValue('')}
        />
      )}
    </Row>
  );
};

export default FuseSearch;
