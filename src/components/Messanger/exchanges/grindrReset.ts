import unkownAvatar from '../../../assets/images/avatars/unkown.jpeg';
const defaultGradiant = ['#363636', '#2e2e2e', '#242323'];
import moment from 'moment';

export const grindrReset = {
  name: '+ 1 (607) 391-9585',
  avatar: unkownAvatar,
  listDisplayText: 'Your Grindr reset code is 547243.',
  exchanges: [
    {
      timeStamp: moment()
        .subtract(3, 'months')
        .set('hour', 14)
        .set('minute', 25),
    },
    {
      exchange: ['Your Grindr reset code is 547243.'],
      avatar: unkownAvatar,
      color: defaultGradiant,
    },
  ],
};
