import React, {FC, useContext, useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Bold, P} from 'components/StyledText';

import {
  useAnimatedGestureHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {
  TapGestureHandler,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {Row} from 'components/Grid';
import {ApplicationContext} from 'contexts/app';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AnimatePresence, MotiView, useDynamicAnimation} from 'moti';
import theme from 'themes';

Icon.loadFont();

export type NotificationProps = {
  title: string;
  body: string;
  iconName?: string;
  delay?: number;
  index: number;
  keyId: string;
};

export type NotificationTriggerProps = {
  title: string;
  body: string;
  iconName?: string;
  key: string;
};

const Notification: FC<NotificationProps> = ({
  delay,
  iconName,
  title,
  body,
  index,
  keyId,
}) => {
  const {width, height} = Dimensions.get('window');
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(true);
  const rotation = useSharedValue(0);
  const xValue = useSharedValue(width);
  const skewValue = useSharedValue(35);

  const [pressed, setPressed] = useState(0);

  const context = useContext(ApplicationContext);

  const eventHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {},
    onEnd: (event, ctx) => {},
  });

  const remove = () => {
    context.notifications.set(notifications => {
      const newMap = new Map(notifications);
      newMap.delete(keyId);
      return newMap;
    });
  };

  const marginTop = useDynamicAnimation(() => {
    return {
      marginTop: insets.top + theme.spacing.p1 + 80 * index,
    };
  });

  useEffect(() => {
    marginTop.animateTo({
      marginTop: insets.top + theme.spacing.p1 + 80 * index,
    });
    return () => {};
  }, [index]);

  return (
    <MotiView
      state={marginTop}
      style={[
        {
          height: 75,
          marginTop: insets.top + theme.spacing.p1,
          width: width * 0.8,
          backgroundColor: theme.colors.better,
          alignSelf: 'center',
          padding: theme.spacing.p1 + 2,
          borderRadius: theme.BorderRadius.normal,
          position: 'absolute',
          zIndex: 5 + index,
        },
      ]}
      from={{
        scale: 0.8,
        skewX: '45deg',
        translateX: -width,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        skewX: '0deg',
        translateX: 0,
        opacity: 1,
      }}
      onDidAnimate={(key, finished, value, dic) => {
        if (key === 'opacity' && finished && dic.attemptedValue == 0) {
        }
      }}
      exit={{scale: 1, skewX: '0deg', translateX: 0, opacity: 0}}>
      <TouchableWithoutFeedback onPress={() => remove()}>
        <Row>
          {iconName && (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: 'white',
                borderRadius: 5,
                alignSelf: 'center',
                justifyContent: 'center',
                marginRight: theme.spacing.p1,
              }}>
              <Icon
                name={iconName}
                size={theme.spacing.p2}
                color={'#FD4234'}
                style={{
                  alignSelf: 'center',
                }}
              />
            </View>
          )}
          <View style={{width: width * 0.8 - 85}}>
            <Bold>{title}</Bold>
            <P>{body}</P>
          </View>
        </Row>
      </TouchableWithoutFeedback>
    </MotiView>
  );
};

export default Notification;
