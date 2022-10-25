import React, {FC, useContext} from 'react';
import {FlatList, ListRenderItem, View, Image, Dimensions} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';

import theme from 'themes';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from '../Navigation/screens';
import {GrindrContext} from '../context';
import {P} from 'components/StyledText';

const UserListItem: FC<any> = ({user, index}) => {
  const context = useContext(GrindrContext);
  const navigation = useNavigation<StackNavigationProp<screenParams>>();
  const {width, height} = Dimensions.get('window');
  return (
    <View>
      <TouchableWithoutFeedback
        style={{}}
        onPress={() => {
          navigation.navigate('User', {
            id: index,
          });
        }}>
        <View
          style={{
            width: width / 3 - 2,
            height: width / 3 - 2,
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <SharedElement id={`user.${index}`}>
            <Image
              source={user.image}
              style={{
                width: width / 3 - 2,
                height: width / 3 - 2,
                aspectRatio: 1,
              }}></Image>
          </SharedElement>
          <P
            style={{
              color: 'white',
              bottom: 0,
              left: 6,
              fontWeight: 'bold',
              position: 'absolute',
              textShadowOffset: {width: 2, height: 2},
              textShadowRadius: 10,
              textShadowColor: 'black',
            }}>
            {user.username}
          </P>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default UserListItem;
