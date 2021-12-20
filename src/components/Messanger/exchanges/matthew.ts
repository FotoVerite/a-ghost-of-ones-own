import matthewAvatar from '../../../assets/images/avatars/matthew.jpeg';
import matthewKissEmoji from '../../../assets/images/amoji/matthewEmojiKiss.png';

const matthewGradiant = ['#FF336B', '#FF8888', '#FF8888', '#FF336B'];
import moment, {Moment} from 'moment';
import {makeExchangeFunction} from './utility';

const matthewExchange = makeExchangeFunction(
  'Matt',
  matthewAvatar,
  matthewGradiant,
);
export const matthew = {
  name: 'Matt',
  avatar: matthewAvatar,
  listDisplayText: 'Happy Birthday 🎂',
  exchanges: [
    {
      timeStamp: moment('2020021T90030'),
    },
    {
      exchange: ['I had fun last night.'],
      glitch: true,
      avatar: matthewAvatar,
      color: matthewGradiant,
    },
    {
      exchange: [`I'm glad, I know... things are.`],
    },
    matthewExchange(["Too much. It's all so much"]),
    {
      exchange: [`I know. How fast did you down that whisky.`],
    },
    matthewExchange(['Two gulps.']),
    {
      exchange: [`🤣. I don't think it was even that.`],
    },
    matthewExchange(['I think you pounded a full bottle of wine.']),
    {
      exchange: [`That's not the only thing that got pounded. 😈`],
    },
    matthewExchange(['Are you asking me to come over again.']),
    {
      exchange: [
        `I mean who knows how long the subways are going to be running. How long any of this is going to be.`,
      ],
    },
    matthewExchange([
      `I know, we're all going to get through this.`,
      {image: matthewKissEmoji, aspect: 1, width: 200},
    ]),
    {
      timeStamp: moment('20200419T0030'),
    },
    {
      exchange: [
        `Some nights I'm just staring up at the ceiling not know what I'm going to do.`,
        `Everything falling apart.`,
        `I don't know what what I should do and it just seems.`,
      ],
    },
    matthewExchange([
      `I am going to tell you what you are going to do. You're going to sue these assholes for all their worth for wrongful termination.`,
    ]),
    {
      timeStamp: moment('20210519T0030'),
    },
    matthewExchange([
      `Can you just tell me what's going on. You never talk to me anymore. not really.`,
    ]),
    {
      exchange: [`I can't deal with this right now Matt`],
    },
    matthewExchange([
      `Matthew, you know I hate being called something you step on.`,
    ]),
    {
      timeStamp: moment('20210519T0050'),
    },
    matthewExchange([`You used to laugh at that joke.`]),
  ],
};
