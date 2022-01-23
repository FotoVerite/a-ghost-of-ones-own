import matthewAvatar from '../../../assets/images/avatars/matthew.jpeg';
import matthewKissEmoji from '../../../assets/images/amoji/matthewEmojiKiss.png';

const matthewGradiant = ['#FF336B', '#FF8888', '#FF8888', '#FF336B'];
import moment, {Moment} from 'moment';
import {
  makeExchangeFunction,
  makeTextOnlyExchangeFunction,
  SelfTextOnlyExchangeFunction,
} from './utility';

const matthewExchange = makeTextOnlyExchangeFunction(
  'Matt',
  matthewAvatar,
  matthewGradiant,
);

const matthewFullExchange = makeExchangeFunction(
  'Matt',
  matthewAvatar,
  matthewGradiant,
);

const self = SelfTextOnlyExchangeFunction();
export const matthew = {
  name: 'Matt',
  avatar: matthewAvatar,
  listDisplayText: 'Happy Birthday 🎂',
  exchanges: [
    self(
      ['I had fun last night.'],

      moment('20200220T133000'),
    ),
    self([`I'm glad, I know... things are.`]),
    matthewExchange(["Too much. It's all so much"]),
    self([`I know. How fast did you down that whisky.`]),
    matthewExchange(['Two gulps.']),
    self([`🤣. I don't think it was even that.`]),
    matthewExchange(['I think you pounded a full bottle of wine.']),
    self([`That's not the only thing that got pounded. 😈`]),
    matthewExchange(['Are you asking me to come over again.']),
    self([
      `I mean who knows how long the subways are going to be running. How long any of this is going to be.`,
    ]),
    matthewFullExchange([
      {type: 'text', content: `I know, we're all going to get through this.`},
      {
        type: 'image',
        content: matthewKissEmoji,
        options: {aspect: 1, width: 200},
      },
    ]),
    self([
      `Some nights I'm just staring up at the ceiling not know what I'm going to do.`,
      `Everything falling apart.`,
      `I don't know what what I should do and it just seems.`,
    ]),
    matthewExchange([
      `I am going to tell you what you are going to do. You're going to sue these assholes for all their worth for wrongful termination.`,
    ]),

    matthewExchange(
      [
        `Can you just tell me what's going on. You never talk to me anymore. not really.`,
      ],
      moment('20210519T003000'),
    ),
    self([`I can't deal with this right now Matt`]),
    matthewExchange([
      `Matthew, you know I hate being called something you step on.`,
    ]),

    matthewExchange(
      [`You used to laugh at that joke.`],
      moment('20210519T0050'),
    ),
  ],
};
