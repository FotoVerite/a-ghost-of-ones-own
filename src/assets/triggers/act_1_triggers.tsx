import React from 'react';
import Notification, {
  NotificationProps,
  NotificationTriggerProps,
} from 'components/Notification';
import {TriggerMap, TriggerType} from 'contexts/app';

const SECONDS = 1000;
const MINUTES = SECONDS * 60;

const notificationTriggerFactory = (
  id: string,
  time: number,
  attributes: NotificationTriggerProps,
): [string, TriggerType] => {
  return [
    id,
    {
      type: 'notification',
      time: time,
      attributes: attributes,
    },
  ];
};

const actOneTriggers: TriggerMap = new Map([
  // notificationTriggerFactory('call-to-action', SECONDS * 5, {
  //   iconName: 'reminder',
  //   title: 'Apologize',
  //   body: 'Text Zola and make this right!',
  //   key: 'appologize',
  // }),
  // notificationTriggerFactory('call-to-action-test', SECONDS * 10, {
  //   iconName: 'reminder',
  //   title: 'Another',
  //   body: 'Another',
  //   key: 'another',
  // }),
]);

export default actOneTriggers;
