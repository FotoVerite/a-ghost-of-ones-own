import zolaAvatar from 'assets/images/avatars/zola.jpg';
const zolaGradient = ['#4c669f', '#3b5998', '#192f6a'];
import pantopiticon from 'components/Messanger/exchanges/images/pantopiticon.jpeg';
import moment, {Moment} from 'moment';
import rainLight from 'assets/sounds/notification/rain-light.mp3';
import {
  makeTextOnlyExchangeFunction,
  makeExchangeFunction,
  SelfTextOnlyExchangeFunction,
} from './utility';

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
  exchanges: [
    self(
      [
        'People misunderstanding what the panopticon was about infuriate to me.',
        `"The panopticon’s presence is low-key felt. It was notable how easy it was to go through customs: just a passport and face scan, and the door opened with a soft whir that felt like it was designed to emulate Star Trek. could only guess what data was being traversed that substitutes for human surveillance and a round of questioning."`,
      ],
      moment().subtract(2, 'months').set('hour', 13).set('minute', 17),
    ),
    zolaExchange(['Wha is a panopticon?']),
    self([
      'Do you want the wikipedia link, or do you want me to butcher the explination?',
    ]),
    zolaExchange([
      "I just curled up on the windsill watching the rain. So give me the butcher explination. They're always more interesting",
    ]),
    self([
      'So the panopticon is a thought expirement created by... by... Jeremy Beramy?',
      `That's not right one sec.`,
    ]),
    zolaExchange([`You know it's no fun if you look up the answer.`]),

    self(
      ['Jeremy Bentham!', 'So the concept is...'],
      moment().subtract(2, 'months').set('hour', 13).set('minute', 37),
    ),
    self([
      `Jeremy Bearimy? You doing a good place callback? Also, you totally cheat.`,
    ]),
    {
      messages: [
        {
          type: 'text',
          content:
            'As I was saying, the concept is of a prison in a shape of a multiple pentagons with a tower in the center of each, around a centeral church. ',
        },
        {
          type: 'text',
          content: `In the tower there can be a warden looking in on the prisioners. But from the prisioners point of view there is no way to know if they are being watched or the tower is empty?.`,
        },
        {type: 'image', content: pantopiticon, options: {aspect: 1}},
      ],
    },
    zolaExchange([`Okay, I'm not really getting... It's about control then.`]),
    self([
      `So Bentham's main goal is how do you get a population to behave with limited man power. You can't watch them at all times. You can't punish them for their transgressions but if you build this sauron's eye that you can't actually be sure if it's on or not you will behave. The prisioners will regulate themselves.`,
    ]),
    zolaExchange([
      'So, big brother. 1984 and all that shit? Fashies controlling the population.',
    ]),

    self([
      "Kinda... I mean when we get to the criticism by Foucault, it leans towards that. But Bentham saw this as very helpful. Kinda like a manifestation of Freud's super ego. Though funnily enough Michael Radford created one for film 1984.",
    ]),
    zolaExchange(['Why do you know this?']),
    self(['Liberal Arts Education?']),
    zolaExchange([
      "So I don't get how they're using it incorrectly. Seems like people mostly agree that surveillance is bad. What little I know of Foucault he seems to be against the idea of state controll and everything we are seeing happening.",
    ]),
    self([
      "You misunderstand... It's not that I think the pantopiticon is good. It's just that the idea is you don't know that anyone is watching you with the pantopiticon, and we definetly know they are watching at all times.",
    ]),
    zolaExchange(
      ['Hey...  need a favor'],
      moment()
        .subtract(2, 'months')
        .add(2, 'days')
        .set('h', 13)
        .set('minutes', 27),
    ),
    self(["What's up"]),
    zolaExchange(['Just Call']),

    self(
      ['Hey, Zola, we need to talk.'],
      moment()
        .subtract(1, 'months')
        .add(2, 'days')
        .set('h', 12)
        .set('minutes', 0),
    ),
  ],
};
