import React, {FC, useRef, useState} from 'react';
import {ApplicationLineItem} from './Application';
import {StackNavigationProp} from '@react-navigation/stack';

import {FlatList, ListRenderItem, View} from 'react-native';

import {BlurView} from 'rn-id-blurview';
import Animated, {SlideInRight, SlideOutRight} from 'react-native-reanimated';
import FuseSearch from 'components/utility/FuseSearch';

import messenger from './icons/messenger.png';
import notepad from './icons/notepad.jpeg';
import {screenParams} from 'components/Navigation/screens';
import {Bold} from 'components/StyledText';

import theme from 'themes';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PanGestureHandler} from 'react-native-gesture-handler';

type Props = {
  navigation: StackNavigationProp<screenParams, 'Desktop'>;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppLibrary: FC<Props> = ({navigation, setVisible}) => {
  const insets = useSafeAreaInsets();

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
    {
      component: (
        <ApplicationLineItem
          image={notepad}
          title={'Discord'}
          navigateTo={'Discord'}
          navigation={navigation}
        />
      ),
      name: 'discord',
    },
    {
      component: (
        <ApplicationLineItem
          title={'All Citizens Bank'}
          icon={
            <Icon
              name="bank"
              size={40}
              style={{
                alignSelf: 'center',
                alignItems: 'center',
              }}
            />
          }
          navigateTo={'Bank'}
          navigation={navigation}
        />
      ),
      name: 'AcB',
    },
    {
      component: (
        <ApplicationLineItem
          title={'Secrets'}
          icon={
            <Icon
              name="bank"
              size={40}
              style={{
                alignSelf: 'center',
                alignItems: 'center',
              }}
            />
          }
          navigateTo={'Gamepad'}
          navigation={navigation}
        />
      ),
      name: 'AcB',
    },
    {
      component: (
        <ApplicationLineItem
          title={'Phone'}
          icon={
            <Icon
              name="phone"
              size={40}
              style={{
                alignSelf: 'center',
                alignItems: 'center',
              }}
            />
          }
          navigateTo={'Phone'}
          navigation={navigation}
        />
      ),
      name: 'Phone',
    },
    {
      component: (
        <ApplicationLineItem
          title={'Swiper'}
          icon={
            <Icon
              name="phone"
              size={40}
              style={{
                alignSelf: 'center',
                alignItems: 'center',
              }}
            />
          }
          navigateTo={'LiquidSwiper'}
          navigation={navigation}
        />
      ),
      name: 'Swiper',
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
          top: insets.top,
        },
      ]}>
      <PanGestureHandler
        activeOffsetX={[-50, 50]}
        onGestureEvent={e => {
          setVisible(false);
        }}>
        <View style={{zIndex: 3, flexGrow: 1}}>
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
          <View style={{zIndex: 3, flex: 1}}>
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
        </View>
      </PanGestureHandler>
    </Animated.View>
  );
};

export default AppLibrary;
