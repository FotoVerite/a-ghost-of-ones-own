import React, {FC, useContext, useEffect} from 'react';
import {Dimensions, FlatList, ListRenderItem, View} from 'react-native';

import NoteListItem from './NoteListltem';

import theme from 'themes';
import {NoteContext} from './context/NoteContext';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedProps,
} from 'react-native-reanimated';
import {P} from 'components/StyledText';
import Search from './Search';

const NotesList: FC = () => {
  const context = useContext(NoteContext);
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const {sharedValues, folder, note} = context;
  const {width, height} = Dimensions.get('window');

  const AnimatedP = Animated.createAnimatedComponent(P);

  const ViewAnimatedProps = useAnimatedProps(() => {
    return {
      marginLeft: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [width, 0, 0],
      ),
    };
  });

  const PAnimatedProps = useAnimatedProps(() => {
    return {
      fontSize: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [26, 26, 16],
      ),

      marginLeft: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [-10, 0, 20],
      ),
      marginTop: interpolate(
        sharedValues.folderSelected.value,
        [0, 1, 2],
        [18, 0, -25],
      ),
    };
  });

  const renderItem: ListRenderItem<{note: Element; title: string}> = ({
    item,
    index,
  }) => <NoteListItem note={item.note} title={item.title} />;
  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'black',
          paddingHorizontal: theme.spacing.p2,
          zIndex: 5,
          top: 50,
          position: 'absolute',
          width: width,
          flex: 1,
          flexGrow: 1,
          bottom: 0,
        },
        ViewAnimatedProps,
      ]}>
      <AnimatedP style={[{color: 'white', fontSize: 36}, PAnimatedProps]}>
        {context.folder.state?.title}
      </AnimatedP>
      <Search type="note" />
      <FlatList
        ItemSeparatorComponent={props => {
          return (
            <View
              style={{
                height: 2,
                marginVertical: 10,
                backgroundColor: 'gray',
              }}
            />
          );
        }}
        style={{
          borderRadius: theme.BorderRadius.small,
          backgroundColor: '#222',
          padding: theme.spacing.p1,
          flex: 0,
          flexGrow: 0,
        }}
        data={context.folder.state?.notes || []}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
      />
    </Animated.View>
  );
};

export default NotesList;
