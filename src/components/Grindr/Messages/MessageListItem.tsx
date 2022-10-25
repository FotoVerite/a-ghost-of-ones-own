import React, {FC} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import theme from 'themes';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from '../Navigation/screens';
import {GrindrConversationType, GrindrExchangeType} from '../context';
import {P} from 'components/StyledText';
import {Row} from 'components/Grid';

const UserListItem: FC<GrindrConversationType> = ({
  name,
  avatar,
  exchanges,
  index,
}) => {
  const navigation = useNavigation<StackNavigationProp<screenParams>>();
  const {width, height} = Dimensions.get('window');
  const lastLineArray = Object.assign(
    new Array<GrindrExchangeType>(),
    exchanges,
  );
  const lastLine = lastLineArray.reverse()[0].messages.reverse()[0].content;
  return (
    <View>
      <TouchableWithoutFeedback
        style={{}}
        onPress={() => {
          navigation.navigate('Exchanges', {
            id: index,
          });
        }}>
        <Row style={{marginTop: 10}}>
          <Image source={avatar} style={{height: 60, width: 60}}></Image>
          <View
            style={{
              marginStart: theme.spacing.p1,
              flexGrow: 1,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
              height: 80,
            }}>
            <P style={{color: 'gray'}}>{name}</P>
            <P style={{color: 'gray'}}>{lastLine}</P>
            <P style={{color: 'gray', position: 'absolute', top: 5, right: 5}}>
              Oct 6
            </P>
          </View>
        </Row>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default UserListItem;
