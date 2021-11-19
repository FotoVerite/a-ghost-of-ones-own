import {StackNavigationProp} from '@react-navigation/stack';
import {Row} from 'components/Grid';
import {AppRoutes, screenParams} from 'components/Navigation/screens';
import {P} from 'components/StyledText';
import React, {FC} from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import theme from 'themes';

type Props = {
  navigation: StackNavigationProp<screenParams, 'Desktop'>;
  navigateTo: AppRoutes;
  image: any;
  title: string;
};

export const Application: FC<Props> = ({
  navigation,
  navigateTo,
  image,
  title,
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <View style={{width: 50, height: 75}}>
        <Image
          source={image}
          width={50}
          height={50}
          resizeMethod={'scale'}
          style={{width: 50, height: 50}}
        />
        <P size="s" style={{textAlign: 'center', fontSize: 9}}>
          {title}
        </P>
      </View>
    </TouchableOpacity>
  );
};

export const ApplicationLineItem: FC<Props> = ({
  navigation,
  navigateTo,
  image,
  title,
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <Row style={{width: undefined, height: 75}}>
        <Image
          source={image}
          width={50}
          height={50}
          resizeMethod={'scale'}
          style={{width: 50, height: 50}}
        />
        <P
          size="m"
          style={{
            textAlign: 'left',
            fontSize: 15,
            marginStart: theme.spacing.p2,
          }}>
          {title}
        </P>
      </Row>
    </TouchableOpacity>
  );
};
