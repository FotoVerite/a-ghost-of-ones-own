import zolaAvatar from 'assets/images/discord/avatars/zola.png';
import fotoAvatar from 'assets/images/discord/avatars/fotoveriteNormal.png';
import purpleHippo from 'assets/images/discord/pasted/purpleHippo.png';
import skincareSet from 'assets/images/discord/pasted/skincareSet.png';

import {
  makeTextOnlyExchangeFunction,
  makeExchangeFunction,
} from '../Exchanges/utility';
import moment from 'moment';

const zolaExchange = makeTextOnlyExchangeFunction(
  'HaloNails',
  zolaAvatar,
  '6/5/2022',
);

const haloeNailsFull = makeExchangeFunction(
  'HaloNails',
  zolaAvatar,
  '6/5/2022',
);

const self = makeTextOnlyExchangeFunction('Fotoverite', fotoAvatar, '6/5/2022');
const selfFull = makeExchangeFunction('Fotoverite', fotoAvatar, '6/5/2022');

export const haloNailsDms = {
  name: 'HaloNails',
  avatar: zolaAvatar,
  exchanges: [
    haloeNailsFull([
      {
        type: 'text',
        content: 'Did you get that thing I sent ya?',
      },

      {type: 'image', content: purpleHippo, options: {aspect: 1}},
    ]),
    self([
      'Cute, Harvey Birdman reference. What are we back in the early 2000s?',
    ]),
    zolaExchange([
      "Yes, and you're still living in that shitty two bedroom in that closet of a room with that weird man and his cat. What was his name, Porkchop?",
    ]),
    self(['🥓, the cat was Skelator. I miss her.']),
    zolaExchange([
      'But not him, what a fucking asshole. But seriously you get the present.',
    ]),
    self(['Yes, and I have no idea how to use any of this.']),
    zolaExchange([
      "Follow the directions Babe. It's skincare not rocket science.",
    ]),
    selfFull([
      {
        type: 'text',
        content: 'There are ten steps!',
      },

      {type: 'image', content: skincareSet, options: {aspect: 1}},
    ]),
    zolaExchange([
      "I wrote down the order to use them in. And you don't really need to double cleanse but you might like the oil balm more then the gel cleanser and like just try it 🤷. You don't have to use everything.",
    ]),
    self(['This is so much work.']),
    zolaExchange(['Self care is work.']),
    self(['At least your self care pays the bills.']),
    zolaExchange([
      'Moneybags, please with the amount you make between your job and your crypto break. Do not get on me for funding my lifestyle with my amazing personality and pep.',
    ]),
    self(['Never, is the... balm supposed to be so foamy?']),
    zolaExchange(["Yah it's supposed to get off makeup and sunscreen."]),
    self(['It feels weird.']),
    zolaExchange([
      'Welcome to the wonderful world of taking care of yourself.',
    ]),
    self([
      'When I said I needed help with my tinder profile, this is not what I had in mind',
    ]),
    zolaExchange([
      "🙄 🙄 🙄. Boy don't pretend it isn't for Grindr. I'm not mom.",
    ]),
    self([
      "Actually scruff if you need to know. Or both. I don't know what I'm doing",
    ]),
    zolaExchange([
      "You think I do? Anyone. And don't go on again about gay men and their need for abs or all that other bullshit. It's the same for me. And with probably more dix picks.",
    ]),
    self(["I just don't want to do this again."]),
    zolaExchange([
      'But you do, you got dumped, you got ghosted, you need to follow the advice of our sage Tove Lo and get under someone, boy.',
    ]),
  ],
};
