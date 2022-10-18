import haloNailsAvatar from 'assets/images/discord/avatars/zola.png';
import fotoAvatar from 'assets/images/discord/avatars/fotoveriteNormal.png';
import execuspeakAvatar from 'assets/images/discord/avatars/execuspeak.png';
import legoMySoulAvatar from 'assets/images/discord/avatars/legomysoul.png';

import chefKiss from 'assets/images/discord/pasted/chef-kiss.gif';

import {
  makeExchangeFunction,
  makeTextOnlyExchangeFunction,
} from 'components/Discord/Exchanges/utility';

const MenChatDay = '6/23/2023';

const haloNailsExchange = makeTextOnlyExchangeFunction(
  'HaloNails',
  haloNailsAvatar,
  '5/23/2022',
);

const execuExchange = makeTextOnlyExchangeFunction(
  'ExecuSpeak',
  execuspeakAvatar,
  '5/23/2022',
);

const legoMySoulExchange = makeTextOnlyExchangeFunction(
  'legoMySoul',
  legoMySoulAvatar,
  '5/23/2022',
);

const legoMySoulExchangeFull = makeExchangeFunction(
  'legoMySoul',
  legoMySoulAvatar,
  '5/23/2022',
);

const self = makeTextOnlyExchangeFunction('Fotoverite', fotoAvatar, MenChatDay);

export const men = [
  haloNailsExchange(
    [
      "OMG, men. I can't even... I just can't. How does one talk about this film.",
    ],
    MenChatDay,
  ),
  self(
    [
      'I mean we can start with comparing it to his previous works. But you know how I feel about Alex Fucking Gardner',
    ],
    MenChatDay,
  ),
  execuExchange([
    "We all know how you feel about Dues Ex Machina, my dude. You don't need to keep reminding us.",
    MenChatDay,
  ]),
  legoMySoulExchangeFull([
    {
      type: 'text',
      content:
        'I liked Machine, but this was a mess. I mean the denouement was ',
    },

    {type: 'image', content: chefKiss, options: {aspect: 1, width: 200}},
  ]),
  haloNailsExchange(
    [
      'If you like over the top body horror and poorly thought out birthing metaphors. I thought the claw hand/ wound was the one time it actually approached something interesting. Very overwrought twitter wokism circa 2020. Day old stale chronenberg.',
    ],
    MenChatDay,
  ),
  legoMySoulExchange(
    [
      "Isn't Chronenberg going for something totally different with his body horror though? His metaphors are much more... visceral then the dread that Men is trying to give.",
    ],
    MenChatDay,
  ),
  haloNailsExchange(
    [
      "As in, aren't Men awful and self serving and just there existence and need make life worse for women.",
    ],
    MenChatDay,
  ),
  execuExchange(
    [
      "Isn't that a bit reductive? You sound like a youtube video going for clicks.",
    ],
    MenChatDay,
  ),
  haloNailsExchange(
    [
      "No that's the movie. I felt like I was being talked to vai Jezebel or Feministing article for the year 2010. Aren't men creepy. Don't we socialize them to hate women. BLAH BLAH BLAH.",
    ],
    MenChatDay,
  ),
  self(['LOL and I thought my thoughts on Machina was harsh.'], MenChatDay),
  execuExchange(
    [
      "I'm sorry You haven't... I mean the movie really spokes to me about how I've been feeling. I don't know why Men treat you well, but I definitely",
    ],
    MenChatDay,
  ),
  haloNailsExchange(
    [
      'Definetly what? @excuSpeak I got me stalkers from this youtube gig. Men are 🗑️. But also gross women coming after me in ways that I would be happy to break done.',

      "Petty comments, PO box letters, the knocks on my door at 2am. And don't get me started with the swatting incident. WHICH YES BY A WOMEN. GOD DAMN THAT KAREN.",
      "So no, I don't think MEN as a concept are the terrible boogyman Gardner thinks he is. I mean also a male director doing this piss warm feminist take. Macklemore got more haterade from doing same love and yet at least that song had some value to it.",
      'SEND OUT THE TRASH AND GIVE ME MY MONEY BACK.',
    ],
    MenChatDay,
  ),

  legoMySoulExchange(
    ['Did you just use one of your tag lines? Girl... '],
    MenChatDay,
  ),
  haloNailsExchange(['👁👄👁'], MenChatDay),
];
