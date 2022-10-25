import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DiscordConversationType} from 'components/Discord/context';
import {Row} from 'components/Grid';
import {P} from 'components/StyledText';
import {name} from 'faker';
import React, {FC, ReactNode, useContext} from 'react';

import {Dimensions, FlatList, Image, ListRenderItem, View} from 'react-native';
import theme, {discordTheme} from 'themes';
import {GrindrContext} from '../context';
import {screenParams} from '../Navigation/screens';
import ExchangeListItem from './ExchangeListItem';

const Exchanges: FC = () => {
  const navigation = useNavigation<StackNavigationProp<screenParams>>();

  const context = useContext(GrindrContext);
  const {width, height} = Dimensions.get('window');
  const renderItem: ListRenderItem<DiscordConversationType> = ({
    item,
    index,
  }) => {
    return <ExchangeListItem exchange={item} index={index} />;
  };
  const exchanges = context.Messages[1];

  return (
    <View
      style={{
        backgroundColor: discordTheme.colors.gray60,
        margin: 4,
        paddingHorizontal: theme.spacing.p1 / 2,
        flexGrow: 1,
      }}>
      <Row style={{flexGrow: 0, padding: theme.spacing.p1}}>
        <Image
          source={exchanges.avatar}
          style={{width: 30, height: 30, marginRight: theme.spacing.p1}}
        />
        <P
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'left',
          }}>
          {exchanges.name}
        </P>
        <P
          style={{color: 'white', marginLeft: 'auto'}}
          onPress={() => {
            navigation.goBack();
          }}>
          Back
        </P>
      </Row>
      <FlatList
        contentContainerStyle={{}}
        ItemSeparatorComponent={props => {
          return (
            <View
              style={{
                height: 1,
                marginVertical: 5,
              }}
            />
          );
        }}
        style={{
          flexGrow: 1,
        }}
        data={context.Messages[1].exchanges}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
      />
    </View>
  );
};

export default Exchanges;
