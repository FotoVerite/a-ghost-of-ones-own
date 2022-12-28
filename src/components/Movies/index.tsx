import React, {FC, ReactElement} from 'react';
import {FlatList, ListRenderItem, StatusBar, View} from 'react-native';
import {Layout} from 'components/Grid';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {optionValueType} from 'contexts/app';

import theme from 'themes';
import Header from './Header';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from 'components/Navigation/screens';
import {P} from 'components/StyledText';

const Movies: FC = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<StackNavigationProp<screenParams>>();

  const MOVIES: Array<{name: string; route: string}> = [
    {name: 'Opening', route: 'OsLoading'},
  ];

  const renderOption: ListRenderItem<{name: string; route: string}> = ({
    item,
    index,
  }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate(item.route as any, {overrideRoute: 'Movies'})
        }>
        <P>{item.name}</P>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Layout style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar hidden={false} barStyle={'light-content'} />
      <View
        style={[
          {
            justifyContent: 'center',
            backgroundColor: '#e5e2e2',
            width: '100%',
            paddingTop: insets.top,
            height: '100%',
            padding: theme.spacing.p2,
          },
        ]}>
        <Header />
        <FlatList
          style={{
            paddingBottom: 0,
            flexGrow: 1,
          }}
          initialNumToRender={25}
          // onViewableItemsChanged={onViewRef.current}
          data={MOVIES}
          renderItem={renderOption}
          keyExtractor={(item: any, index) => index + ''}
          ItemSeparatorComponent={props => {
            return (
              <View
                style={{
                  height: 1,
                  marginVertical: 5,
                  backgroundColor: 'red',
                }}
              />
            );
          }}
        />
      </View>
    </Layout>
  );
};

export default Movies;
