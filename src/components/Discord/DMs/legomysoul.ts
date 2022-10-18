import chrisAvatar from 'assets/images/discord/avatars/legomysoul.png';
import fotoAvatar from 'assets/images/discord/avatars/fotoveriteNormal.png';

import {
  makeTextOnlyExchangeFunction,
  makeExchangeFunction,
} from '../Exchanges/utility';
import moment from 'moment';

const chrisExchange = makeTextOnlyExchangeFunction(
  'LegoMySoul',
  chrisAvatar,
  '6/5/2020',
);

const self = makeTextOnlyExchangeFunction('Fotoverite', fotoAvatar, '6/5/2020');

const secondConvoTimeStamp = '6/6/2021';
const thirdConvoTimeStamp = '6/21/2021';

export const legomysoul = {
  name: 'LegoMySoul',
  avatar: chrisAvatar,
  exchanges: [
    self([], '2021-06-06'),
    chrisExchange([
      "I don't know how much longer I can hang with my raid group man. So much commitment.",
    ]),
    self(['But you love the challenge. You love challenges.']),
    chrisExchange(['Probably why I continue putting up with you 😈']),
    self(['I just love you for your body.']),
    //second conversation
    self([], '2021-06-07'),
    chrisExchange(['Seriously Midsommar is overrated'], secondConvoTimeStamp),
    self(['Is it?'], secondConvoTimeStamp),
    chrisExchange(
      [
        "People can't stand the letdown of the followup so they say how deep and feminist and interesting it all is. It's just a worse horror version of El Topo",
      ],
      secondConvoTimeStamp,
    ),
    self(
      [
        "El Topo, fucking really dude? You're just trying to show off your film creds. What besides the psychedelic ties those two together. Really just throw solaris in there. At least that's actual horror.",
      ],
      secondConvoTimeStamp,
    ),
    chrisExchange(
      [
        'I mean the plot makes as much sense as El Topo. And the visuals are the main draw. And fuck man Solaris. Horror?You sure about that.',
      ],
      secondConvoTimeStamp,
    ),
    self(
      [
        "Aliens/scifi waves recreating lost love. It's a literal Haunted house. Like all ghosts it's memory that the true killer. Grief causing one to disengage with the greater world for some forgotten eden.",
      ],
      secondConvoTimeStamp,
    ),
    chrisExchange(["Was this you're dissertation?"], secondConvoTimeStamp),
    self(['I went to school for finance.'], secondConvoTimeStamp),
    self([], '2021-06-21'),
    chrisExchange(['Sorry I missed your birthday'], thirdConvoTimeStamp),
    self(["It's okay"], thirdConvoTimeStamp),
    chrisExchange(
      ['Still I need to make it up to you.🤠'],
      thirdConvoTimeStamp,
    ),
  ],
};
