import chrisAvatar from 'assets/images/avatars/chris.jpg';
import {makeTextOnlyExchangeFunction} from 'components/Discord/Exchanges/utility';
const chrisExchange = makeTextOnlyExchangeFunction(
  'Zola',
  chrisAvatar,
  '6/5/2022',
);

const self = makeTextOnlyExchangeFunction(
  'Fotoverite',
  chrisAvatar,
  '6/5/2022',
);

export const mmoGrinders = {
  name: 'mmo-grinders',
  avatar: chrisAvatar,
  messages: [
    self([
      'People misunderstanding what the panopticon was about infuriate to me.',
      `"The panopticon’s presence is low-key felt. It was notable how easy it was to go through customs: just a passport and face scan, and the door opened with a soft whir that felt like it was designed to emulate Star Trek. could only guess what data was being traversed that substitutes for human surveillance and a round of questioning."`,
    ]),
    chrisExchange(['Wha is a panopticon?']),
    self([
      'Do you want the wikipedia link, or do you want me to butcher the explination?',
    ]),
    chrisExchange([
      "I just curled up on the windsill watching the rain. So give me the butcher explination. They're always more interesting",
    ]),
    self([
      'So the panopticon is a thought expirement created by... by... Jeremy Beramy?',
      `That's not right one sec.`,
    ]),
    chrisExchange([`You know it's no fun if you look up the answer.`]),

    self(['Jeremy Bentham!', 'So the concept is...']),
    self([
      `Jeremy Bearimy? You doing a good place callback? Also, you totally cheat.`,
    ]),
    chrisExchange([`Okay, I'm not really getting... It's about control then.`]),
    self([
      `So Bentham's main goal is how do you get a population to behave with limited man power. You can't watch them at all times. You can't punish them for their transgressions but if you build this sauron's eye that you can't actually be sure if it's on or not you will behave. The prisioners will regulate themselves.`,
    ]),
    chrisExchange([
      'So, big brother. 1984 and all that shit? Fashies controlling the population.',
    ]),

    self([
      "Kinda... I mean when we get to the criticism by Foucault, it leans towards that. But Bentham saw this as very helpful. Kinda like a manifestation of Freud's super ego. Though funnily enough Michael Radford created one for film 1984.",
    ]),
    chrisExchange(['Why do you know this?']),
    self(['Liberal Arts Education?']),
    chrisExchange([
      "So I don't get how they're using it incorrectly. Seems like people mostly agree that surveillance is bad. What little I know of Foucault he seems to be against the idea of state controll and everything we are seeing happening.",
    ]),
    self([
      "You misunderstand... It's not that I think the pantopiticon is good. It's just that the idea is you don't know that anyone is watching you with the pantopiticon, and we definetly know they are watching at all times.",
    ]),
    chrisExchange(['Hey...  need a favor']),
    self(["What's up"]),
    chrisExchange(['Just Call']),
  ],
};
