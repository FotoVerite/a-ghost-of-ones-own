import {BlurView} from 'rn-id-blurview';
import {Row} from 'components/Grid';
import {P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated, {interpolate, useAnimatedProps} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'themes';
import {MessengerContext} from './context/MessengerContext';

Icon.loadFont();

const ConversationHeader: FC = () => {
  const context = useContext(MessengerContext);
  const {sharedValues} = context;
  const {width, height} = Dimensions.get('window');

  const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  const cheveronAnimationProps = useAnimatedProps(() => {
    return {
      opacity: sharedValues.messageSelected.value,
      marginLeft: interpolate(
        sharedValues.messageSelected.value,
        [0, 1, 2],
        [width, 0, 0],
      ),
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: 50,
          zIndex: 3,
          position: 'absolute',
          width: '100%',
          top: 0,
          opacity: 0,
        },
        cheveronAnimationProps,
      ]}>
      <>
        <BlurView
          style={{
            zIndex: 3,
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
          blurType="light"
          blurAmount={30}
          reducedTransparencyFallbackColor="white"
        />
        <Row
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            zIndex: 3,
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              if (context.messengerState.state > 0)
                context.messengerState.set(state => (state -= 1));
            }}>
            <AnimatedIcon
              name="chevron-left"
              size={20}
              color={'pink'}
              style={[
                {
                  alignItems: 'center',
                  marginStart: theme.spacing.p1,
                },
                cheveronAnimationProps,
              ]}
            />
          </TouchableWithoutFeedback>
          <View style={{flexGrow: 1}}>
            <P style={styles.header}>{context.conversation.state?.name}</P>
          </View>
        </Row>
      </>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.p2,
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ConversationHeader;
