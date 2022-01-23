import moment from 'moment';

const aliceGradient = ['#d23b24', '#ff8800', '#ffc900'];

// NB For some insane fucking reason it cannot find alice.jpg.
// No idea why this is.
import aliceAvatar from 'assets/images/avatars/alice_avator.jpg';
import {
  makeExchangeFunction,
  makeTextOnlyExchangeFunction,
  SelfTextOnlyExchangeFunction,
} from './utility';

import metroidDread from 'assets/images/messageImages/MetroidDread.jpeg';

const aliceExchange = makeTextOnlyExchangeFunction(
  'Alice',
  aliceAvatar,
  aliceGradient,
);

const aliceFullExchange = makeExchangeFunction(
  'Alice',
  aliceAvatar,
  aliceGradient,
);

const self = SelfTextOnlyExchangeFunction();

export const alice = {
  name: 'Alice',
  avatar: aliceAvatar,
  exchanges: [
    aliceFullExchange(
      [
        {type: 'text', content: `And done!`},
        {type: 'image', content: metroidDread, options: {aspect: 1.7777777777}},
      ],
      moment().subtract(2, 'months').set('hour', 12).set('minute', 22),
    ),
    self([`Nice, how long did it take you`]),
    aliceExchange([`Eight and change`]),
    self([`You going to try hard mode?`]),
    aliceExchange([`Fuck no, I got other games to play.`]),
    self([`I'm still at the boss that controls the Lava Machine.`]),
    aliceExchange(
      [`I'm sorry I've been distant. A lot of my mind.`],
      moment().subtract(1, 'months').set('hour', 12).set('minute', 12),
    ),
    self([`We talked about that last week. It's okay.`]),
    aliceExchange([
      `I know, but you were going through a lot and I just kinda let our friendship slide. `,
    ]),
    self([
      `Nobody can save you but yourself. I have my therapist. My issues shouldn't be dumped on my friends like that. `,
    ]),
    aliceExchange([
      `Fuck that. What else are friends for. You still having those night terrors?`,
    ]),
    self([`I don't want to talk about that right now. `]),
  ],
};
