import moment from 'moment';

import donnieDarko from 'assets/images/avatars/donnie-darko.jpg';
const zolaGradient = ['#fc03d3', '#752368', '#000000'];
const chrisGradiant = ['pink', '#2e2e2e', '#242323'];
const aliceGradient = ['#d23b24', '#ff8800', '#ffc900'];

// NB For some insane fucking reason it cannot find alice.jpg.
// No idea why this is.

import zola from 'assets/images/avatars/zola.jpg';
import chris from 'assets/images/avatars/chris.jpg';
import aliceAvatar from 'assets/images/avatars/alice_avator.jpg';
import {
  makeExchangeFunction,
  makeTextOnlyExchangeFunction,
  SelfTextOnlyExchangeFunction,
} from './utility';

const zolaExchange = makeTextOnlyExchangeFunction('Zola', zola, zolaGradient);
const chrisExchange = makeTextOnlyExchangeFunction(
  'Chris',
  chris,
  chrisGradiant,
);
const aliceExchange = makeTextOnlyExchangeFunction(
  'Alice',
  aliceAvatar,
  aliceGradient,
);

const self = SelfTextOnlyExchangeFunction();

export const movieNight = {
  name: '🎥 🌌',
  avatar: donnieDarko,
  listDisplayText: 'Every Nightmare you forgotten.',
  options: {multi: true},
  exchanges: [
    aliceExchange(
      [`Can't make it this time.`],
      moment().subtract(6, 'months').set('hour', 20).set('minute', 0),
    ),
    self([`I wish you could.`]),
    aliceExchange([`I know.`]),
    zolaExchange([
      `I miss you girl. You at least have time for a wine hang soonish?`,
    ]),
    aliceExchange([`Hopefully. Everything has me feeling a bit ground down.`]),
    chrisExchange([`O, the new Ben Whetly movie is streaming.`]),
    zolaExchange([`In the Earth, looks a bit like an ecological cult movie.`]),
    self([
      `There's only seven actors on IMDB. It was shot at the hight of the Pandemic. I really doubt they could do a good cult movie`,
    ]),
    chrisExchange([`You don't need that many people for a cult. `]),
    self(
      [`I need something old school.`],
      moment().subtract(5, 'months').set('hour', 20).set('minute', 0),
    ),
    aliceExchange([`Can't make it this time.`]),
    zolaExchange([`I can't either`]),
    chrisExchange([`I'm still in.`]),
    self([`Going to be just the two of us then.`]),
    chrisExchange([`Good, only you could deal with Beyond the Black Rainbow.`]),
    self([`...Maybe`]),

    zolaExchange(
      [`It's time toooo movie night!`],
      moment().subtract(4, 'months').set('hour', 20).set('minute', 27),
    ),
    chrisExchange([
      `Is this where we draw a smily face on or hands and do a group huddle before we are sent to the shadow zone.`,
    ]),
    zolaExchange([`It's a symbol of friendship.`]),
    self([`Weeb`]),
    zolaExchange([`Seriously, I'm bored and climbing the walls.`]),

    chrisExchange([`Sounds like a normal Saturday night for you.`]),
    zolaExchange([
      `No, normally I have more 🍷. And witty repitore to keep me amused`,
    ]),

    self([
      `Sorry, work has kept me busy gurl.`,
      `That and setting up the new office.`,
    ]),
    zolaExchange([
      `You need to send photos of that soon. I'm pretty sure you haven't event started to decorate it properly.`,
    ]),
    self([`At least it's cable managed.`]),
    chrisExchange([`I want to see a new horror film.`]),

    zolaExchange([
      `It's always horror with you. We've done six of them in a row.`,
    ]),
    chrisExchange([`We have not!`]),
    zolaExchange([
      `In the Earth.`,
      `A Field in England.`,
      `Susperia Both Versions`,
      `A Dark Song`,
    ]),
    chrisExchange([`I count only five.`]),
    zolaExchange([`The Tenet`]),
    chrisExchange([`Point`]),
    aliceExchange([`I actually might be able to join this time.`]),
    chrisExchange([`Clair letting you out for the night?`]),
    aliceExchange([`She ain't my keeper`]),
    chrisExchange([
      `Is that why you've only made it twice in the last six months`,
    ]),
    aliceExchange([`I've been busy`]),
    chrisExchange([`With Clair.`]),
    self([`Chris lay the fuck off.`]),
    chrisExchange([`I'm just saying the obvious. 💁‍♀️`]),
    self([`Why did I ever show you that emoji.`]),
    zolaExchange([`Zoolander?`]),
  ],
};
