import zolaAvatar from 'assets/images/discord/avatars/zola.png';
import fotoAvatar from 'assets/images/discord/avatars/fotoveriteNormal.png';
import sureJan from 'assets/images/discord/pasted/marcia-sure-jan.gif';

import {
  makeExchangeFunction,
  makeTextOnlyExchangeFunction,
} from 'components/Discord/Exchanges/utility';

const haloNailsFull = makeExchangeFunction('HaloNails', zolaAvatar, '6/3/2022');

const haloNails = makeTextOnlyExchangeFunction(
  'HaloNails',
  zolaAvatar,
  '6/3/2022',
);

const self = makeTextOnlyExchangeFunction('Fotoverite', fotoAvatar, '6/3/2022');
const selfFull = makeExchangeFunction('Fotoverite', fotoAvatar, '6/3/2022');

export const sunscreen = [
  haloNails(['..., I need another Video Idea.']),
  self(['What was your last one?']),
  haloNails([
    "Skin Cycling, I needed something, had a low energy day and threw it together on too much coffee. I mean anyone who follows me would know not an amazing regime unless your super sensitive. But a girl's gotta eat",
  ]),
  self(['☕ 💰💰💰']),
  haloNails([
    "My only idea at the moment just makes me angry, and I know it's not going to reach a single person that it needs to?",
  ]),
  self(['Getting botox before 40 to preempt smile lines? 💅']),
  haloNails([
    "You joke but that's a good idea. But know people not getting procedures doesn't make me angry. C'mon I'm vain not judgemental",
  ]),
  selfFull([{type: 'image', content: sureJan, options: {aspect: 1}}]),

  haloNails([
    'Okaaaay, not that judgey. I just have good values. But I actually want to yell at the people saying sunscreen is toxic.',
  ]),
  self([
    'You mean the whole entire reef safe thing about... what is it bleaching. Coral?',
  ]),
  haloNails([
    "I mean that's also bullshit but no, that's not evil. The people saying sunscreen is worse then UVA are the problem.",
  ]),
  self(["Wut? I don't... How is sunscreen worse then sunburns?"]),
  haloNails([
    "Because they made up chemical sunscreen is toxic to you, it will poison you and it's better to not use anything or at best zinc sunscreen cause natural even though it has it's own issues and some are against even organic sunscreen because they just hate good skin and not being sunburnt.",
  ]),
  self(["That doesn't make any sense."]),
  haloNails([
    "What does make sense on the internet, I've done skincare reviews on olympic swimmers in australia who don't use sunscreen! And he swims outside. He was sunburnt everywhere but his google lines.",
  ]),
  self(['Nooooo. The googles do nothing.']),
  haloNails([
    "It actually probably causing a lot of painful deaths. Around 70% of australians don't even wear sunscreen daily in summer. IN SUMMER!",
  ]),
  self(['I would wonder why you know this, but it is your job.']),
];
