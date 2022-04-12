import {Bank} from 'components/Bank';
import Desktop from 'components/Desktop';
import LiquidSwiper from 'components/LiquidSwiper';
import Messenger from 'components/Messanger/';
import NesGamepad from 'components/NesGamepad';
import Notes from 'components/Notes';
import Opening from 'components/Opening';
import {Phone} from 'components/Phone';
import Photos from 'components/Photos';
import AlbumView, {AlbumType} from 'components/Photos/AlbumView';
import PhotosViewer from 'components/Photos/PhotosViewer';
import ScratchPad from 'components/ScratchPad';
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
    component: Desktop,
  },
  LiquidSwiper: {
    title: '',
    component: LiquidSwiper,
  },
  Opening: {
    title: '',
    component: Opening,
  },
  OsLoading: {
    title: '',
    component: OsLoading,
  },
  Messages: {
    title: '',
    component: Messenger,
  },
  Notes: {
    title: 'Notes',
    component: Notes,
  },
  PhotosApp: {
    title: 'Photos',
    component: Photos,
  },
  Scruff: {
    title: '',
    component: Desktop,
  },
  ScratchPad: {
    title: 'Scratch Pad',
    component: ScratchPad,
  },
};

export type screenParams = {
  Album: {
    id: number;
  };
  Bank: undefined;
  Desktop: undefined;
  Gamepad: undefined;
  Grindr: undefined;
  LiquidSwiper: undefined;
  Phone: undefined;
  Messages: {
    id?: number;
  };
  Notes: {id?: string};
  Opening: undefined;
  OsLoading: undefined;
  PhotosApp: undefined;
  ScratchPad: undefined;
  Scruff: undefined;
};

export type AppRoutes = keyof typeof SCREENS;

export type NavigationParamList = {} & {
  [P in keyof typeof SCREENS]: screenParams[P];
};
