import React, {FC, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from 'components/Navigation/screens';

export const Exit: FC<{}> = props => {
  const navigation = useNavigation<StackNavigationProp<screenParams>>();
  useEffect(() => navigation.navigate('Desktop'), []);
  return <></>;
};
