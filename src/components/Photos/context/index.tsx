/* global __DEV__ */

import React, {FC} from 'react';
import {ImageURISource} from 'react-native';

import mbv from 'components/Notes/notes/images/records/mbv.jpeg';
import ct from 'components/Notes/notes/images/records/ct.jpeg';
import records1 from 'components/Notes/notes/images/records/records1.jpeg';
import bmr from 'components/Notes/notes/images/records/bmr.jpeg';
import coil from 'components/Notes/notes/images/records/coil.jpeg';
import {recent} from '../albums/recent';
import {SharedValue, useSharedValue} from 'react-native-reanimated';

export type AlbumProps = {
  title: string;
  coverPhoto: ImageURISource;
  photos: Array<PhotoProps>;
};
export type PhotoProps = {
  source: ImageURISource;
  date: string;
  note?: string;
  title: string;
};

export type PhotoContextTypeDigest = {};

export type PhotoContextTypeDigested = {
  sharedValues: {
    showInfo: SharedValue<number>;
    showHeader: SharedValue<number>;
  };
  album: {
    set: React.Dispatch<React.SetStateAction<AlbumProps | undefined>>;
    state: AlbumProps | undefined;
  };

  albums: Array<AlbumProps>;
  PhotoState: {
    set: React.Dispatch<React.SetStateAction<number>>;
    state: number;
  };
  viewableAlbums: {
    set: React.Dispatch<React.SetStateAction<AlbumProps[] | undefined>>;
    state: AlbumProps[] | undefined;
  };
  viewablePhotos: {
    set: React.Dispatch<React.SetStateAction<PhotoProps[] | undefined>>;
    state: PhotoProps[] | undefined;
  };
};
//defaults for empty app
export const PhotoContext = React.createContext<PhotoContextTypeDigested>({});

const PhotoContextProvider: FC<PhotoContextTypeDigest> = props => {
  const [album, setAlbum] = React.useState<AlbumProps>();
  const [Photo, setPhoto] = React.useState<PhotoProps>();

  const [viewablePhotos, setViewablePhotos] = React.useState<PhotoProps[]>();
  const [photoState, setPhotoState] = React.useState<number>(0);
  const showInfo = useSharedValue(0);
  const showHeader = useSharedValue(0);

  const album1 = {
    title: 'One',
    coverPhoto: coil,
    photos: recent.photos,
  };

  const album2 = {
    title: 'One',
    coverPhoto: bmr,
    photos: recent.photos,
  };
  const album3 = {
    title: 'One',
    coverPhoto: records1,
    photos: recent.photos,
  };
  const album4 = {
    title: 'One',
    coverPhoto: ct,
    photos: recent.photos,
  };
  const album5 = {
    title: 'One',
    coverPhoto: mbv,
    photos: recent.photos,
  };

  const [viewablealbums, setViewablealbum] = React.useState<
    AlbumProps[] | undefined
  >([album1, album2]);

  return (
    <PhotoContext.Provider
      value={{
        PhotoState: {
          state: photoState,
          set: setPhotoState,
        },
        sharedValues: {
          showInfo: showInfo,
          showHeader: showHeader,
        },
        album: {
          set: setAlbum,
          state: album,
        },
        albums: [album1, album2, album3, album4, album5],
        viewableAlbums: {
          set: setViewablealbum,
          state: viewablealbums,
        },
        viewablePhotos: {
          set: setViewablePhotos,
          state: viewablePhotos,
        },
      }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
export const PhotoContextConsumer = PhotoContext.Consumer;
