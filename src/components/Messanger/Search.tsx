import React, {FC, useContext} from 'react';
import Fuse from 'fuse.js';

import theme from 'themes';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ConversationType, MessengerContext} from './context/MessengerContext';
import Animated, {
  useAnimatedProps,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated';
import {Input} from 'react-native-elements';

const Search: FC = ({type}) => {
  const context = useContext(MessengerContext);

  const {conversations, sharedValues} = context;

  const FolderAnimatedProps = useAnimatedProps(() => {
    return {
      marginLeft: interpolate(
        sharedValues.messageSelected.value,
        [0, 1, 2],
        [-10, -1000, -1000],
      ),
    };
  });

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
    keys: ['name'],
  };

  const fuse = new Fuse<ConversationType>(conversations, options);

  return (
    <Animated.View style={FolderAnimatedProps}>
      <Input
        inputContainerStyle={{
          borderColor: 'gray',
          borderStyle: 'solid',
          borderWidth: 2,
          borderRadius: theme.BorderRadius.normal,
          padding: 0,
          height: 50,
          marginTop: theme.spacing.p2,
          backgroundColor: '#f2f2f0',
        }}
        leftIcon={
          <Icon
            name={'search'}
            size={25}
            style={{marginStart: theme.spacing.p2}}
          />
        }
        placeholder="Search"
        onChangeText={text => {
          let results = fuse.search(text);
          if (text == undefined || text === '') {
            results = conversations;
          }
          context.viewableConversations.set(results);
        }}
        defaultValue={''}
      />
    </Animated.View>
  );
};

export default Search;
