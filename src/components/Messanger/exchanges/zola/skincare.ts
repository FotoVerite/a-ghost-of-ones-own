import zolaAvatar from 'assets/images/avatars/zola.jpg';
const zolaGradient = ['#4c669f', '#3b5998', '#192f6a'];
import moment from 'moment';
import {
  makeTextOnlyExchangeFunction,
  SelfTextOnlyExchangeFunction,
} from '../utility';

const zolaExchange = makeTextOnlyExchangeFunction(
  'Zola',
  zolaAvatar,
  zolaGradient,
);

const self = SelfTextOnlyExchangeFunction();

export const skincare = [
  zolaExchange(
    [
      "Well you know me, enthusiastic to a fault. And you know I'm just dying to get some eye shadow on those deep-set eyes of yours.",
    ],
    moment('20200120T133000'),
  ),
  self([
    'Deep-set, Thanks. 🙃',
    "And no makeup, you know I'm not that faggy right. I wouldn't know a makeup brush from a hair brush. I just need a bit of help with my skin. Matt remarked about it",
  ]),
  zolaExchange([
    "With how you wear your hair I don't doubt that. And you Matt thinks you very cute you're overreacting",
  ]),
  self(["I know I'm cute. God damn spend enough time at the gym."], undefined, {
    icon: {name: 'heart', color: '#f487d3'},
  }),
  zolaExchange(
    [
      `Well your confidence is intact. And the gym is no place to train one's skin.`,
    ],
    undefined,
    {icon: {name: 'thumbs-down', color: '#c22036'}},
  ),
  self(['🙃', '💁‍♀️', 'Are you done.']),
  zolaExchange([
    `No, I've been waiting for years for you to finally take care of yourself. I've think I've gotten a million subscribers while waiting for you to even listen to me to wear sunscreen.`,
  ]),
  self(["I know, I know, you're best friend is your sunscreen"]),
  zolaExchange([`It's SPF is your BFF. Do you even watch my videos?`]),
  self(['You post one every day girl.']),
  zolaExchange([`I know, I'm a slave to the algorithm.`]),
];
