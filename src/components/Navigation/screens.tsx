import {Bank} from 'components/Bank';
import Desktop from 'components/Desktop';
import Discord from 'components/Discord';

import {Grindr} from 'components/Grindr';
import Hex from 'components/Hex';
import LiquidSwiper from 'components/LiquidSwiper';
import LockScreen from 'components/LockScreen';
import Messenger from 'components/Messanger/';
import Movies from 'components/Movies';
import NesGamepad from 'components/NesGamepad';
import Notes from 'components/Notes';
import {Phone} from 'components/Phone';
import Photos from 'components/Photos';
import ScratchPad from 'components/ScratchPad';
import Settings from 'components/Settings';
import Triggers from 'components/Triggers';
import OsLoading from 'OsLoading';

export const SCREENS = {
  Bank: {
    title: '',
    component: Bank,
  },
  Desktop: {
    title: '',
    component: Desktop,
  },
  Hex: {
    title: 'HexGame',
    component: Hex,
  },

  Discord: {
    title: '',
    component: Discord,
  },
  LockScreen: {
    title: '',
    component: LockScreen,
  },
  Phone: {
    title: '',
    component: Phone,
  },
  Gamepad: {
    title: 'GamePad',
    component: NesGamepad,
  },
  Grindr: {
    title: '',
    component: Grindr,
  },
  LiquidSwiper: {
    title: '',
    component: LiquidSwiper,
  },
  OsLoading: {
    title: '',
    component: OsLoading,
  },
  Messages: {
    title: '',
    component: Messenger,
  },
  Movies: {
    title: 'Movies',
    component: Movies,
  },
  Notes: {
    title: 'Notes',
    component: Notes,
  },
  PhotosApp: {
    title: 'Photos',
    component: Photos,
  },
  Settings: {
    title: 'Settings',
    component: Settings,
  },
  Scruff: {
    title: '',
    component: Desktop,
  },
  ScratchPad: {
    title: 'Scratch Pad',
    component: ScratchPad,
  },
  Triggers: {
    title: 'Triggers',
    component: Triggers,
  },
};

export type screenParams = {
  Album: {
    id: number;
  };
  Bank: undefined;
  Desktop: undefined;
  Discord: undefined;
  Hex: undefined;
  Gamepad: undefined;
  Grindr: undefined;
  LiquidSwiper: undefined;
  LockScreen: undefined;
  Phone: undefined;
  Messages: {
    id?: number;
  };
  Movies: undefined;
  Notes: {id?: string};
  OsLoading: {overrideRoute?: string};
  PhotosApp: undefined;
  ScratchPad: undefined;
  Scruff: undefined;
  Settings: undefined;
  Triggers: undefined;
};

export type AppRoutes = keyof typeof SCREENS;

export type NavigationParamList = {} & {
  [P in keyof typeof SCREENS]: screenParams[P];
};
