import unkownAvatar from '../../../assets/images/avatars/unkown.jpeg';
const defaultGradiant = ['#363636', '#2e2e2e', '#242323'];
import moment, {Moment} from 'moment';
import faker from 'faker';
import CRC32 from 'crc-32';

const earliestTime = moment().subtract(4, 'months');

const lastDelivery = `FedEx: fedex.com/t/${CRC32.str(
  faker.company.companyName(),
)}/en_us HI, your package from ${faker.company.companyName()}  is now out for delivery today ${earliestTime.format(
  'MM/DD',
)} by 8:00. Reply HELP for help. STOP to cancel`;
export const fedex = {
  name: '46339',
  avatar: unkownAvatar,
  listDisplayText: lastDelivery,
  exchanges: [
    {
      timeStamp: earliestTime.set('hour', 14).set('minute', 25),
    },
    {
      exchange: [lastDelivery],
      glitch: true,
      avatar: unkownAvatar,
      color: defaultGradiant,
    },
  ],
};
