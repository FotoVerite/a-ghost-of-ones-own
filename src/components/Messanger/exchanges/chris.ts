import moment from 'moment';

const chrisGradiant = ['pink', '#2e2e2e', '#242323'];

import chrisAvatar from 'assets/images/avatars/chris.jpg';
import {
  makeExchangeFunction,
  makeTextOnlyExchangeFunction,
  SelfTextOnlyExchangeFunction,
} from './utility';
import coil from 'components/Notes/notes/images/records/coil.jpeg';
import {
  ConversationType,
  ExchangeType,
  MessagesType,
} from '../context/MessengerContext';

const chrisExchange = makeTextOnlyExchangeFunction(
  'Chris',
  chrisAvatar,
  chrisGradiant,
);

const chrisExchangeFull = makeExchangeFunction(
  'Chris',
  chrisAvatar,
  chrisGradiant,
);

const self = SelfTextOnlyExchangeFunction();

export const chris: ConversationType = {
  name: 'Chris',
  avatar: chrisAvatar,
  exchanges: [
    chrisExchange(
      [`What about Hell Raiser`],
      moment()
        .subtract(8, 'months')
        .add(4, 'days')
        .set('hour', 17)
        .set('minute', 6),
    ),
    self([`That's a good one. I don't think Zola seen it before.`]),

    chrisExchange([`Why do always care so much about Zola?`]),
    self([
      `Cause she's the scardy cat of the group. And it's no fun if nobody screams at the gruesome parts.`,
      `Funny thing about Hell Raiser.`,
    ]),
    {
      messages: [
        {type: 'text', content: [`Funny thing about Hell Raiser.`]},
        {type: 'image', content: coil, options: {aspect: 1}},
      ],
    } as ExchangeType,
    chrisExchange([
      `Here we go. Okay, I'll humor you what does Coil have to do with bloody hell raiser.`,
    ]),
    self([`So Clive Barker actually was friends with Stephen Thrower`]),
    chrisExchange([`Who is.`]),
    self([`One of the members`]),
    chrisExchange([`Like the synth guy or`]),
    self([
      `They didn't work like that, it was all very collabortive.... AND YOU'RE TRYING TO SIDETRACK ME!!!!`,
    ]),
    chrisExchange([`Guilty 😈`]),
    self([
      `So, Stephen Tower was friends with Barker and decided to introduce him to them. He vibed with the sound and contracted them to make the soundtrack for Hell Raiser.`,
    ]),
    chrisExchange([
      `Coil did not do the soundtrack, that was Christopher Young`,
    ]),
    self([
      `Yes, the studio wanted something more commerical. You can find their version online as the Unreleased Themes for Hellraiser`,
    ]),
    chrisExchange([`Interesting`]),
    self([
      `Stephen was also really interested in Body Modification. Had lots of Magazines he showed Barker. Probably had a lot of infulence on how the Cenobites developed visually. `,
    ]),
    chrisExchange([
      `I think you are underestimating the world building he did in the Hell Bound Heart`,
    ]),
    self([`They were friends when he was writing it. This was 1985. `]),
    chrisExchange(
      [`When do you think we'll first hear Zola scream?`],
      moment().subtract(7, 'months').set('hour', 18).set('minute', 15),
    ),
    chrisExchange([`Gah the last week has been grueling`]),
    self([`You're the one who chose to work at Google.`]),
    chrisExchange([`What can I say, I like money`]),
    self([`Was it worth it?`]),

    self([`Was it worth it?`]),

    chrisExchange([`Yes. 💰💰💰`]),
    self([`Okay Faust`]),
    chrisExchange([
      `But I have time tomorrow. Want to come over, watch something.`,
    ]),
    self([`Just watch something? 😈`]),
    chrisExchange([`I mean... I've been thinking about this.`]),
    chrisExchange(
      [`Are you going to be weird about last night?`],
      moment().subtract(5, 'months').set('hour', 15).set('minute', 2),
    ),
    self([
      `Only if you are? I mean it's on me. I know that. I'm the responsible one of the group and here I am still shitfaced 3pm the next day`,
    ]),
    chrisExchange(
      [`You should come with us to the Liberation march.`],
      moment().subtract(2, 'months').set('hour', 12).set('minute', 12),
    ),
    self([`It's not my scene you know that. Never was.`]),
    chrisExchange([`I could use the support you know.`]),
    self([
      `Dude, don't put that on me. And I have been supportive. You know that.`,
    ]),
    chrisExchange([`Have you?`]),
  ],
};
