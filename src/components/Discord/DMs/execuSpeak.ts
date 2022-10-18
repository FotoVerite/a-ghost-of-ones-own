import execuSpeakAvatar from 'assets/images/discord/avatars/execuspeak.png';
import fotoAvatar from 'assets/images/discord/avatars/fotoveriteNormal.png';

import {
  makeTextOnlyExchangeFunction,
  makeExchangeFunction,
} from '../Exchanges/utility';
import moment from 'moment';

const MenChatDay = '6/23/2022';

const execuSpeakExchange = makeTextOnlyExchangeFunction(
  'ExecuSpeak',
  execuSpeakAvatar,
  MenChatDay,
);

const self = makeTextOnlyExchangeFunction('Fotoverite', fotoAvatar, MenChatDay);

const secondConvoTimeStamp = '6/6/2021';
const thirdConvoTimeStamp = '6/21/2021';

export const execuSpeak = {
  name: 'ExecuSpeak',
  avatar: execuSpeakAvatar,
  exchanges: [
    self([], '2022-06-23'),
    self(['You okay?']),
    execuSpeakExchange(['Why does she always needs to talk over everyone.']),
    self([
      "You know that's how she is. She got that bigger then life bitch energy. It pays the bills.",
    ]),
    execuSpeakExchange(["It's just... it's been a day."]),
    self(['Do you need to talk about it?']),
    execuSpeakExchange(['No, Yes... maybe. Finance boy has been a lot.']),
    self(['I told you, you need to dump that abusive asshole.']),
    execuSpeakExchange([
      "I don't have that many options. I don't know how to crawl myself out of this hole I'm in.",
    ]),
    self(["You don't need to do this."]),
    execuSpeakExchange(["You aren't me. Life has been so easy to you."]),
    self(['Ha.']),
    self(['You okay?']),
    self([], '2022-06-24'),
    self(['@execuSpeak?']),
    execuSpeakExchange([
      "We cool, dude. I just needed to cool off. That movie got to me. The world gets to me. And microdosing with Mushrooms might not be the brightest idea I've had.",
    ]),
    execuSpeakExchange(['Yeah, that might be true.']),
  ],
};
