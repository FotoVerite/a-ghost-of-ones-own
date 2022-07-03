import React, {FC, useContext} from 'react';
import {Dimensions, FlatList, ListRenderItem, View} from 'react-native';

import theme from 'themes';
import Animated, {interpolate, useAnimatedProps} from 'react-native-reanimated';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {ExchangeType, MessengerContext} from './context/MessengerContext';
import Exchange from './Exchange';
import {P} from 'components/StyledText';
import {Row} from 'components/Grid';
import {Image} from 'react-native-elements/dist/image/Image';

const Asset: FC = () => {
  const context = useContext(MessengerContext);
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const {sharedValues, conversation} = context;
  const {width, height} = Dimensions.get('window');
  const AssetAnimationStyles = useAnimatedProps(() => {
    return {
      marginTop: interpolate(
        sharedValues.messageSelected.value,
        [0, 1, 2],
        [height, height, 0],
      ),
    };
  });

  const renderConversation: ListRenderItem<ExchangeType> = ({item, index}) => (
    <Exchange exchange={item} index={index} />
  );
  const figureOutWidth = () => (width > height ? height : width);
  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'black',
          zIndex: 10,
          top: 0,
          position: 'absolute',
          width: width,
          flex: 1,
          flexGrow: 1,
          bottom: 0,
        },
        AssetAnimationStyles,
      ]}>
      <Row
        style={{
          backgroundColor: 'gray',
          height: 50,
          flexGrow: 0,
          alignItems: 'center',
        }}>
        <TouchableWithoutFeedback onPress={() => context.messengerState.set(1)}>
          <P style={{color: 'blue', marginLeft: theme.spacing.p2}}>DONE</P>
        </TouchableWithoutFeedback>
      </Row>
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <Image
          source={context.message.state?.content}
          style={{
            width: figureOutWidth() - theme.spacing.p4,
            margin: theme.spacing.p2,
            aspectRatio: context.message.state?.options.aspect,
            alignItems: 'center',
          }}
        />
      </View>
    </Animated.View>
  );
};

export default Asset;
