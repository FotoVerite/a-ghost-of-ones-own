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
  image?: any;
  icon?: any;
  title: string;
};

export const Application: FC<Props> = ({
  navigation,
  navigateTo,
  image,
  icon,
  title,
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <View style={{width: 75, height: 85}}>
        <Image
          source={image}
          resizeMethod={'scale'}
          style={{width: 60, height: 60, alignSelf: 'center'}}
        />
        <P size="s" style={{textAlign: 'center'}}>
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
  icon,
  title,
}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <Row style={{width: undefined, height: 75}}>
        {image && (
          <Image
            source={image}
            width={50}
            height={50}
            resizeMethod={'scale'}
            style={{width: 50, height: 50}}
          />
        )}
        {icon != undefined && (
          <View
            style={{
              width: 75,
              height: 75,
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            {icon}
          </View>
        )}
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
