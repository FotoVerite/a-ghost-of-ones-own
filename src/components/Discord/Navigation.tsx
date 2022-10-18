import React, {FC} from 'react';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {Row} from 'components/Grid';
import {discordTheme} from 'themes';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  navigation: any;
  route: RouteProp<Record<string, object | undefined>, 'Discord'>;
};

const Navigation: FC = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <Row
      style={{
        backgroundColor: discordTheme.colors.gray50,
        height: 60,
        width: '100%',
        position: 'absolute',
        zIndex: 1000,
        bottom: 0,
        paddingBottom: 10,
      }}>
      <View
        style={{
          marginStart: 'auto',
          justifyContent: 'center',
          marginEnd: '7%',
        }}>
        <Icon
          name="exit-to-app"
          size={30}
          style={{color: 'white'}}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </Row>
  );
};

export default Navigation;
