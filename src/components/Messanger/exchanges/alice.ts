import moment from 'moment';

const aliceGradient = ['#d23b24', '#ff8800', '#ffc900'];

// NB For some insane fucking reason it cannot find alice.jpg.
// No idea why this is.
import aliceAvatar from 'assets/images/avatars/alice_avator.jpg';
import {makeExchangeFunction} from './utility';

import metroidDread from 'assets/images/messageImages/MetroidDread.jpeg';

const aliceExchange = makeExchangeFunction('Alice', aliceAvatar, aliceGradient);

export const alice = {
  name: 'Alice',
  avatar: aliceAvatar,
  exchanges: [
    {
      timeStamp: moment()
        .subtract(2, 'months')
        .set('hour', 12)
        .set('minute', 22),
    },
    aliceExchange([`And done!`, {image: metroidDread, aspect: 1.7777777777}]),
    {
      exchange: [`Nice, how long did it take you`],
    },
    aliceExchange([`Eight and change`]),
    {
      exchange: [`You going to try hard mode?`],
    },
    aliceExchange([`Fuck no, I got other games to play.`]),
    {
      exchange: [`I'm still at the boss that controls the Lava Machine.`],
    },
    {
      timeStamp: moment()
        .subtract(1, 'months')
        .set('hour', 12)
        .set('minute', 12),
    },
    aliceExchange([`I'm sorry I've been distant. A lot of my mind.`]),
    {
      exchange: [`We talked about that last week. It's okay.`],
    },
    aliceExchange([
      `I know, but you were going through a lot and I just kinda let our friendship slide. `,
    ]),
    {
      exchange: [
        `Nobody can save you but yourself. I have my therapist. My issues shouldn't be dumped on my friends like that. `,
      ],
    },
    aliceExchange([
      `Fuck that. What else are friends for. You still having those night terrors?`,
    ]),
    {
      exchange: [`I don't want to talk about that right now. `],
    },
  ],
};
