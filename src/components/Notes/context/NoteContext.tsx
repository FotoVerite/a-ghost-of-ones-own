/* global __DEV__ */

import React, {FC, useEffect} from 'react';

import {
  runOnJS,
  SharedValue,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {anxiety} from '../notes/anxiety';
import {chalk} from '../notes/chalk';
import {coldBrew} from '../notes/coldBrew';
import {dating} from '../notes/dating';
import {dreams} from '../notes/dreams';
import {gardening} from '../notes/gardening';
import {hallway} from '../notes/hallway';
import {InTheBackOfTheirHead} from '../notes/inTheBackOfTheirHead';
import {lastNight} from '../notes/lastNight';
import {mirrors} from '../notes/mirrors';
import {nsa} from '../notes/nsa';
import {record_posts} from '../notes/record_posts';
import {screenTime} from '../notes/screentime';
import {severance} from '../notes/severance';
import {swarm} from '../notes/swarm';
import {theCeiling} from '../notes/theCeiling';
import {whatScaresMe} from '../notes/whatScaresMe';

export type FolderProps = {
  title: string;
  notes: Array<NoteProps>;
};
export type NoteProps = {
  note: Element;
  title: string;
};

export type NoteContextTypeDigest = {};

export type NoteContextTypeDigested = {
  sharedValues: {
    folderSelected: SharedValue<number>;
  };
  folder: {
    set: React.Dispatch<React.SetStateAction<FolderProps | undefined>>;
    state: FolderProps | undefined;
  };

  folders: Array<FolderProps>;
  noteState: {
    set: React.Dispatch<React.SetStateAction<number>>;
    state: number;
  };
  note: {
    set: React.Dispatch<React.SetStateAction<NoteProps | undefined>>;
    state: NoteProps | undefined;
  };
  viewableFolders: {
    set: React.Dispatch<React.SetStateAction<FolderProps[] | undefined>>;
    state: FolderProps[] | undefined;
  };
  viewableNotes: {
    set: React.Dispatch<React.SetStateAction<NoteProps[] | undefined>>;
    state: NoteProps[] | undefined;
  };
};
//defaults for empty app
export const NoteContext = React.createContext<NoteContextTypeDigested>({});

const NoteContextProvider: FC<NoteContextTypeDigest> = props => {
  const [folder, setFolder] = React.useState<FolderProps>();
  const [note, setNote] = React.useState<NoteProps>();

  const [viewableNotes, setViewableNotes] = React.useState<NoteProps[]>();
  const [noteState, setNoteState] = React.useState<number>(0);

  const folderSelected = useSharedValue(0);

  const folder1 = {
    title: 'Personal',
    notes: [anxiety, nsa, InTheBackOfTheirHead, severance],
  };

  const folder2 = {
    title: 'Notes',
    notes: [
      chalk,
      record_posts,
      screenTime,
      coldBrew,
      dreams,
      lastNight,
      whatScaresMe,
      gardening,
      theCeiling,
      hallway,
      dating,
      mirrors,
      swarm,
    ],
  };

  const [viewableFolders, setViewableFolder] = React.useState<
    FolderProps[] | undefined
  >([folder1, folder2]);

  useEffect(() => {
    if (folder) {
      setNoteState(1);
    }
  }, [folder]);

  useEffect(() => {
    if (note) {
      setNoteState(2);
    }
  }, [note]);

  useEffect(() => {
    if (noteState === 0) {
      folderSelected.value = withTiming(noteState, {}, isFinished => {
        if (isFinished) runOnJS(setFolder)(undefined);
      });
    } else if (noteState === 1) {
      folderSelected.value = withDelay(
        175,
        withTiming(noteState, {}, isFinished => {
          if (isFinished) runOnJS(setNote)(undefined);
        }),
      );
    } else {
      folderSelected.value = withTiming(noteState);
    }
  }, [noteState]);

  return (
    <NoteContext.Provider
      value={{
        noteState: {
          state: noteState,
          set: setNoteState,
        },
        sharedValues: {
          folderSelected: folderSelected,
        },
        folder: {
          set: setFolder,
          state: folder,
        },
        folders: [folder1, folder2],
        note: {
          set: setNote,
          state: note,
        },
        viewableFolders: {
          set: setViewableFolder,
          state: viewableFolders,
        },
        viewableNotes: {
          set: setViewableNotes,
          state: viewableNotes,
        },
      }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteContextProvider;
export const NoteContextConsumer = NoteContext.Consumer;
