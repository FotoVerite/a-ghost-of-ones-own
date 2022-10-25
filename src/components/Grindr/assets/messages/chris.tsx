import someoneAvatar from '../avatars/unknown.jpeg';

import {grinderExchangeTextOnly} from 'components/Discord/Exchanges/utility';

const somebodyExchange = grinderExchangeTextOnly('left', '8/30/2022');

const self = grinderExchangeTextOnly('right', '8/30/2022');

export const zola = {
  name: 'Somebody',
  avatar: someoneAvatar,
  exchanges: [
    somebodyExchange(['Heya Handsome'], '8/29/2022'),
    somebodyExchange(['Heya Handsome, WYD.']),
    self(['Nothing, Meet me at midnight.']),
    somebodyExchange(['Sure, Sexy, where at.']),
    self(["Yes, I'm a sexy baby"]),
    somebodyExchange(['Wut?']),
  ],
};
