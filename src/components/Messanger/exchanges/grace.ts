import graceAvatar from 'components/Messanger/avatars/grace.png';
const graceGradient = ['#D26B6B', '#F93507', '#781B05'];
import moment from 'moment';
import {
  makeTextOnlyExchangeFunction,
  makeExchangeFunction,
  SelfTextOnlyExchangeFunction,
} from './utility';

const startTime = moment('20220622T133000');

const graceExchange = makeTextOnlyExchangeFunction(
  'Grace',
  graceAvatar,
  graceGradient,
  startTime,
);

const GraceFullExchange = makeExchangeFunction(
  'Grace',
  graceAvatar,
  graceGradient,
);

const self = SelfTextOnlyExchangeFunction();

export const grace = {
  name: 'Grace Russo',
  avatar: graceAvatar,
  exchanges: [
    graceExchange(
      [
        "Why is half my life/job convincing people that the red tape the government wants is unneeded. The CIA doesn't need to fips 140, they use fucking amazon. But here I am spending my lunch hour convincing my team that it makes no sense to backport of services.",
      ],
      startTime,
    ),
    self([
      "I mean that's been your life since you sold your soul to the government.",
    ]),
    graceExchange(['You know my soul is worth way more then they pay me.']),
    self(['I know gurl. 💅']),
    self(
      ["I've been feeling kinda aimless these days"],
      moment(startTime).add(20, 'minutes'),
    ),
    graceExchange(['What do you mean?']),
    self(["I'm turning 40 Grace."]),
    graceExchange(['When?']),
    self(["Nov, how many times do I need to remind you that I'm a ♐️"]),
    graceExchange(["I'm a atheist"]),
    self(['Good for you.']),
    graceExchange(['Astrology has become a gay religion.']),
    self(["I can't even.", '🫠🫠🫠']),
    graceExchange(['Why are you feeling this way?']),
    self([
      'I don\'t know, I really don\'t. I just wake up sometimes and think. "Am I there? Is this what I really wanted." ',
    ]),
    graceExchange([
      "We just have less milestones then we used to. If we wanted kids we would be using them to measure our lives. But we don't, so we need other rulers, other goals. Mine is to find my way to a nice beach and get day drunk and a tan by the end of this month.",
    ]),
    self(['So much sand in my ass. I never liked the 🏖︎.']),
    graceExchange(["I wasn't inviting you. 🤣"]),
    self([
      "I just... I don't know what I want. I never did. And I thought I wanted Matt, maybe I still do. I'm all twisted. I've been twisted for months and I just... I look at my screen and don't even understand the equations I write half the time. I zone out, do my job and  remember nothing of consequence.",
    ]),
    graceExchange([
      "Maybe you're just just burnt out. When did you last take a day off.",
    ]),
    self(['Yesterday. I treat myself well.']),
    self(["I can't sleep these days."], moment(startTime).add(5, 'hours')),
  ],
};
