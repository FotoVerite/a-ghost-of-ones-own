import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import theme from 'themes';
import {Button} from 'react-native-elements';

const BlackButton: FC<{
  parentHeight: number;
  parentWidth: number;
  set: (value: string) => void;
  value: string;
}> = ({parentHeight, parentWidth, set, value}) => {
  const styles = StyleSheet.create({
    container: {
      height: '25%',
      width: '30%',
      backgroundColor: 'black',
    },
    button: {backgroundColor: '#3c3235'},
  });

  return (
    <Button
      containerStyle={styles.container}
      buttonStyle={styles.button}
      onPress={() => set(value)}
    />
  );
};

export default BlackButton;
