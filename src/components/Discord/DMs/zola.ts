import zolaAvatar from 'assets/images/discord/avatars/zola.png';
import fotoAvatar from 'assets/images/discord/avatars/fotoveriteNormal.png';

import {routine} from './haloNails/routine';
import {sunscreen} from './haloNails/sunscreen';

export const haloNailsDms = {
  name: 'HaloNails',
  avatar: zolaAvatar,
  exchanges: [sunscreen, routine].flat(),
};
