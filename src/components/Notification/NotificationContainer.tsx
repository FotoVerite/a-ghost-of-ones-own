import React, {FC, useContext} from 'react';
import {Dimensions, View} from 'react-native';

import {ApplicationContext} from 'contexts/app';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AnimatePresence} from 'moti';
import Notification from '.';

const NotificationContainer: FC = () => {
  const {width, height} = Dimensions.get('window');
  const insets = useSafeAreaInsets();
  const context = useContext(ApplicationContext);
  const notificationArray = [...context.notifications.state];
  return (
    <View
      style={{
        position: 'absolute',
        height: notificationArray.length * 50,
        width: '80%',
        zIndex: 5,
        alignSelf: 'center',
      }}>
      <AnimatePresence>
        {notificationArray.reverse().map(([key, attributes], index) => (
          <Notification {...attributes} index={index} keyId={key} />
        ))}
      </AnimatePresence>
    </View>
  );
};

export default NotificationContainer;
