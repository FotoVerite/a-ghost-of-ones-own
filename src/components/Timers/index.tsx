import React, {FC, useEffect, useState} from 'react';
import moment from 'moment';
import {ApplicationContext} from 'contexts/app';
import Notification from 'components/Notification';

const Timers: FC = props => {
  const appContext = React.useContext(ApplicationContext);
  const flags = {callToAction: 0};

  const callToAction = () => {
    if (
      flags.callToAction === 0 &&
      moment(appContext.startedSession).add(30, 'seconds') < moment()
    ) {
      appContext.notification.set(
        <Notification
          iconName={'reminder'}
          title={'Apologize'}
          body={'Text Zola and make this right!'}
        />,
      );
      flags.callToAction = 1;
    }
  };

  const [checkAt, setCheckAt] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      setCheckAt(interval => interval + 1);
    }, 30000);
    // Checks go here
    callToAction();
    return () => clearInterval(interval);
  }, [checkAt]);

  return <></>;
};

export default Timers;
