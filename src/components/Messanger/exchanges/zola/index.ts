import zolaAvatar from 'assets/images/avatars/zola.jpg';
const zolaGradient = ['#4c669f', '#3b5998', '#192f6a'];
import pantopiticon from 'components/Messanger/exchanges/images/pantopiticon.jpeg';
import {panopticonExchange} from './panopticon';
import {skincare} from './skincare';

import moment, {Moment} from 'moment';
import rainLight from 'assets/sounds/notification/rain-light.mp3';
import {
  makeTextOnlyExchangeFunction,
  makeExchangeFunction,
  SelfTextOnlyExchangeFunction,
} from '../utility';

const zolaExchange = makeTextOnlyExchangeFunction(
  'Zola',
  zolaAvatar,
  zolaGradient,
);

const zolaFullExchange = makeExchangeFunction(
  'Alice',
  zolaAvatar,
  zolaGradient,
);

const self = SelfTextOnlyExchangeFunction();

export const zola = {
  name: 'zola',
  avatar: zolaAvatar,
  exchanges: [skincare, panopticonExchange].flat(),
};
