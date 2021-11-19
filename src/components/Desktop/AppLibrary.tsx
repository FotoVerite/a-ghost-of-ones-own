import React, {FC, useRef, useState} from 'react';
import {ApplicationLineItem} from './Application';
import {StackNavigationProp} from '@react-navigation/stack';

import {FlatList, ListRenderItem, PanResponder, View} from 'react-native';

import {BlurView} from '@react-native-community/blur';
import Animated, {SlideInRight, SlideOutRight} from 'react-native-reanimated';
import FuseSearch from 'components/utility/FuseSearch';

import messenger from './icons/messenger.png';
import notepad from './icons/notepad.jpeg';
import {screenParams} from 'components/Navigation/screens';
import {Bold} from 'components/StyledText';

import theme from 'themes';

type Props = {
  navigation: StackNavigationProp<screenParams, 'Desktop'>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppLibrary: FC<Props> = ({navigation, setVisible}) => {
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (e, state) => {
        if (state.dx > 200) {
          setVisible(false);
        }
      },
      onPanResponderRelease: () => {},
    }),
  ).current;
  const applications = [
    {
      component: (
        <ApplicationLineItem
          image={messenger}
          title={'Messenger'}
          navigateTo={'Messages'}
          navigation={navigation}
        />
      ),
      name: 'messager',
    },
    {
      component: (
        <ApplicationLineItem
          image={notepad}
          title={'Notes'}
          navigateTo={'Notes'}
          navigation={navigation}
        />
      ),
      name: 'notes',
    },
  ];
  const [apps, setApps] = useState(applications);

  const renderItem: ListRenderItem<any> = ({item, index}) => {
    return <>{item.component}</>;
  };

  return (
    <Animated.View
      entering={SlideInRight}
      exiting={SlideOutRight}
      style={[
        {
          height: '100%',
          zIndex: 2,
          position: 'absolute',
          width: '100%',
          top: 0,
        },
      ]}
      {...panResponder.panHandlers}>
      <>
        <BlurView
          style={{
            zIndex: 3,
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          blurType="light"
          blurAmount={30}
          reducedTransparencyFallbackColor="white"
        />
        <View style={{zIndex: 3}}>
          <FuseSearch
            elements={applications}
            setSearchableElements={setApps}
            title={'Application Library'}
            keys={['name']}
          />
          <FlatList
            style={{
              padding: theme.spacing.p1,
            }}
            data={apps}
            renderItem={renderItem}
            keyExtractor={(item: any, index) => index + ''}
            ListEmptyComponent={
              <View
                style={{
                  alignContent: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  backgroundColor: 'none',
                }}>
                <Bold>No Apps Found</Bold>
              </View>
            }
            ItemSeparatorComponent={props => {
              return (
                <View
                  style={{
                    height: 2,
                    marginVertical: 10,
                    backgroundColor: 'white',
                  }}
                />
              );
            }}
          />
        </View>
      </>
    </Animated.View>
  );
};

export default AppLibrary;
