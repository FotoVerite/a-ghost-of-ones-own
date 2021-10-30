import React, {FC, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from 'components/Navigation/screens';
import {RouteProp} from '@react-navigation/core';

import {Layout} from 'components/Grid';
import {ImageBackground} from 'react-native';

import bg from 'assets/images/backgrounds/snow-egg.jpeg';

type Props = {
  navigation: StackNavigationProp<screenParams, 'Desktop'>;
  route: RouteProp<Record<string, object | undefined>, 'Desktop'>;
};

const Desktop: FC<Props> = props => {
  return (
    <ImageBackground source={bg} resizeMode="cover" style={{flex: 1}}>
      <Layout></Layout>
    </ImageBackground>
  );
};

export default Desktop;
