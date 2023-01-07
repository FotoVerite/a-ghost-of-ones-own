import React, {FC, useContext} from 'react';
import {Dimensions, View} from 'react-native';

import {ApplicationContext} from 'contexts/app';
import {AnimatePresence} from 'moti';
import Notification from '.';

const NotificationContainer: FC = () => {
  const {width, height} = Dimensions.get('window');
  const context = useContext(ApplicationContext);
  const notificationArray = [...context.notifications.state];
  return (
    <View
      style={{
        position: 'absolute',
        height: notificationArray.length * 50,
        width: '80%',
        zIndex: notificationArray.length === 0 ? 0 : 5,
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
