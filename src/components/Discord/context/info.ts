import zolaAvatar from 'assets/images/discord/avatars/zola.png';
import fotoAvatar from 'assets/images/discord/avatars/fotoveriteNormal.png';
import execuSpeakAvatar from 'assets/images/discord/avatars/execuspeak.png';
import mortaDripAvatar from 'assets/images/discord/avatars/mortaDrip.png';

export const userInformation: {[index: string]: {}} = {
  Zola: {
    name: 'Zola',
    about: 'Blah blah blah',
    avatar: zolaAvatar,
  },
  Fotoverite: {
    name: 'Fotoverite',
    about:
      'Tripping the life fantastic. Does anyone actually read these things',
    avatar: fotoAvatar,
  },
  HaloNails: {
    name: 'HaloNails',
    avatar: zolaAvatar,
    about:
      "Helloooooo everybody! My names Zola Castro, former bored microsoft product manager turned `beauty guru`. I'm really just here to drink too much coffee and talk about makeup till it stops earning me coin.",
  },
  ExecuSpeak: {
    name: 'ExecuSpeak',
    avatar: execuSpeakAvatar,
    about: `A Neurodivergent girl living in a typical capitalistic world.\n\nSend me 💎 🌹 💰 💊. X0X0X0 outie 5000.`,
  },
  MortaDrip: {
    name: 'MortaDrip',
    avatar: mortaDripAvatar,
    about: 'Die young and leave a corpse with drip.',
  },
};
