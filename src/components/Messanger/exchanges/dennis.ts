import moment from 'moment';

const dennisGradiant = ['#9619F1', '#5A446A', '#242323'];

import dennisAvatar from 'assets/images/avatars/chris.jpg';
import {makeExchangeFunction} from './utility';
import coil from 'components/Notes/notes/images/records/coil.jpeg';

const dennisExchange = makeExchangeFunction(
  'Dennis',
  dennisAvatar,
  dennisGradiant,
);

export const dennis = {
  name: 'Dennis',
  avatar: dennisAvatar,
  exchanges: [
    {
      timeStamp: moment('20200420T133000'),
    },
    {
      exchange: [`Happy Birthday Dude, been a while.`],
    },
    dennisExchange([`Thanks`]),
    {
      exchange: [
        `I miss you being around. Not the same without you in the city.`,
      ],
    },
    dennisExchange([
      `I'm going to visiting. I have couches I can crash on. But it's RV life for me for the moment. NY and even SF are sufficating. I wasn't feeling like myself anymore.`,
    ]),
    {
      exchange: [`I wanted to appolgize for what I said last time.`],
    },
    dennisExchange([`About how I'm a slut`]),
    {
      exchange: [
        `You are a slut, but I dont think that's why you still pissed off. I called you selfish.`,
      ],
    },
    dennisExchange([`Maybe I am`]),
    {
      exchange: [
        `It was easier to feel that way when I was with someone, before the breakout.`,
      ],
    },
    dennisExchange([`And now you're remember how dating actually is.`]),
    {
      exchange: [`It's way worse. Be honest.`],
    },
    dennisExchange([`Are you actually dating?`]),
    {
      exchange: [
        `Depends on the def.. No, I'm just fucking around and being dumb.`,
      ],
    },
    dennisExchange([`Dumb like me?`]),
    {
      exchange: [
        `No, but I get it at least. These boys are exhausting. But you still are too risky. PREP doesn't solve everything. There are other things out there besides HIV.`,
      ],
    },
    dennisExchange([`And there are drugs to cure them`]),
    {
      exchange: [`Not always, some of these STDs are getting very resistant.`],
    },
    dennisExchange([`My body my choice boo.`]),
    {
      exchange: [`Yeah`],
    },
    dennisExchange([`How many notches did you add in the last month`]),
    {
      exchange: [`Five`],
    },
    dennisExchange([`Def not the only slut here anymore.`]),
    {
      timeStamp: moment('20200420T170910'),
    },
    {
      exchange: [`How goes the Van Life?`],
    },
    dennisExchange([
      `Well, parked outside of Pheonix for the moment. Might head back to Cali to do Joshua for a few weeks. `,
    ]),
    {
      exchange: [`Meet any interesting people.`],
    },
    dennisExchange([`Some, not as many as I hoped. How goes the grind life.`]),
  ],
};
