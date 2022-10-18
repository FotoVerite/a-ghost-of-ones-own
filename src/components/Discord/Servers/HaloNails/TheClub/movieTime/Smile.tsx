import haloNailsAvatar from 'assets/images/discord/avatars/zola.png';
import fotoAvatar from 'assets/images/discord/avatars/fotoveriteNormal.png';
import execuspeakAvatar from 'assets/images/discord/avatars/execuspeak.png';
import legoMySoulAvatar from 'assets/images/discord/avatars/legomysoul.png';
import mortaDripAvatar from 'assets/images/discord/avatars/mortaDrip.png';

import chefKiss from 'assets/images/discord/pasted/chef-kiss.gif';

import {
  makeExchangeFunction,
  makeTextOnlyExchangeFunction,
} from 'components/Discord/Exchanges/utility';

const SmileChatDay = '10/04/2022';

const haloNailsExchange = makeTextOnlyExchangeFunction(
  'HaloNails',
  haloNailsAvatar,
  SmileChatDay,
);

const execuExchange = makeTextOnlyExchangeFunction(
  'ExecuSpeak',
  execuspeakAvatar,
  SmileChatDay,
);

const legoMySoulExchange = makeTextOnlyExchangeFunction(
  'legoMySoul',
  legoMySoulAvatar,
  SmileChatDay,
);

const mortaDripExchange = makeTextOnlyExchangeFunction(
  'MortaDrip',
  mortaDripAvatar,
  SmileChatDay,
);

const legoMySoulExchangeFull = makeExchangeFunction(
  'legoMySoul',
  legoMySoulAvatar,
  SmileChatDay,
);

const self = makeTextOnlyExchangeFunction(
  'Fotoverite',
  fotoAvatar,
  SmileChatDay,
);

export const smile = [
  self([], '2022-10-04'),
  self(
    ["Well, that was a movie, I don't know if it felt like a movie movie."],
    SmileChatDay,
  ),
  execuExchange(
    ["The sound design reminded me a lot of 'Sinister' for some reason."],
    SmileChatDay,
  ),
  self(
    [
      'I think there was a lot of low drum and base frequencies. Let me dig up an article',
    ],
    SmileChatDay,
  ),
  mortaDripExchange([
    'It was a major ripoff of the ring and somehow Barbarian even if they were released in the same fucking week. The monster design!',
  ]),
  haloNailsExchange(
    [
      "I liked it. @mortaDrip. You go too hard on genre horror. It's not trying to be deep. It's trying to scare.",
    ],
    SmileChatDay,
  ),
  mortaDripExchange([
    'You just love anything that allows you to scream in a theater.',
    SmileChatDay,
  ]),
];
