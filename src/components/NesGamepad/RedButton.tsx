import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

import theme from 'themes';
import {Button} from 'react-native-elements';

const RedButton: FC<{
  parentHeight: number;
  parentWidth: number;
  set: (value: string) => void;
  value: string;
}> = ({parentHeight, parentWidth, set, value}) => {
  const styles = StyleSheet.create({
    buttonStyles: {
      backgroundColor: 'red',
      width: parentHeight / 5 - theme.spacing.p2 - theme.spacing.p2,
      height: parentHeight / 5 - theme.spacing.p2 - theme.spacing.p2,
      borderRadius: parentHeight / 2,
    },
  });

  return (
    <View style={{backgroundColor: 'white', padding: theme.spacing.p1}}>
      <Button
        containerStyle={{backgroundColor: 'white'}}
        buttonStyle={styles.buttonStyles}
        onPress={() => set(value)}
      />
    </View>
  );
};

export default RedButton;
