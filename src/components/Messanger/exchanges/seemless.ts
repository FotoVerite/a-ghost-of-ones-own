import unkownAvatar from '../../../assets/images/avatars/unkown.jpeg';
const defaultGradiant = ['#363636', '#2e2e2e', '#242323'];
import moment, {Moment} from 'moment';
import faker from 'faker';

const seemlessOrders = {
  name: '30368',
  avatar: unkownAvatar,
  exchanges: [
    {
      timeStamp: moment().subtract(1, 'year').set('hour', 14).set('minute', 25),
    },
    {
      exchange: [
        'Your Seamless order will be ready for pickup between 7:00 PM and 7:10 at BLAH BLAH BLAH',
      ],
      avatar: unkownAvatar,
      color: defaultGradiant,
    },
    {
      timeStamp: moment().subtract(1, 'year').set('hour', 15).set('minute', 25),
    },
    {
      exchange: ['Your order is ready for pickup.'],
      avatar: unkownAvatar,
      color: defaultGradiant,
    },
  ],
};

const createPickup = (
  startTime: Moment,
  pickupTime: Moment,
  between: number,
) => {
  return [
    {
      timeStamp: startTime,
    },
    {
      exchange: [
        `Your Seamless order will be ready for pickup between ${pickupTime.format(
          'hh:mm a',
        )} and ${moment(pickupTime)
          .add(between, 'minutes')
          .format(
            'hh:mm a',
          )} at ${faker.company.companyName()}, ${faker.address.streetAddress()}`,
      ],
      avatar: unkownAvatar,
      color: defaultGradiant,
    },
    {
      timeStamp: pickupTime.add(Math.floor(Math.random() * 45), 'minutes'),
    },
    {
      exchange: ['Your order is ready for pickup.'],
      avatar: unkownAvatar,
      color: defaultGradiant,
    },
  ];
};

const createDelivery = (
  startTime: Moment,
  deliveryTime: Moment,
  between: number,
) => {
  return [
    {
      timeStamp: startTime,
    },
    {
      exchange: [
        `${faker.company.companyName()} is preparing your order, to be delivered between ${deliveryTime.format(
          'hh:mm a',
        )} and ${moment(deliveryTime)
          .add(between, 'minutes')
          .format('hh:mm a')}`,
      ],
      avatar: unkownAvatar,
      color: defaultGradiant,
    },
    {
      timeStamp: moment(deliveryTime).add(
        Math.floor(Math.random() * 45),
        'minutes',
      ),
    },
    {
      exchange: ['Your order is on the way.'],
      avatar: unkownAvatar,
      color: defaultGradiant,
    },
  ];
};

seemlessOrders.exchanges.push.apply(
  seemlessOrders.exchanges,
  createPickup(
    moment().subtract(1, 'year').set('hour', 17),
    moment().subtract(1, 'year').set('hour', 17).add(2, 'hours'),
    15,
  ),
);

seemlessOrders.exchanges.push.apply(
  seemlessOrders.exchanges,
  createPickup(
    moment().subtract(1, 'year').set('hour', 16).add(2, 'days'),
    moment().subtract(1, 'year').set('hour', 17).add(2, 'days').add(2, 'hours'),
    20,
  ),
);

seemlessOrders.exchanges.push.apply(
  seemlessOrders.exchanges,
  createPickup(
    moment().subtract(1, 'year').set('hour', 16).add(1, 'month').add(2, 'days'),
    moment()
      .subtract(1, 'year')
      .set('hour', 17)
      .add(1, 'month')
      .add(2, 'days')
      .add(2, 'hours'),
    20,
  ),
);

seemlessOrders.exchanges.push.apply(
  seemlessOrders.exchanges,
  createPickup(
    moment().subtract(1, 'year').set('hour', 18).add(1, 'month').add(5, 'days'),
    moment()
      .subtract(1, 'year')
      .set('hour', 18)
      .add(1, 'month')
      .add(5, 'days')
      .add(45, 'minutes'),
    20,
  ),
);

seemlessOrders.exchanges.push.apply(
  seemlessOrders.exchanges,
  createDelivery(
    moment()
      .subtract(1, 'year')
      .set('hour', 18)
      .add(1, 'month')
      .add(25, 'days'),
    moment()
      .subtract(1, 'year')
      .set('hour', 18)
      .add(1, 'month')
      .add(25, 'days')
      .add(45, 'minutes'),
    20,
  ),
);

export default seemlessOrders;
