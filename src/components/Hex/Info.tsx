import {Row} from 'components/Grid';
import context from 'components/Photos/context';
import {Bold, P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';

import Animated, {
  interpolate,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import {HexContext} from './context/hexContext';
import theme from 'themes';

const Info: FC = () => {
  const {width, height} = Dimensions.get('window');
  const context = useContext(HexContext);
  const insets = useSafeAreaInsets();

  const AssetAnimationStyles = useAnimatedProps(() => {
    return {
      left: interpolate(
        context.sharedValues.showInfo.value,
        [0, 1],
        [width, 0],
      ),
    };
  });

  const updateShowInfo = () => {
    context.sharedValues.showInfo.value = withTiming(
      context.sharedValues.showInfo.value === 0 ? 1 : 0,
      {duration: 500},
    );
  };

  const renderItem: ListRenderItem<string> = ({item, index}) => {
    return <P style={{color: 'white'}}>{item}</P>;
  };
  return (
    <Animated.View
      style={[
        {
          zIndex: 12,
          top: insets.top,
          position: 'absolute',
          width: width,
          flex: 1,
          flexGrow: 1,
          bottom: 0,
          borderLeftWidth: 1,
          borderColor: 'white',
          backgroundColor: 'black',
        },
        AssetAnimationStyles,
      ]}>
      <Row style={{flexGrow: 0}}>
        <Button
          title=""
          buttonStyle={{padding: 5, marginLeft: theme.spacing.p2}}
          onPress={() => updateShowInfo()}
          icon={<Icon name="check" color={'yellow'} />}
        />
      </Row>

      <P style={{color: 'white', padding: theme.spacing.p2}}>
        You Have {context.points.state} Points
      </P>

      <FlatList
        style={{
          padding: theme.spacing.p2,
          marginBottom: insets.bottom + insets.top,
        }}
        data={context.answered.state}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
        ListEmptyComponent={
          <View
            style={{
              alignContent: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundColor: 'none',
            }}>
            <Bold>No Words Found </Bold>
          </View>
        }
      />
    </Animated.View>
  );
};

export default Info;
