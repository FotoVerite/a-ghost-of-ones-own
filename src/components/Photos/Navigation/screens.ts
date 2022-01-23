import Photos from 'components/Photos';
import AlbumView, {AlbumType} from 'components/Photos/AlbumView';
import PhotosViewer from 'components/Photos/PhotosViewer';
import Albums from '../Albums';

export const SCREENS = {
  Albums: {
    title: 'Albums',
    component: Albums,
  },
  Album: {
    title: 'Album',
    component: AlbumView,
  },
  Photos: {
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
};

export type screenParams = {
  Albums: undefined;
  Album: {
    id: number;
  };
  Photos: {id?: string};
  PhotosViewer: {album: AlbumType; id: number};
};

export type PhotoAppRoute = keyof typeof SCREENS;

export type PhotoAppNavigationParamList = {} & {
  [P in keyof typeof SCREENS]: screenParams[P];
};
