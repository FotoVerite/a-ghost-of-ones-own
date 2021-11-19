import Desktop from 'components/Desktop';
import Messenger from 'components/Messanger/';
import Notes from 'components/Notes';
import Photos from 'components/Photos';
import AlbumView, {AlbumType} from 'components/Photos/AlbumView';
import PhotosViewer from 'components/Photos/PhotosViewer';
import ScratchPad from 'components/ScratchPad';

export const SCREENS = {
  Desktop: {
    title: '',
    component: Desktop,
  },
  Grindr: {
    title: '',
    component: Desktop,
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
      open: {animation: 'timing', config: {duration: 300}},
      close: {animation: 'timing', config: {duration: 300}},
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
  Desktop: undefined;
  Grindr: undefined;
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
