import React, {FC, useContext, useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from 'components/Navigation/screens';
import {RouteProp} from '@react-navigation/core';
import Fuse from 'fuse.js';

import {Layout} from 'components/Grid';
import {Button, Pressable, View} from 'react-native';
import {NoteText, P} from 'components/StyledText';
import theme from 'themes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import styled from 'styled-components/native';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {ApplicationContext} from 'contexts/app';

import sound1 from './assets/2.mp3';

type Props = {
  navigation: StackNavigationProp<screenParams, 'Desktop'>;
  route: RouteProp<Record<string, object | undefined>, 'Desktop'>;
};

const buttons = [
  {main: '1', sound: sound1},
  {main: '2', abc: 'abc', sound: sound1},
  {main: '3', abc: 'def', sound: sound1},
  {main: '4', abc: 'ghi', sound: sound1},
  {main: '5', abc: 'jkl', sound: sound1},
  {main: '6', abc: 'mno', sound: sound1},
  {main: '7', abc: 'pqrs', sound: sound1},
  {main: '8', abc: 'tuv', sound: sound1},
  {main: '9', abc: 'wyxz', sound: sound1},
  {main: '*', sound: sound1},
  {main: '0', abc: '+', sound: sound1},
  {main: '#', sound: sound1},
];
const Phone: FC<Props> = props => {
  const [number, setNumber] = useState('');
  const [longPressed, setLongPressed] = useState(false);
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const context = useContext(ApplicationContext);

  useEffect(() => {
    let interval: NodeJS.Timer | undefined;
    if (longPressed) {
      interval = setInterval(() => {
        setNumber(number => number.slice!(0, -1));
      }, 50);
    } else {
      if (interval != null) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [longPressed]);

  useEffect(() => {
    if (number.length === 0) setLongPressed(false);
  }, [number]);

  const addNumber = (value: string) => {
    setNumber(number => (number += value));
  };

  const renderNumber = () => {
    var r = /(\D+|\S+)/g,
      npa = '',
      nxx = '',
      last4 = '',
      ext = '',
      returnString = '';
    let cleanedNumber = number;
    npa = cleanedNumber.substr(0, 3);
    nxx = cleanedNumber.substr(3, 3);
    last4 = cleanedNumber.substr(6, 4);
    ext = cleanedNumber.substr(10, cleanedNumber.length);

    returnString += npa;
    if (npa.length === 3 && nxx.length > 0) returnString += '-';
    returnString += nxx;
    if (nxx.length === 3 && last4.length > 0) returnString += '-';
    returnString += last4;
    returnString += ext;
    return returnString;
  };

  const renderPhoneButtons = () => {
    return buttons.map((button, index) => (
      <Pressable
        key={`touchable.${index}`}
        style={({pressed}) => [
          {
            backgroundColor: pressed
              ? theme.colors.lightGray2
              : theme.colors.darkSlate,
            width: 75,
            height: 75,
            borderRadius: 38,
            margin: theme.spacing.p2,
          },
        ]}
        onPressIn={() => {
          context.audio.set({uri: button.sound, volume: 20});
          addNumber(button.main);
        }}
        onPressOut={() => {
          setTimeout(() => {
            context.audio.set(undefined);
          }, 100);
        }}>
        <View style={{justifyContent: 'center'}}>
          <P
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 37,
              fontWeight: 'bold',
              paddingBottom: 12,
            }}>
            {button.main}
          </P>
          {button.abc && (
            <P
              style={{
                position: 'absolute',
                textAlign: 'center',
                color: 'white',
                fontSize: 16,
                bottom: 0,
                width: 75,
              }}>
              {button.abc}
            </P>
          )}
        </View>
      </Pressable>
    ));
  };
  return (
    <Layout>
      <View style={{flexGrow: 1, marginVertical: theme.spacing.p2}}>
        <NoteText size="l" style={{textAlign: 'center'}}>
          {renderNumber()}
        </NoteText>
      </View>
      <View
        style={{
          alignSelf: 'center',
          width: 380,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        {renderPhoneButtons()}
        <TouchableOpacity
          style={{
            backgroundColor: theme.colors.brand,
            borderRadius: 50,
            width: 75,
            height: 75,
            justifyContent: 'center',
            margin: theme.spacing.p2,
          }}
          onPress={() => {}}>
          <View style={{justifyContent: 'center'}}>
            <Icon
              name="phone"
              color="white"
              size={42}
              style={{textAlign: 'center'}}
            />
          </View>
        </TouchableOpacity>
        {number.length > 0 && (
          <Animated.View
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
            style={{position: 'absolute', bottom: 20, right: 25}}>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                margin: theme.spacing.p2,
              }}
              onPressIn={() => {
                setNumber(number => number.slice!(0, -1));
              }}
              onLongPress={() => setLongPressed(true)}
              onPressOut={() => setLongPressed(false)}>
              <View style={{justifyContent: 'center'}}>
                <EntypoIcon
                  name="erase"
                  color="gray"
                  size={42}
                  style={{textAlign: 'center'}}
                />
              </View>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </Layout>
  );
};

export default Phone;
