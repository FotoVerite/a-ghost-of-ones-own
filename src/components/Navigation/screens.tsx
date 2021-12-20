import {Bank} from 'components/Bank';
import Desktop from 'components/Desktop';
import LiquidSwiper from 'components/LiquidSwiper';
import Messenger from 'components/Messanger/';
import Notes from 'components/Notes';
import {Phone} from 'components/Phone';
import Photos from 'components/Photos';
import AlbumView, {AlbumType} from 'components/Photos/AlbumView';
import PhotosViewer from 'components/Photos/PhotosViewer';
import ScratchPad from 'components/ScratchPad';

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
  Grindr: {
    title: '',
    component: Desktop,
  },
  LiquidSwiper: {
    title: '',
    component: LiquidSwiper,
  },
  Messages: {
    title: '',
    component: Messenger,
  },
  Notes: {
    title: 'Notes',
    component: Notes,
  },
  Photos: {
    title: 'Photos',
    component: Photos,
  },
  PhotosViewer: {
    title: '',
    component: PhotosViewer,
    transitionSpec: {
      open: {animation: 'timing', config: {duration: 200}},
      close: {animation: 'timing', config: {duration: 200}},
    },
    shared: (route, otherRoute, showing) => {
      const {id} = route.params;
      return [
        {
          id: `photo.${id}`,
          resize: 'clip',
          // align: ''left-top'
        },
      ];
    },
  },
  Album: {
    title: 'Album',
    component: AlbumView,
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
  Grindr: undefined;
  LiquidSwiper: undefined;
  Phone: undefined;
  Messages: {
    id?: number;
  };
  Notes: {id?: string};
  Photos: {id?: string};
  PhotosViewer: {album: AlbumType; id: number};
  ScratchPad: undefined;
  Scruff: undefined;
};

export type AppRoutes = keyof typeof SCREENS;

export type NavigationParamList = {} & {
  [P in keyof typeof SCREENS]: screenParams[P];
};
